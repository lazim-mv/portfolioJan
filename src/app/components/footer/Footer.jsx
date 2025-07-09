import Link from 'next/link'
import React, { useRef } from 'react'
import { footerData } from './content'
import { useGSAP } from '@gsap/react';
import gsap from '@/app/utils/gsapInit';
import { ScrollTrigger } from '@/app/utils/gsapInit'


const Footer = ({ isMobile, hasMounted }) => {

    const containerRef = useRef(null);
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);


        const footerName = containerRef.current?.querySelector("#footerName");

        if (!footerName) return;

        // Split text into individual characters with enhanced markup
        const text = footerName.textContent;
        footerName.innerHTML = text.split('').map((char, index) => {
            if (char === ' ') {
                return '<span class="char-space">&nbsp;</span>';
            }
            return `<span class="char" style="display: inline-block; transform-origin: bottom center;">${char}</span>`;
        }).join('');

        const chars = footerName.querySelectorAll('.char');

        const line = document.querySelector('.footer-divider')
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: footerName,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse",
                scrub: false,
                once: false
            }
        });




        gsap.set(chars, {
            y: 120,
            opacity: 0,
            rotationX: 90,
            transformOrigin: "bottom center",
            scale: 0.8,
            filter: "blur(8px)"
        });


        tl.to(chars, {
            y: 0,
            opacity: 1,
            rotationX: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.2,
            stagger: {
                amount: 0.8,
                from: "start",
                ease: "power2.out"
            },
            ease: "back.out(1.7)"
        })
            .fromTo(
                line,
                { width: 0 },
                { width: '100%', duration: 1.2 },
                '<0.3'
            )
            ;





    }, { scope: containerRef,dependencies:[hasMounted] })

    if (!hasMounted) {
        return null
    }


    return (
        <div ref={containerRef}>
            <div className='relative' >
                <div className='flex md:items-end items-start justify-between md:flex-row flex-col gap-8 md:gap-0'>
                    <h2 className='text-black md:w-[50%] w-[100%] footerSubHeading'>Let's talk about your project – and make something really good out of it!</h2>

                    <Link
                        href="#contact"
                        className="group relative w-max overflow-hidden md:rounded-[.4rem] 
                        rounded-[8px] md:py-[1.5rem] py-[22px] md:px-[3rem] px-[48px] bg-[#f6f6f6] h-max"
                    >
                        {/* Background fill */}
                        <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />

                        {/* Text wrapper */}
                        <div className="relative z-10 flex flex-col items-center overflow-hidden text-black">
                            <span className="transition-transform duration-300 ease-in-out group-hover:-translate-y-full text-[1.375rem]">
                                Start Project
                            </span>
                            <span className=" text-[1.375rem] absolute top-full transition-transform duration-300 ease-in-out text-white group-hover:translate-y-[-100%]">
                                Start Project
                            </span>
                        </div>
                    </Link>
                </div>

                <div
                    className='footer-divider h-[1px] bg-[#d0d0d0]'
                    style={{
                        width: "100%",
                        margin: "max(4rem, 32px) 0"
                    }}
                ></div>

                <div
                    className="
                        grid justify-center grid-rows-[auto] grid-cols-1 
                        md:grid-cols-[.75fr_.75fr_1.5fr] grid-auto-cols-[1fr] 
                        gap-x-[max(2rem,36px)] gap-y-[max(2rem,36px)] px-0 -5"
                >
                    <div >
                        <h6 className='text-[#7a7a7a]'>{footerData.contact.telephone.label}</h6>
                        <h6 className='text-[#1a1a1a]' style={{ marginTop: "max(.25rem, 4px)" }}>{footerData.contact.telephone.value}</h6>

                    </div>
                    <div >
                        <h6 className='text-[#7a7a7a]'>{footerData.contact.email.label}</h6>
                        <h6 className='text-[#1a1a1a]' style={{ marginTop: "max(.25rem, 4px)" }}>{footerData.contact.email.value}</h6>
                    </div>
                    <div className='flex flex-col md:items-end items-start'>
                        <h6 className='text-[#7a7a7a]'>{footerData.legal.copyright}</h6>
                        <div className='flex gap-5'>{footerData.legal.links.map((link, index) => (
                            <h6 className='text-[#1a1a1a]' style={{ marginTop: "max(.25rem, 4px)" }} key={index}>
                                {link.label}
                            </h6>
                        ))}</div>
                    </div>
                </div>
            </div>
            <div className='relative h-[12vw] md:mt-10 mt-5'>
                <h1
                    id='footerName'
                    className='text-[#333] text-center font-semibold leading-none h-max'
                    style={{
                        mixBlendMode: "difference",
                        fontSize: 'calc(14.36vw - 1vw)',
                        position: 'absolute',
                        bottom: '0',
                        lineHeight: '80%',
                        overflow: 'hidden'
                    }}
                >
                    Lazim Latheef
                </h1>
            </div>
        </div>
    )
}

export default Footer