import React, { useState, useEffect, useRef } from "react";
import styles from "./Projects.module.css";
import Image from "next/image";
import { SquareArrowDownRight, X, Eye } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedText from "../animations/AnimatedText";
import TitleAnimation from "../animations/TitleAnimations";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const [iframeLink, setIframeLink] = useState("");
    const titleRef = useRef(null);
    const dialogRef = useRef(null);
    const previousFocusRef = useRef(null);

    const data = [
        {
            name: "Nexwave",
            link: "https://www.nexwavedigital.com/",
            img: "/projects/nexwave.gif",
        },
        {
            name: "Level Up",
            img: "/projects/lvlup.png",
        },
        {
            name: "Pullys",
            link: "https://www.pullysons.com/",
            img: "/projects/pullysons.gif",
        },
        {
            name: "Car & Bikes",
            link: "https://adminautosports.vercel.app/bikes",
            img: "/projects/autosportsdash.jpg",
        },
        {
            name: "Motobike",
            link: "https://client-bikes.vercel.app/",
            img: "/projects/motobike.gif",
        },
        {
            name: "AutoTraders",
            link: "https://cars-client-iota.vercel.app/",
            img: "/projects/autotraders.gif",
        },
        {
            name: "Mavrriq",
            link: "https://www.mavrriq.com/",
            img: "/projects/Maveriq.gif",
        },
        {
            name: "Pullys",
            link: "https://www.pullysons.com/",
            img: "/projects/pullysons.gif",
        },
    ];

    useEffect(() => {
        const title = titleRef.current;
        if (title) {
            const text = title.textContent;
            title.innerHTML = `
                <div class="${styles.titleWrapper}" role="heading" aria-level="1">
                    <span class="${styles.textBase}">${text}</span>
                    <span class="${styles.textFill}" aria-hidden="true">${text}</span>
                </div>
            `;

            gsap.fromTo(
                `.${styles.textFill}`,
                {
                    clipPath: "inset(100% 0 0 0)",
                },
                {
                    clipPath: "inset(0% 0 0 0)",
                    scrollTrigger: {
                        trigger: title,
                        start: "top 20%",
                        end: "top -20%",
                        scrub: 1,
                        toggleActions: "restart none none reverse"
                    }
                }
            );
        }
    }, []);

    useEffect(() => {
        if (iframeLink) {
            previousFocusRef.current = document.activeElement;

            gsap.fromTo(
                `.${styles.iframeView}`,
                { y: "100%" },
                { 
                    y: "0%", 
                    duration: 1, 
                    ease: "power3.out",
                    onComplete: () => {
                        const closeButton = dialogRef.current?.querySelector('button');
                        closeButton?.focus();
                    }
                }
            );

            const handleTabKey = (e) => {
                if (!dialogRef.current) return;
                
                const focusableElements = dialogRef.current.querySelectorAll(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                const firstFocusable = focusableElements[0];
                const lastFocusable = focusableElements[focusableElements.length - 1];

                if (e.key === 'Tab') {
                    if (e.shiftKey) {
                        if (document.activeElement === firstFocusable) {
                            e.preventDefault();
                            lastFocusable.focus();
                        }
                    } else {
                        if (document.activeElement === lastFocusable) {
                            e.preventDefault();
                            firstFocusable.focus();
                        }
                    }
                }
            };

            const handleEscape = (e) => {
                if (e.key === 'Escape') {
                    setIframeLink("");
                }
            };

            document.addEventListener('keydown', handleTabKey);
            document.addEventListener('keydown', handleEscape);

            return () => {
                document.removeEventListener('keydown', handleTabKey);
                document.removeEventListener('keydown', handleEscape);
            };
        } else {
            previousFocusRef.current?.focus();
        }
    }, [iframeLink]);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            e.target.click();
        }
    };

    return (
        <section className={styles.container} id="projects" aria-label="Latest Projects">
            <TitleAnimation text="Latest Work" className={styles.title} />
            <div className={styles.cards} role="list">
                {data.map((project, index) => (
                    <article
                        key={index}
                        className={styles.card}
                        role="listitem"
                    >
                        <div className={styles.cardHeading}>
                            <AnimatedText text={project.name} />
                            {project.link && (
                                <button
                                    onClick={() => project.link && setIframeLink(project.link)}
                                    onKeyDown={handleKeyPress}
                                    className={styles.previewButton}
                                    aria-label={`Preview ${project.name} website`}
                                >
                                    <SquareArrowDownRight className={styles.icon} strokeWidth={0.75} aria-hidden="true" />
                                </button>
                            )}
                        </div>
                        <Image
                            src={project.img}
                            alt={`Screenshot of ${project.name} website`}
                            width={400}
                            height={300}
                            className={styles.projectImage}
                        />
                    </article>
                ))}
            </div>

            {iframeLink && (
                <div 
                    ref={dialogRef}
                    className={styles.iframeView}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Website Preview"
                >
                    <div 
                        className={styles.iframeViewWrap}
                        aria-label="Preview content"
                    >
                        <div 
                            className={styles.iframeHeader}
                            role="toolbar"
                            aria-label="Preview controls"
                        >
                            <button
                                className={styles.iconContainer}
                                onClick={() => setIframeLink("")}
                                onKeyDown={handleKeyPress}
                                aria-label="Close preview"
                            >
                                <X className={styles.closeIcon} color="white" aria-hidden="true" />
                            </button>
                            <a 
                                href={iframeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.iconContainer}
                                aria-label="Open website in new tab"
                            >
                                <Eye className={styles.viewIcon} color="white" aria-hidden="true" />
                            </a>
                        </div>
                        <iframe 
                            src={iframeLink} 
                            frameBorder="0" 
                            className={styles.iframe}
                            title="Website Preview"
                            aria-label={`Preview of website in iframe`}
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;