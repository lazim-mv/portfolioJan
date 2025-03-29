import React, { useEffect, useRef } from "react";
import styles from "./About.module.css";
import { SquareArrowDownRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef(null);
    const introTextRef = useRef(null);
    const descriptionTextRef = useRef(null);
    const cardsRef = useRef(null);
    const workWithTextRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const introChars = introTextRef.current.children;
        const descriptionChars = descriptionTextRef.current.children;
        const cards = cardsRef.current.children;
        const workWithChars = workWithTextRef.current.children;

        gsap.fromTo(
            container,
            { opacity: .5 },
            {
                opacity: 1,
                scrollTrigger: {
                    trigger: container,
                    start: "top bottom",
                    end: "bottom 20%",
                    scrub: 1,
                    toggleActions: "play none none reverse",
                }
            }
        );

        gsap.fromTo(
            [introTextRef.current, descriptionTextRef.current],
            {
                color: "#fff"
            },
            {
                color: "#A1E3F9",
                scrollTrigger: {
                    trigger: container,
                    start: "top 20%",
                    end: "bottom -90",
                    scrub: 1,
                    toggleActions: "play none none reverse",
                }
            }
        );

        gsap.fromTo(
            workWithChars,
            {
                x: -50,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.03,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: workWithTextRef.current,
                    start: "top 60%",
                    toggleActions: "play none none reverse",
                }
            }
        );

        gsap.fromTo(
            introChars,
            {
                x: -50,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.03,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: introTextRef.current,
                    start: "top 60%",
                    toggleActions: "play none none reverse",
                }
            }
        );

        gsap.fromTo(
            descriptionChars,
            { y: 15, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.3,
                stagger: 0.01,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: descriptionTextRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                }
            }
        );

        gsap.fromTo(
            cards,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                }
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const splitTextPreservingSpaces = (text) => {
        return text.split('').map((char, index) => {
            if (char === ' ') {
                return <span key={index} style={{ display: 'inline-block', width: '0.25em' }}>&nbsp;</span>;
            }
            return (
                <span key={index} style={{ display: 'inline-block' }}>
                    {char}
                </span>
            );
        });
    };

    const introLines = [
        "Hi, I'm Lazim, a",
        "fullstack developer",
        "based in India."
    ];

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            e.target.click();
        }
    };

    return (
        <section 
            ref={containerRef} 
            id="about"
            style={{ opacity: 1 }}
            aria-label="About section"
        >
            <div className={styles.aboutContainer} role="region" aria-label="Introduction">
                <h2 ref={introTextRef} className={styles.multilineText} aria-label="Personal introduction">
                    {introLines.map((line, i) => (
                        <div key={i} className={styles.textLine}>
                            {splitTextPreservingSpaces(line)}
                        </div>
                    ))}
                </h2>
                <p 
                    ref={descriptionTextRef} 
                    className={styles.multilineText}
                    aria-label="Professional experience"
                >
                    Software developer with 2.5 years of,
                    experience in frontend and mobile app,
                    development. Skilled in Next.js, React.js,,
                    React Native, API integration, and delivering,
                    high-quality, maintainable code.
                </p>
            </div>
            <div 
                className={styles.aboutSecondContainer}
                role="region"
                aria-label="Work preferences"
            >
                <h2 ref={workWithTextRef} aria-label="Client types I work with">
                    {splitTextPreservingSpaces("I often work with:")}
                </h2>
                <div 
                    className={styles.cards} 
                    ref={cardsRef}
                    role="list"
                    aria-label="Types of clients"
                >
                    {["Startups", "Marketing teams", "Agencies", "B2B SaaS"].map((text, i) => (
                        <div 
                            key={i} 
                            className={styles.card}
                            role="listitem"
                            tabIndex={0}
                            onKeyDown={handleKeyPress}
                            aria-label={text}
                        >
                            <SquareArrowDownRight className={styles.icon} strokeWidth={0.75} aria-hidden="true" />
                            <p>{text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;