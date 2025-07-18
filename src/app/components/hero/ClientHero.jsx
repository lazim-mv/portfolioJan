'use client'

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import globeSvg from '../../../../public/globe.svg'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from '@/app/utils/gsapInit'

const ClientHero = ({ isMobile, hasMounted }) => {
    const sectionRef = useRef(null)

    useGSAP(() => {
        if (!hasMounted || !sectionRef.current) return;

        const headingLines = gsap.utils.toArray('.hero-heading')
        const line = sectionRef.current.querySelector('.hero-divider')
        const bottom = sectionRef.current.querySelector('.hero-bottom')
        const isMobile = window.innerWidth < 768

        if (!headingLines.length || !line || !bottom) return;

        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

        tl.set(headingLines, { y: '100%' })
            .to(headingLines, {
                y: '0%',
                duration: 1.5,
                stagger: isMobile ? 0.2 : 0.4,
            }, 0.2)
            .fromTo(line,
                { width: 0 },
                { width: '100%', duration: 1.2 },
                '<0.3'
            )
            .fromTo(bottom,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2 },
                '<0.3'
            )
    }, { scope: sectionRef, dependencies: [hasMounted, isMobile] })

    return (
        <div ref={sectionRef} className='h-svh relative' id="hero">
            <div ref={sectionRef} className='h-svh relative' id="hero">
                <div
                    itemScope
                    itemType="http://schema.org/Person"
                    className='h-svh flex flex-col justify-end relative z-10 px-[5vw] md:pb-[5vw] pb-[10vw]'
                >
                    <meta itemProp="name" content="Lazim Latheef" />
                    <meta itemProp="alternateName" content="Lazim MV" />
                    <meta itemProp="jobTitle" content="Full Stack Developer" />
                    <meta itemProp="address" content="Kerala, India" />
                    <div className='
                flex justify-between 
                md:items-end md:flex-row
                flex-col items-start'>
                        <div>
                            <div className="overflow-hidden">
                                {!isMobile ?
                                    <h1 className="hero-heading leading-[110%] overflow-hidden">
                                        <span className='inline-block'>FullStack Dev</span>
                                    </h1>
                                    : <h1 className="hero-heading leading-[110%] overflow-hidden">
                                        <span className='inline-block'>Developer</span>
                                    </h1>
                                }
                            </div>
                            <div className="overflow-hidden">
                                <h1 className=" hero-heading leading-[110%] overflow-hidden">
                                    <span className='inline-block'>Freelancer</span>
                                </h1>
                            </div>
                        </div>
                        <div className='flex items-center mt-[32px] md:mt-0'>
                            <Image src={globeSvg} alt='globe icon lazim mv' className='globe-animation' />
                            <h4 className='text-medium'>Kerala</h4>
                        </div>
                    </div>

                    <div className='hero-divider h-[1px] bg-[#7a7a7a]'
                        style={{
                            marginTop: isMobile ? "max(3rem, 24px)" : "max(4rem, 48px)",
                            marginBottom: isMobile ? "max(3rem, 24px)" : "max(4rem, 48px)",
                            width: 0,
                        }}
                    ></div>

                    <div className='hero-bottom flex justify-between 
                items-start headerLinks opacity-0
                gap-[32px] md:gap-0
                 flex-col md:flex-row md:items-center'
                    >
                        <p className='text-medium'>I'll help you make a lasting impression online.</p>
                        <Link
                            href="https://wa.me/918921076209?text=Hi%20Lazim!%20I%20just%20visited%20your%20website%20(https%3A%2F%2Flazim-mv.vercel.app%2F)%20and%20I'm%20interested%20in%20working%20with%20you%20on%20a%20project.%20Can%20we%20connect%3F"
                            target="_blank"
                            className='relative group overflow-hidden'>
                            <span>Start Project</span>
                            <span className="block absolute text-start top-full left-0 transition-transform duration-300 group-hover:translate-y-[-100%]">
                                Start Project
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientHero