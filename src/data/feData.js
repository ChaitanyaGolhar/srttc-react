import {
  Users, FlaskConical, Calendar, BookOpen, Trophy, GraduationCap
} from 'lucide-react';

export const feHeroData = {
  slides: [
    { id: 1, src: 'https://via.placeholder.com/1920x1080/0d3b66/f9f7f7?text=Vibrant+Campus+Life' },
    { id: 2, src: 'https://via.placeholder.com/1920x1080/3b5998/f9f7f7?text=Students+in+Lab' },
    { id: 3, src: 'https://via.placeholder.com/1920x1080/247ba0/f9f7f7?text=Modern+Classrooms' },
  ],
  title: "Department of Engineering Science & Humanities",
  subtitle: "Building the foundations for tomorrow's engineering leaders.",
};

export const feStatsData = [
  { value: '15+', label: 'Faculty Members', color: 'yellow-500' },
  { value: '5+', label: 'Modern Labs', color: 'pink-500' },
  { value: '10+', label: 'Workshops', color: 'purple-500' },
  { value: '20+', label: 'Publications', color: 'red-500' },
  { value: '30+', label: 'Student Achievements', color: 'indigo-500' },
  { value: '100%', label: 'Placement Support', color: 'green-500' },
];

export const feFacultyData = [
  { name: 'Dr. A. B. Chaudhari', designation: 'HOD & Professor', img: 'https://via.placeholder.com/250/007BFF/FFFFFF?text=HOD', email: 'hod.fe@srttc.ac.in', specialization: 'Quantum Physics' },
  { name: 'Prof. C. D. Sharma', designation: 'Assoc. Professor', img: 'https://via.placeholder.com/250/28A745/FFFFFF?text=CS', email: 'cd.sharma@srttc.ac.in', specialization: 'Numerical Analysis' },
];

export const feLabsData = [
    { id: 1, type: 'Physics', title: 'Applied Physics Lab', images: ['https://via.placeholder.com/800x600/007BFF/FFFFFF?text=Optics+Setup'], description: 'Equipped with modern optics, electronics, and mechanics experiment kits.', equipment: ['Spectrometers', 'Digital Oscilloscopes'] },
    { id: 2, type: 'Chemistry', title: 'Engineering Chemistry Lab', images: ['https://via.placeholder.com/800x600/28A745/FFFFFF?text=Titration+Station'], description: 'Advanced tools for chemical analysis and synthesis experiments.', equipment: ['pH Meters', 'Conductivity Meters'] },
];

export const feEventsData = {
    upcoming: [{ date: 'Oct 05, 2025', title: 'Guest Lecture on AI', description: 'By Dr. Priya Sharma from IIT Bombay.' }],
    past: [{ title: 'Annual Sports Day', year: '2024', image: 'https://via.placeholder.com/400x300/e0f2f7?text=Sports+Day' }]
};

export const fePublicationsData = [
    { title: 'Advanced Material Science with Nanotechnology', authors: 'Dr. A. B. Chaudhari', journal: 'Journal of Sustainable Materials', year: '2024', tag: 'SCI', abstract: 'An in-depth analysis of new-age materials and their application in sustainable energy solutions.' },
    { title: 'Simplified Calculus: A Modern Pedagogical Approach', authors: 'Prof. C. D. Sharma', journal: 'International Journal of Engineering Education', year: '2023', tag: 'UGC', abstract: 'This paper presents a novel approach to teaching calculus to first-year engineering students.' },
];