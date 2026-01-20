import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';

// --- ADVANCED RECRUITER SCROLLER COMPONENT ---

const RecruiterScrollerAdvanced = ({
    logos,
    speed = 35, // UPDATED: Decreased speed for a more elegant feel
    autoplay = true,
}) => {
    const sectionRef = useRef(null);
    const listRef = useRef(null);
    const animationFrameId = useRef(null);
    const positionX = useRef(0);
    const isPausedByIntersection = useRef(!autoplay);
    const slowdownFactor = useRef(1); // NEW: Controls slowdown on hover
    const isDragging = useRef(false);
    const startX = useRef(0);

    // Effect for logo duplication
    useEffect(() => {
        if (!listRef.current) return;
        const list = listRef.current;
        if (list.children.length > logos.length) return;

        const items = Array.from(list.children);
        items.forEach(item => {
            const clone = item.cloneNode(true);
            clone.setAttribute('aria-hidden', 'true');
            list.appendChild(clone);
        });
    }, [logos]);

    // JS-driven animation loop
    const animationLoop = useCallback(() => {
        if (!listRef.current) return;

        // The animation only runs if it's not paused by the intersection observer
        if (!isPausedByIntersection.current) {
            // UPDATED: Apply the slowdown factor for the hover effect
            const effectiveSpeed = speed * slowdownFactor.current;
            positionX.current += effectiveSpeed / 60; // Assuming 60fps
            
            const halfWidth = listRef.current.scrollWidth / 2;
            if (positionX.current >= halfWidth) {
                positionX.current = 0;
            }
            listRef.current.style.transform = `translateX(-${positionX.current}px)`;
        }
        
        animationFrameId.current = requestAnimationFrame(animationLoop);
    }, [speed]);

    // Intersection Observer for performance
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Pause animation if not intersecting (and not being dragged)
                isPausedByIntersection.current = !entry.isIntersecting;
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [autoplay]);
    
    // Start/stop animation loop
    useEffect(() => {
        animationFrameId.current = requestAnimationFrame(animationLoop);
        return () => {
            if(animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [animationLoop]);

    // Drag-to-scroll handlers
    const handlePointerDown = (e) => {
        isDragging.current = true;
        slowdownFactor.current = 0; // Stop animation completely while dragging
        startX.current = e.pageX - positionX.current;
        listRef.current.style.cursor = 'grabbing';
    };

    const handlePointerMove = (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX;
        positionX.current = x - startX.current;
        // Clamp position to prevent dragging too far
        const halfWidth = listRef.current.scrollWidth / 2;
        if (positionX.current > halfWidth) positionX.current = halfWidth;
        if (positionX.current < 0) positionX.current = 0;
        
        listRef.current.style.transform = `translateX(-${positionX.current}px)`;
    };

    const handlePointerUp = () => {
        isDragging.current = false;
        slowdownFactor.current = 1; // Resume normal speed
        listRef.current.style.cursor = 'grab';
    };

    // UPDATED: Hover handlers now control the slowdown factor
    const handleMouseEnter = () => { if (autoplay && !isDragging.current) slowdownFactor.current = 0.2; };
    const handleMouseLeave = () => { if (autoplay && !isDragging.current) slowdownFactor.current = 1; };

    return (
        <section ref={sectionRef} className="w-full max-w-5xl mx-auto py-8" aria-labelledby="recruiter-title">
            <div className="text-center mb-8">
                {/* UPDATED: Increased font size and weight */}
                <h2 id="recruiter-title" className="font-poppins font-bold text-4xl text-slate-900">
                    Our Major Recruiters
                </h2>
            </div>
            
            <div 
                className="relative group [perspective:1000px]"
                key={logos.length}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {/* Fallback remains the same */}
                <div className="grid grid-cols-2 sm:hidden sm:motion-safe:hidden gap-x-6 gap-y-8" role="list">
                    {logos.map((logo, index) => (
                         <div key={index} role="listitem" className="flex justify-center items-center">
                            <a href={logo.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${logo.name}`}>
                               <img src={logo.src} alt={`${logo.name} logo`} className="max-h-12 w-auto" loading="lazy" width="140" height="48" />
                            </a>
                        </div>
                    ))}
                </div>

                {/* Scroller with 3D transform and drag events */}
                <div className="scroller-container hidden sm:block overflow-hidden">
                    <ul
                        ref={listRef}
                        role="list"
                        className="flex items-center gap-12 cursor-grab active:cursor-grabbing [transform-style:preserve-3d] [transform:rotateY(-5deg)]"
                        onPointerDown={handlePointerDown}
                        onPointerMove={handlePointerMove}
                        onPointerUp={handlePointerUp}
                        onPointerLeave={handlePointerUp} // End drag if mouse leaves container
                    >
                        {logos.map((logo, index) => (
                            <li 
                                key={index} 
                                role="listitem" 
                                className="relative group/item flex-shrink-0 motion-safe:animate-bob transition-transform duration-300 hover:!scale-110"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <a
                                    href={logo.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-describedby={`tooltip-${index}`}
                                    className="block p-4 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 rounded-lg"
                                >
                                    <img
                                        src={logo.src}
                                        alt={`${logo.name} logo`}
                                        className="max-h-12 w-auto object-contain transition-all duration-300 grayscale opacity-80 group-hover/item:grayscale-0 group-hover/item:opacity-100 group-focus/item:grayscale-0 group-focus/item:opacity-100"
                                        loading="lazy"
                                        width="140"
                                        height="48"
                                    />
                                </a>
                                {/* UPDATED: Tooltip with new styles and animation */}
                                <span
                                    id={`tooltip-${index}`}
                                    role="tooltip"
                                    className="custom-tooltip absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-800/90 text-white text-xs rounded-lg whitespace-nowrap opacity-0 transition-all duration-300 pointer-events-none group-hover/item:opacity-100 group-hover/item:-translate-y-1 group-focus-visible/item:opacity-100 group-focus-visible/item:-translate-y-1 translate-y-2 backdrop-blur-sm shadow-lg"
                                >
                                    {logo.name}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <style>{`
              .scroller-container {
                /* UPDATED: Increased fade area by changing 20%/80% to 30%/70% */
                -webkit-mask-image: linear-gradient(to right, transparent, black 30%, black 70%, transparent);
                mask-image: linear-gradient(to right, transparent, black 30%, black 70%, transparent);
              }
              /* NEW: Styles for the tooltip caret */
              .custom-tooltip::after {
                content: '';
                position: absolute;
                top: 100%;
                left: 50%;
                transform: translateX(-50%);
                border-width: 5px;
                border-style: solid;
                border-color: rgba(30, 41, 59, 0.9) transparent transparent transparent;
              }
              @keyframes bob {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-4px); }
              }
              .animate-bob {
                animation: bob 1.6s ease-in-out infinite;
              }
              .group:hover .animate-bob {
                animation-play-state: paused;
              }
            `}</style>
        </section>
    );
};

RecruiterScrollerAdvanced.propTypes = {
    logos: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
    })).isRequired,
    speed: PropTypes.number,
    autoplay: PropTypes.bool,
};


// --- Example Usage App ---

// Import all company images
import benzImage from '../assets/images/companies-images/benz.jpg';
import bitwiseImage from '../assets/images/companies-images/bitwise.jpg';
import bpclImage from '../assets/images/companies-images/bpcl.jpg';
import capgeminiImage from '../assets/images/companies-images/capgemini.jpg';
import ciplaImage from '../assets/images/companies-images/cipla.jpg';
import cognizantImage from '../assets/images/companies-images/cognizant.jpg';
import cyientImage from '../assets/images/companies-images/cyient.jpg';
import forceImage from '../assets/images/companies-images/force.jpg';
import gmImage from '../assets/images/companies-images/gm.jpg';
import infosysImage from '../assets/images/companies-images/infosys.jpg';
import jkumarImage from '../assets/images/companies-images/jkumar.jpg';
import knestImage from '../assets/images/companies-images/knest.jpg';
import mahindraImage from '../assets/images/companies-images/mahindra.jpg';
import mphasisImage from '../assets/images/companies-images/mphasis.jpg';
import nvidiaImage from '../assets/images/companies-images/nvidia.jpg';
import skumarImage from '../assets/images/companies-images/skumar.jpg';
import syntelImage from '../assets/images/companies-images/syntel.jpg';
import tataImage from '../assets/images/companies-images/tata.jpg';
import tcsImage from '../assets/images/companies-images/tcs.jpg';
import techMahindraImage from '../assets/images/companies-images/tech-mahinda.jpg';
import varrocImage from '../assets/images/companies-images/varroc.jpg';
import wiproImage from '../assets/images/companies-images/Wipro.jpg';

const Recruiters = () => {
    const logoData = [
        { name: "Mercedes-Benz", src: benzImage, href: "#" },
        { name: "Bitwise", src: bitwiseImage, href: "#" },
        { name: "BPCL", src: bpclImage, href: "#" },
        { name: "Capgemini", src: capgeminiImage, href: "#" },
        { name: "Cipla", src: ciplaImage, href: "#" },
        { name: "Cognizant", src: cognizantImage, href: "#" },
        { name: "Cyient", src: cyientImage, href: "#" },
        { name: "Force Motors", src: forceImage, href: "#" },
        { name: "General Motors", src: gmImage, href: "#" },
        { name: "Infosys", src: infosysImage, href: "#" },
        { name: "J. Kumar", src: jkumarImage, href: "#" },
        { name: "Knest", src: knestImage, href: "#" },
        { name: "Mahindra", src: mahindraImage, href: "#" },
        { name: "Mphasis", src: mphasisImage, href: "#" },
        { name: "NVIDIA", src: nvidiaImage, href: "#" },
        { name: "S. Kumar Group", src: skumarImage, href: "#" },
        { name: "Syntel", src: syntelImage, href: "#" },
        { name: "Tata", src: tataImage, href: "#" },
        { name: "TCS", src: tcsImage, href: "#" },
        { name: "Tech Mahindra", src: techMahindraImage, href: "#" },
        { name: "Varroc", src: varrocImage, href: "#" },
        { name: "Wipro", src: wiproImage, href: "#" }
    ];

    return (
        <div className="bg-slate-50 font-sans">
            <RecruiterScrollerAdvanced logos={logoData} />
        </div>
    );
};

export default Recruiters;

