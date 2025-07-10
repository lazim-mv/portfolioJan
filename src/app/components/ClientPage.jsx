'use client'

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "../utils/gsapInit";
import { useWindowWidth } from "@react-hook/window-size";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import About from "./about/About";
import Projects from "./projects/Projects";
import Testimonials from "./testimonials/Testimonials";
import Footer from "./footer/Footer";
import Services from "./services/Services";

const ClientPage = () => {
    const [hasMounted, setHasMounted] = useState(false);
    const sectionRef = useRef(null);
    const windowWidth = useWindowWidth();
    const isMobile = windowWidth < 768;

    useEffect(() => {
        setHasMounted(true);
    }, []);

    // Move all your GSAP animations here
    useGSAP(() => {
        if (!hasMounted || !sectionRef.current) return;

        const timeout = setTimeout(() => {
            const hero = sectionRef.current?.querySelector("#hero");
            const testi = sectionRef.current?.querySelector("#whiteSection");
            const footer = sectionRef.current?.querySelector("#footer");
            const service = sectionRef.current?.querySelector("#services");

            if (!hero || !testi || !service || !footer) return;

            // HERO
            gsap.fromTo(
                hero,
                {
                    y: "0%",
                    scale: 1,
                    opacity: 1,
                    zIndex: 1,
                },
                {
                    y: "37%",
                    scaleX: !isMobile ? 0.92 : 0.96,
                    scaleY: !isMobile ? 0.92 : 0.96,
                    opacity: 0,
                    ease: "none",
                    force3D: true,
                    scrollTrigger: {
                        trigger: hero,
                        start: "top top",
                        end: "bottom top",
                        scrub: 0.5,
                        anticipatePin: 1,
                        fastScrollEnd: true,
                        preventOverlaps: true,
                        refreshPriority: 1,
                    },
                }
            );

            // TESTIMONIALS
            gsap.fromTo(
                testi,
                {
                    y: "0%",
                    scale: 1,
                    opacity: 1,
                    zIndex: 1,
                },
                {
                    y: "10%",
                    // scaleX: !isMobile ? 0.92 : 0.96,
                    // scaleY: !isMobile ? 0.92 : 0.96,
                    opacity: .8,
                    ease: "none",
                    force3D: true,
                    scrollTrigger: {
                        trigger: testi,
                        start: "80% bottom ",
                        end: "bottom top",
                        scrub: 0.5,
                        anticipatePin: 1,
                        fastScrollEnd: true,
                        preventOverlaps: true,
                        refreshPriority: 1,
                        // markers: true,
                    },
                }
            );

            // FOOTER - OPTIMIZED FOR SMOOTH ANIMATION

            // Set up CSS properties for hardware acceleration
            footer.style.willChange = 'transform, opacity';
            footer.style.transformStyle = 'preserve-3d';
            footer.style.backfaceVisibility = 'hidden';
            footer.style.perspective = '1000px';

            // Clear any existing transforms
            gsap.set(footer, {
                clearProps: "transform",
            });

            // Set initial state with more stable values
            gsap.set(footer, {
                y: "-100%",
                scale: !isMobile ? 0.92 : 1,
                opacity: 0.5,
                rotationX: 0, // Prevent any rotation issues
                rotationY: 0,
                rotationZ: 0,
                force3D: true,
            });

            // Create the smooth footer animation
            const footerTl = gsap.timeline({
                scrollTrigger: {
                    trigger: service, // Use service as trigger instead of footer
                    start: "top bottom",
                    end: "bottom center",
                    scrub: 0.5,
                    anticipatePin: 1,
                    fastScrollEnd: true,
                    preventOverlaps: true,
                    refreshPriority: 1,
                },
            });

            // Add the animation to the timeline
            footerTl.to(footer, {
                y: "0%",
                scale: 1,
                opacity: 1,
                duration: 1,
                ease: "none",
                force3D: true,
                transformOrigin: "center center",
            });

            console.log("GSAP timeline created:", footerTl);

            // Clean up function
            return () => {
                footerTl.kill();
                footer.style.willChange = 'auto';
            };
        }, 100);

        return () => clearTimeout(timeout);
    }, { scope: sectionRef, dependencies: [hasMounted, isMobile] });

    if (!hasMounted) return null;

    return (
        <div ref={sectionRef} className="relative" id="home">
            <Header isMobile={isMobile} hasMounted={hasMounted} />
            <section className="bg-[#1a1a1a]"
                style={{
                    willChange: 'opacity, transform',
                    opacity: 1,
                    transformStyle: 'preserve-3d',
                }}
            >
                <Hero isMobile={isMobile} hasMounted={hasMounted} />
            </section>
            <section
                id="about"
                className='bg-white relative z-10'
                style={{
                    padding: `max(${isMobile ? "2rem, 32px" : "8rem, 96px"}) 5vw max(${isMobile ? "6rem, 96px" : "10rem, 96px"})`,
                }}
            >
                <About isMobile={isMobile} hasMounted={hasMounted} />
            </section>
            <div className='hero-divider h-[1px] bg-[#d0d0d0]'
                style={{
                    width: "100%"

                }}
            ></div>
            <div id="whiteSection">
                <section
                    id="projects"
                    className="bg-white"
                    style={{
                        padding: `max(${isMobile ? "2rem, 80px" : "8rem, 96px"}) 5vw max(${isMobile ? "5rem, 80px" : "10rem, 96px"})`,
                    }}

                >
                    <Projects isMobile={isMobile} hasMounted={hasMounted} />
                </section>
                <div className='hero-divider h-[1px] bg-[#d0d0d0]'
                    style={{
                        width: "100%"
                    }}
                ></div>
                <section
                    className="bg-white"
                    style={{
                        padding: `max(${isMobile ? "2rem, 80px" : "8rem, 96px"}) 5vw max(${isMobile ? "5rem, 100px" : "10rem, 96px"})`,
                        willChange: 'opacity, transform',
                        opacity: 1,
                        transformStyle: 'preserve-3d',
                    }}
                >
                    <Testimonials isMobile={isMobile} hasMounted={hasMounted} />
                </section>
            </div>

            <section
                id="services"
            >
                <Services isMobile={isMobile} hasMounted={hasMounted} />
            </section>

            <section
                id="footer"
                className="bg-white"
                style={{ padding: isMobile ? '80px 5vw 0' : "max(8rem, 96px) 5vw 0" }}
            >
                <Footer isMobile={isMobile} hasMounted={hasMounted} />
            </section>
        </div>
    );
};

export default ClientPage;