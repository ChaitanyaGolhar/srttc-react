import React, { useEffect, useRef, useCallback, useState } from 'react';
// 1. Import useNavigate for navigation
import { useNavigate } from 'react-router-dom';

// --- IMPORT YOUR ICONS AND LOGO ---
import facebookIcon from '../../assets/icons/facebook.svg';
import twitterIcon from '../../assets/icons/twitter.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import logo from '../../assets/images/srttc-logo.png'; // Make sure the path to your logo is correct

const FacebookIcon = (props) => <img src={facebookIcon} alt="Facebook" className="w-5 h-5" {...props} />;
const TwitterIcon = (props) => <img src={twitterIcon} alt="Twitter" className="w-5 h-5" {...props} />;
const LinkedinIcon = (props) => <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" {...props} />;
const InstagramIcon = (props) => <img src={instagramIcon} alt="Instagram" className="w-5 h-5" {...props} />;

// --- DATA CONFIGURATION ---
const academicsLinks = ["Departments", "Programs Offered", "SPPU Syllabus", "Academic Calendar"];
const quickLinks = ["DTE Portal", "SPPU", "Online Grievance", "Student Feedback"];
const socialLinks = [
    { href: "https://www.facebook.com/profile.php?id=100009512947239", label: "Facebook", icon: FacebookIcon },
    { href: "https://x.com/SumanPune", label: "Twitter", icon: TwitterIcon },
    { href: "https://www.linkedin.com/in/srttc-tpo/", label: "LinkedIn", icon: LinkedinIcon },
    { href: "https://www.instagram.com/srttc_official", label: "Instagram", icon: InstagramIcon },
];

// --- REUSABLE SUB-COMPONENTS ---
const FooterColumn = ({ title, links }) => (
    <div>
        <h3 className="font-semibold text-lg text-gray-900 mb-4 tracking-wide">{title}</h3>
        <ul className="space-y-3 text-sm">
            {links.map((link, i) => (
                <li key={i}>
                    <a href="#" className="bg-gradient-to-r from-black to-gray-700 bg-no-repeat bg-[length:200%_100%] bg-[position:100%] text-transparent bg-clip-text hover:bg-[position:0%] transition-all duration-500">
                        {link}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

// --- MAIN FOOTER COMPONENT ---
const Footer = () => {
    // 2. Initialize the navigate function from the hook
    const navigate = useNavigate();
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const mouse = useRef({ x: null, y: null });
    const [isVisible, setIsVisible] = useState(false);

    // 3. Create a function to handle the button click
    const handleContactClick = () => {
        // This will navigate to your contact page.
        // Make sure you have a route set up for '/contact'.
        navigate('/contact');
    };

    const handleMouseMove = useCallback((event) => {
        if (!canvasRef.current) return;
        const rect = canvasRef.current.getBoundingClientRect();
        mouse.current.x = event.clientX - rect.left;
        mouse.current.y = event.clientY - rect.top;
    }, []);

    // Effect for scroll-triggered animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    // Effect for canvas particle animation
    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        let particles;
        let animationFrameId;

        class Particle {
             constructor(x, y, directionX, directionY, size) {
                this.x = x; this.y = y; this.directionX = directionX;
                this.directionY = directionY; this.size = size;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = 'rgba(55, 65, 81, 0.4)'; 
                ctx.fill();
            }
            update() {
                if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
                if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;
                this.x += this.directionX;
                this.y += this.directionY;
                this.draw();
            }
        }

        const init = () => {
            particles = [];
            let numberOfParticles = (canvas.height * canvas.width) / 9000;
            for (let i = 0; i < numberOfParticles; i++) {
                let size = (Math.random() * 2) + 1;
                let x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
                let y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
                let directionX = (Math.random() * .4) - .2;
                let directionY = (Math.random() * .4) - .2;
                particles.push(new Particle(x, y, directionX, directionY, size));
            }
        };

        const connect = () => {
            let opacityValue = 1;
            for (let a = 0; a < particles.length; a++) {
                if (mouse.current.x === null || mouse.current.y === null) continue;
                let distance = Math.sqrt(
                    Math.pow(mouse.current.x - particles[a].x, 2) +
                    Math.pow(mouse.current.y - particles[a].y, 2)
                );
                if (distance < 100) {
                    opacityValue = 1 - (distance / 100);
                    ctx.strokeStyle = `rgba(0, 0, 0, ${opacityValue})`; 
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(mouse.current.x, mouse.current.y);
                    ctx.stroke();
                }
            }
        };

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            if(particles) {
                particles.forEach(p => p.update());
                connect();
            }
        };

        const resizeCanvas = () => {
            canvas.width = container.offsetWidth;
            canvas.height = container.offsetHeight;
            init();
        };
        
        const observer = new ResizeObserver(resizeCanvas);
        observer.observe(container);

        resizeCanvas();
        animate();
        container.addEventListener('mousemove', handleMouseMove);

        return () => {
            observer.disconnect();
            window.cancelAnimationFrame(animationFrameId);
            if(container) {
                container.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, [handleMouseMove]);

    const mapQuery = "Suman Ramesh Tulsiani Technical Campus, Kamshet, Maharashtra, India";
    // Fixed Google Maps URL for the link
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;
    
    const getAnimationClass = (delay) => {
        return `transition-all duration-700 ${isVisible ? `opacity-100 translate-y-0 delay-${delay}` : 'opacity-0 translate-y-10'}`;
    };

    return (
        <footer ref={containerRef} className="bg-gradient-to-br from-gray-100 to-gray-400 text-gray-800 w-full font-sans relative overflow-hidden">
            <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />
            <div className="relative z-10">
                <div className="container mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        <div className={getAnimationClass('0')}>
                            <div className="flex flex-col space-y-4">
                                <div className="flex items-center space-x-3">
                                    <img src={logo} alt="SRTTC Logo" className="w-10 h-10 rounded-full" />
                                    <span className="font-bold text-xl text-black tracking-wider">SRTTC</span>
                                </div>
                                <p className="text-sm leading-relaxed text-gray-700">An AICTE approved, NAAC 'B+' accredited institute dedicated to excellence in engineering education.</p>
                                <div className="flex space-x-4 pt-2">
                                    {socialLinks.map(link => (
                                        <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="text-gray-600 hover:text-black transform hover:-translate-y-1 transition-all duration-300">
                                            <link.icon />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className={getAnimationClass('150')}>
                            <FooterColumn title="Academics" links={academicsLinks} />
                        </div>
                        <div className={getAnimationClass('300')}>
                            <FooterColumn title="Quick Links" links={quickLinks} />
                        </div>
                        <div className={getAnimationClass('500')}>
                             <div>
                                <h3 className="font-semibold text-lg text-gray-900 mb-4 tracking-wide">Our Location</h3>
                                <a 
                                    href={googleMapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm leading-relaxed text-gray-700 block hover:text-black transition-colors duration-300"
                                >
                                    {mapQuery}
                                </a>
                                <div className="mt-4 rounded-lg shadow-md overflow-hidden">
                                    {/* Fixed Google Maps embed URL */}
                                    <iframe 
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.949203993676!2d73.53203557496896!3d18.75580583238394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2abbfeb8600bb%3A0x4669673f97336d33!2sSuman%20Ramesh%20Tulsiani%20College%20Of%20Engineering%2C%20Maharashtra%20410405!5e0!3m2!1sen!2sin!4v1758187729949!5m2!1sen!2sin" 
                                        width="100%" 
                                        height="150" 
                                        style={{border:0}} 
                                        allowFullScreen="" 
                                        loading="lazy" 
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                                {/* 4. Add the onClick handler to the button */}
                                <button 
                                    onClick={handleContactClick}
                                    className="cursor-pointer mt-4 w-full py-2 px-5 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition-all duration-300"
                                >
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-300 bg-black/5">
                    <div className="container mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center text-sm">
                        <p className="text-gray-600 mb-2 md:mb-0">© {new Date().getFullYear()} Suman Ramesh Tulsiani Technical Campus. All rights reserved.</p>
                        <div className="flex space-x-6">
                            <a href="#" className="bg-gradient-to-r from-black to-gray-600 bg-no-repeat bg-[length:200%_100%] bg-[position:100%] text-transparent bg-clip-text hover:bg-[position:0%] transition-all duration-500">Privacy Policy</a>
                            <a href="#" className="bg-gradient-to-r from-black to-gray-600 bg-no-repeat bg-[length:200%_100%] bg-[position:100%] text-transparent bg-clip-text hover:bg-[position:0%] transition-all duration-500">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;