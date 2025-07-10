import gsap from '@/app/utils/gsapInit';
import { useGSAP } from '@gsap/react';
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

const Header = ({ isMobile, hasMounted }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const containerRef = useRef(null);
    const dividerRef = useRef(null);
    const linksRef = useRef([]);
    const contactRef = useRef(null);



    useEffect(() => {
        linksRef.current = [];
    }, [menuOpen]);

    const handleClick = (e) => {
        e.preventDefault();
        setMenuOpen(!menuOpen);
    }

    const navLinks = [
        { label: "About Me", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Services", href: "#servicesSection" },
        { label: "Contact", href: "#footerName" },
    ];

    useGSAP(() => {
        if (!hasMounted || !containerRef.current || !isMobile) return;

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        if (menuOpen) {
            gsap.set(linksRef.current, { y: "100%" });
            gsap.set(contactRef.current, { y: "100%" });
            gsap.set(dividerRef.current, { width: "0%" });

            tl.to(containerRef.current, {
                x: 0,
                duration: 0.6,
            })
                .to(
                    linksRef.current,
                    {
                        y: "0%",
                        duration: 0.6,
                        ease: "power2.out",
                        stagger: 0.07,
                    },
                    "<+0.1"
                )
                .to(
                    contactRef.current,
                    {
                        y: "0%",
                        duration: 0.6,
                        ease: "power2.out",
                        stagger: 0.07,
                    },
                    "<"
                )
                .to(
                    dividerRef.current,
                    {
                        width: "100%",
                        duration: 0.6,
                        ease: "power2.out",
                    },
                    "<"
                );
        } else {
            tl.to(
                [linksRef.current, contactRef.current],
                {
                    y: "100%",
                    duration: 0.4,
                    ease: "power2.in",
                    stagger: {
                        amount: 0.2,
                        from: "end",
                    },
                }
            )
                .to(
                    dividerRef.current,
                    {
                        width: "0%",
                        duration: 0.4,
                        ease: "power2.in",
                    },
                    "<"
                )
                .to(
                    containerRef.current,
                    {
                        x: "100%",
                        duration: 0.6,
                        ease: "power3.in",
                    },
                    "<+0.1"
                );
        }
    }, { dependencies: [menuOpen, hasMounted, isMobile] });

    if (!hasMounted) return null;

    return (
        <>
            <div
                className="
                  flex justify-between items-center 
                  px-[5vw] 
                  pt-[clamp(20px,1.75vw,999px)] 
                  pb-[clamp(20px,1.75vw,999px)] 
                  md:pt-[1.25vw] 
                  md:pb-[1.25vw]
                  mix-blend-difference 
                  fixed top-0 left-0 
                  w-full z-50
                "
                id="header"
            >
                <h6 className='header-name cursor-pointer'><Link href="#header">Lazim Latheef</Link></h6>
                <div className='flex items-center gap-10 headerLinks'>
                    {!isMobile && navLinks.map((text, index) => (
                        <Link href={text.href} key={index} className="relative group overflow-hidden h-[24px]">
                            <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                                {text.label}
                            </span>
                            <span className="block absolute top-full left-0 transition-transform duration-300 group-hover:translate-y-[-100%]">
                                {text.label}
                            </span>
                        </Link>
                    ))}

                    {isMobile && (
                        <button
                            onClick={handleClick}
                            className="relative z-50 cursor-pointer"
                        >
                            {menuOpen ? "Close" : "Menu"}
                        </button>
                    )}
                </div>
            </div>

            <div
                ref={containerRef}
                className="h-svh w-full fixed top-0 left-0 bg-black z-20 flex flex-col justify-between pt-[22vh] pb-[5vh] px-[5vw]"
                style={{ transform: "translateX(100%)" }}
            >
                <div id="mobileMenu" className="flex flex-col gap-2">
                    {isMobile &&
                        navLinks.map((text, index) => (
                            <div key={index} className="overflow-hidden h-[max-content]">
                                <a
                                    ref={(el) => (linksRef.current[index] = el)}
                                    className="block translate-y-[100%] text-[max(2.5rem,48px)] font-semibold leading-[max(3.5rem,64px)] text-white"
                                    href={text.href}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {text.label}
                                </a>
                            </div>
                        ))}
                </div>

                <div className="flex flex-col">
                    <div
                        ref={dividerRef}
                        className="hero-divider h-[1px] bg-[#7a7a7a]"
                        style={{ width: "0%", marginBottom: "max(1.5rem, 20px)" }}
                    />
                    <div
                        ref={contactRef}
                        className="flex flex-col gap-2 text-[#a3a3a3] overflow-hidden max-h-[200px]"
                    >
                        <div className="overflow-hidden">
                            <a href="mailto:lazimlatheef@gmail.com">lazimlatheef@gmail.com</a>
                        </div>
                        <div className="overflow-hidden">
                            <a href="tel:+918921076209">+91 8921 076 209</a>
                        </div>
                        <div className="overflow-hidden">
                            <a href="#">© 2025 lazim mv</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header