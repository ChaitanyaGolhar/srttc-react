import React from 'react';
import logo from '../../assets/images/srttc-logo.png'; 

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 sm:py-6 lg:py-8">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">

        
        <div className="flex items-center space-x-4">
          <img 
            src={logo} 
            alt="SRTTC Logo" 
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain" 
          />
          <div className="text-center sm:text-left">
            <p className="text-sm text-blue-700 font-semibold uppercase tracking-wide">
              Suman Ramesh Tulsiani Charitable Trust's
            </p>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-800 leading-tight">
              Suman Ramesh Tulsiani Technical Campus
            </h1>
            <h2 className="text-md sm:text-xl font-semibold text-gray-700 mt-0.5">
              Faculty of Engineering
            </h2>
          </div>
        </div>

        
        <div className="text-center sm:text-right text-gray-600 text-sm leading-relaxed sm:max-w-md">
          <p className="font-medium">
            Approved by <span className="text-red-700">AICTE</span> and <span className="text-red-700">DTE Maharashtra</span>.
          </p>
          <p className="mt-1">
            Affiliated to <span className="text-blue-700">SPPU</span> and <span className="text-blue-700">MSBTE</span>.
          </p>
          <p className="mt-1">
            An <span className="font-bold">ISO 9001:2015</span> certified Institute and Accredited by <span className="font-bold">NAAC with 'B+' Grade</span>.
          </p>
          <p className="mt-1">
            DTE Code <span className="font-semibold">EN6767</span>, MSBTE code <span className="font-semibold">1729</span>.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;