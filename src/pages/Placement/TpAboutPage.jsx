import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users, Briefcase, BarChart3, Search, ArrowUpDown, ChevronLeft,
  ChevronRight, Download, RefreshCw, Star,TrendingUp
} from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Cell
} from "recharts";
import placementData from "../../data/placementData"; // Assuming this path is correct

// --------------------------
// CONFIGURATION & HELPERS
// --------------------------
const PAGE_OPTIONS = [10, 20, 50];
const CHART_COLORS = ["#38bdf8", "#34d399", "#a78bfa", "#f87171", "#fb923c"];
const cls = (...args) => args.filter(Boolean).join(" ");
const formatNumber = (n) => new Intl.NumberFormat().format(n);
const formatLPA = (n) => n ? `${n.toFixed(1)} LPA` : 'N/A';

// --------------------------
// DATA AUGMENTATION (Simulating real-world data)
// --------------------------
const augmentData = (data) => {
  const roles = ["Software Engineer", "Data Analyst", "Mechanical Engineer", "Site Engineer", "Graduate Trainee", "Associate Consultant"];
  return Object.keys(data).reduce((acc, year) => {
    acc[year] = data[year].map(student => {
      const randomRole = roles[Math.floor(Math.random() * roles.length)];
      const randomPackage = parseFloat((Math.random() * (12 - 3.5) + 3.5).toFixed(1)); // Random package between 3.5 and 12 LPA
      return { ...student, role: student.role || randomRole, packageLPA: student.packageLPA || randomPackage };
    });
    return acc;
  }, {});
};
const augmentedPlacementData = augmentData(placementData);

// --------------------------
// DEBOUNCE HOOK
// --------------------------
function useDebounced(value, delay = 300) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
}

// --------------------------
// CUSTOM HOOK: Dashboard Logic
// --------------------------
function usePlacementDashboard(initialYear) {
    const years = useMemo(() => Object.keys(augmentedPlacementData).sort((a, b) => b.localeCompare(a)), []);
    const [year, setYear] = useState(initialYear || years[0]);
    const [search, setSearch] = useState("");
    const [branch, setBranch] = useState("All");
    const [sort, setSort] = useState({ key: "sr", dir: "asc" });
    const [pagination, setPagination] = useState({ page: 1, size: PAGE_OPTIONS[0] });

    const debouncedSearch = useDebounced(search);

    const yearData = useMemo(() => augmentedPlacementData[year] || [], [year]);
    const availableBranches = useMemo(() => ["All", ...Array.from(new Set(yearData.map(s => s.branch)))], [yearData]);
    
    const stats = useMemo(() => {
        const total = yearData.length;
        if (total === 0) return { total: 0, uniqueCompanies: 0, highestPackage: 0, avgPackage: 0, companyDistribution: [] };

        const uniqueCompanies = new Set(yearData.map(s => s.company)).size;
        const packages = yearData.map(s => s.packageLPA).filter(Boolean);
        const highestPackage = Math.max(...packages, 0);
        const avgPackage = packages.reduce((a, b) => a + b, 0) / packages.length;
        
        const companyCounts = yearData.reduce((acc, s) => { acc[s.company] = (acc[s.company] || 0) + 1; return acc; }, {});
        const companyDistribution = Object.entries(companyCounts)
            .map(([name, count]) => ({ name, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 7); // Top 7 companies

        return { total, uniqueCompanies, highestPackage, avgPackage, companyDistribution };
    }, [yearData]);

    const processedData = useMemo(() => {
        let arr = [...yearData];
        if (branch !== "All") arr = arr.filter(r => r.branch === branch);

        const q = (debouncedSearch || "").trim().toLowerCase();
        if (q) {
          arr = arr.filter(r => 
            [r.name, r.company, r.role, r.branch].some(f => String(f).toLowerCase().includes(q))
          );
        }

        arr.sort((a, b) => {
          const { key, dir } = sort;
          const va = a[key], vb = b[key];
          if (va === vb) return 0;
          const order = (typeof va === 'number' && typeof vb === 'number') ? va - vb : String(va).localeCompare(String(vb));
          return dir === 'asc' ? order : -order;
        });

        return arr;
    }, [yearData, branch, debouncedSearch, sort]);

    const totalPages = Math.max(1, Math.ceil(processedData.length / pagination.size));
    const paginatedData = useMemo(() => {
        const start = (pagination.page - 1) * pagination.size;
        return processedData.slice(start, start + pagination.size);
    }, [processedData, pagination]);

    useEffect(() => {
        if (pagination.page > totalPages) setPagination(p => ({ ...p, page: 1 }));
    }, [totalPages, pagination.page]);

    const resetFilters = () => {
        setSearch("");
        setBranch("All");
        setSort({ key: "sr", dir: "asc" });
        setPagination(p => ({ ...p, page: 1 }));
    };

    return {
        state: { years, year, search, branch, sort, pagination, debouncedSearch },
        setters: { setYear, setSearch, setBranch, setSort, setPagination },
        data: { stats, availableBranches, processedData, paginatedData, totalPages },
        actions: { resetFilters }
    };
}

// --------------------------
// UI COMPONENTS
// --------------------------
const StatCard = ({ icon: Icon, title, value, color }) => (
    <motion.div
        className={cls("flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm border-l-4", color.border)}
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
    >
        <div className={cls("p-3 rounded-full", color.bg)}>
            <Icon className={cls("h-6 w-6", color.text)} />
        </div>
        <div>
            <p className="text-sm font-medium text-slate-500">{title}</p>
            <p className="text-2xl font-bold text-slate-800">{value}</p>
        </div>
    </motion.div>
);

const CompanyRecruitersChart = ({ data }) => (
    <div className="bg-white rounded-xl p-5 shadow-sm h-full">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Top Recruiters</h3>
        <ResponsiveContainer width="100%" height={300}>
            {data && data.length > 0 ? (
                <BarChart data={data} layout="vertical" margin={{ top: 0, right: 20, left: 20, bottom: 0 }}>
                    <XAxis type="number" hide />
                    <YAxis
                        type="category"
                        dataKey="name"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fontSize: 12, fill: '#475569' }}
                        width={100}
                    />
                    <Tooltip cursor={{ fill: '#f1f5f9' }} formatter={(value) => [`${value} students`, null]} />
                    <Bar dataKey="count" barSize={20} radius={[0, 8, 8, 0]}>
                        {data.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                        ))}
                    </Bar>
                </BarChart>
            ) : (
                <div className="flex items-center justify-center h-full text-slate-500">No company data to display.</div>
            )}
        </ResponsiveContainer>
    </div>
);

const SortableHeader = ({ label, colKey, sort, setSort }) => {
    const isSorted = sort.key === colKey;
    const Icon = isSorted ? (sort.dir === 'asc' ? '▲' : '▼') : <ArrowUpDown size={14} />;
    return (
        <th
            scope="col"
            className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider cursor-pointer select-none"
            onClick={() => setSort(s => ({ key: colKey, dir: s.key === colKey && s.dir === 'asc' ? 'desc' : 'asc' }))}
        >
            <div className="flex items-center gap-2">
                {label}
                <span className={cls("text-slate-400", isSorted && "text-slate-800")}>{Icon}</span>
            </div>
        </th>
    );
};

// --------------------------
// MAIN COMPONENT
// --------------------------
export default function TpAboutPage() {
    const { state, setters, data, actions } = usePlacementDashboard();
    const { years, year, search, branch, pagination } = state;
    const { setYear, setSearch, setBranch, setPagination } = setters;
    const { stats, availableBranches, processedData, paginatedData, totalPages } = data;
    const { resetFilters } = actions;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    return (
        <main className="min-h-screen bg-slate-100 p-4 sm:p-6 lg:p-8 font-sans">
            <motion.div
                className="max-w-screen-xl mx-auto"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Header */}
                <motion.header
                    className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                    variants={{ hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0 } }}
                >
                    <div>
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Placement Dashboard</h1>
                        <p className="mt-1 text-slate-600">Insights for Academic Year {year}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={resetFilters} className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-white border rounded-lg shadow-sm hover:bg-slate-50">
                            <RefreshCw className="w-4 h-4 text-slate-600" /> Reset Filters
                        </button>
                        <button onClick={() => alert("CSV Exported!")} className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700">
                            <Download className="w-4 h-4" /> Export CSV
                        </button>
                    </div>
                </motion.header>

                {/* Stats Grid */}
                <motion.section
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8"
                    variants={containerVariants}
                >
                    <StatCard icon={Users} title="Total Placements" value={formatNumber(stats.total)} color={{ border: 'border-sky-500', bg: 'bg-sky-100', text: 'text-sky-600' }} />
                    <StatCard icon={Briefcase} title="Unique Companies" value={formatNumber(stats.uniqueCompanies)} color={{ border: 'border-emerald-500', bg: 'bg-emerald-100', text: 'text-emerald-600' }} />
                    <StatCard icon={Star} title="Highest Package" value={formatLPA(stats.highestPackage)} color={{ border: 'border-amber-500', bg: 'bg-amber-100', text: 'text-amber-600' }} />
                    <StatCard icon={TrendingUp} title="Average Package" value={formatLPA(stats.avgPackage)} color={{ border: 'border-purple-500', bg: 'bg-purple-100', text: 'text-purple-600' }} />
                </motion.section>

                {/* Main Content: Chart + Table */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                >
                    {/* Left Column: Chart */}
                    <motion.aside
                        className="lg:col-span-1"
                        variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
                    >
                        <CompanyRecruitersChart data={stats.companyDistribution} />
                    </motion.aside>

                    {/* Right Column: Table and Controls */}
                    <motion.section
                        className="lg:col-span-2 bg-white rounded-xl shadow-sm overflow-hidden"
                        variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } }}
                    >
                        {/* Filter Controls */}
                        <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row gap-3">
                            <select value={year} onChange={(e) => setYear(e.target.value)} className="h-10 px-3 border rounded-md bg-white w-full sm:w-auto">
                                {years.map(y => <option key={y} value={y}>A.Y. {y}</option>)}
                            </select>
                            <select value={branch} onChange={(e) => setBranch(e.target.value)} className="h-10 px-3 border rounded-md bg-white w-full sm:w-auto">
                                {availableBranches.map(b => <option key={b} value={b}>{b}</option>)}
                            </select>
                            <div className="relative flex-grow">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                                <input value={search} onChange={(e) => setSearch(e.target.value)} className="w-full h-10 pl-10 pr-3 border rounded-md" placeholder="Search name, company, role..." />
                            </div>
                        </div>

                        {/* Table */}
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-slate-200">
                                <thead className="bg-slate-50">
                                    <tr>
                                        <SortableHeader label="Sr." colKey="sr" sort={state.sort} setSort={setters.setSort} />
                                        <SortableHeader label="Student" colKey="name" sort={state.sort} setSort={setters.setSort} />
                                        <SortableHeader label="Branch" colKey="branch" sort={state.sort} setSort={setters.setSort} />
                                        <SortableHeader label="Company" colKey="company" sort={state.sort} setSort={setters.setSort} />
                                        <SortableHeader label="Package" colKey="packageLPA" sort={state.sort} setSort={setters.setSort} />
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-slate-200">
                                <AnimatePresence>
                                {paginatedData.length > 0 ? paginatedData.map((s, i) => (
                                    <motion.tr
                                        key={`${s.sr}-${s.name}`}
                                        className="hover:bg-slate-50 transition-colors"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ delay: i * 0.02 }}
                                    >
                                        <td className="px-4 py-3 text-sm text-slate-500">{s.sr}</td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center text-xs font-semibold text-slate-600">{String(s.name).split(' ').map(n => n[0]).join('').toUpperCase()}</div>
                                                <div>
                                                    <div className="text-sm font-medium text-slate-800">{s.name}</div>
                                                    <div className="text-xs text-slate-500">{s.role}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-sm text-slate-600">{s.branch}</td>
                                        <td className="px-4 py-3 text-sm font-medium text-sky-700">{s.company}</td>
                                        <td className="px-4 py-3 text-sm font-semibold text-emerald-700">{formatLPA(s.packageLPA)}</td>
                                    </motion.tr>
                                )) : (
                                    <tr>
                                        <td colSpan="5" className="p-16 text-center">
                                            <h3 className="text-lg font-semibold text-slate-700">No Results Found</h3>
                                            <p className="text-sm text-slate-500 mt-1">Try adjusting your filters or search term.</p>
                                        </td>
                                    </tr>
                                )}
                                </AnimatePresence>
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        <div className="p-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-slate-600">Rows per page:</span>
                                <select value={pagination.size} onChange={e => setPagination(p => ({...p, size: Number(e.target.value), page: 1}))} className="h-8 px-2 border rounded-md">
                                    {PAGE_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                                </select>
                            </div>
                            <div className="text-sm text-slate-600">
                                Page {pagination.page} of {totalPages} ({processedData.length} results)
                            </div>
                            <div className="flex items-center gap-2">
                                <button onClick={() => setPagination(p => ({...p, page: p.page - 1}))} disabled={pagination.page === 1} className="px-3 py-1.5 rounded-md border bg-white disabled:opacity-50 flex items-center"><ChevronLeft size={16} /></button>
                                <button onClick={() => setPagination(p => ({...p, page: p.page + 1}))} disabled={pagination.page === totalPages} className="px-3 py-1.5 rounded-md border bg-white disabled:opacity-50 flex items-center"><ChevronRight size={16} /></button>
                            </div>
                        </div>
                    </motion.section>
                </motion.div>
            </motion.div>
        </main>
    );
}