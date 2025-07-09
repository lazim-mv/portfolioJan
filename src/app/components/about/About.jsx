import Image from 'next/image'
import React, { useRef, useEffect, useState } from 'react'
import profile1 from '../../../../public/hero/hero.png'
import Link from 'next/link'
import { DistortText } from '../ui/DistortText'
import { useGSAP } from '@gsap/react'
import gsap from '@/app/utils/gsapInit'
import { SplitText } from '@/app/utils/gsapInit'
import { ScrollTrigger } from '@/app/utils/gsapInit'

const About = ({ isMobile, hasMounted }) => {
    const containerRef = useRef(null);


    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.setAttribute('data-component', 'about-section')
        }
    }, [])

    // useGSAP(() => {
    //     const initAnimation = () => {
    //         if (!hasMounted || !containerRef.current) return;

    //         const aboutHeading = containerRef.current.querySelector('.about-heading')
    //         const descElement = containerRef.current.querySelector('.desc-wrapper')
    //         const buttonElement = containerRef.current.querySelector('.button-wrapper')

    //         if (!aboutHeading || !descElement || !buttonElement) return

    //         // Clear any existing animations
    //         gsap.killTweensOf([aboutHeading, descElement, buttonElement])

    //         // SplitText setup - only use on desktop to avoid mobile issues
    //         let splitText;
    //         const useSplitText = !isMobile && typeof SplitText !== 'undefined';

    //         if (useSplitText) {
    //             try {
    //                 splitText = new SplitText(aboutHeading, {
    //                     type: "lines",
    //                     linesClass: "split-line"
    //                 })

    //                 // Create overflow wrappers for each line
    //                 if (splitText.lines && splitText.lines.length > 0) {
    //                     splitText.lines.forEach(line => {
    //                         const wrapper = document.createElement('div')
    //                         wrapper.style.overflow = 'hidden'
    //                         wrapper.style.lineHeight = '1.2'
    //                         wrapper.style.display = 'block'
    //                         line.parentNode.insertBefore(wrapper, line)
    //                         wrapper.appendChild(line)
    //                     })

    //                     // Set initial states for SplitText lines
    //                     gsap.set(splitText.lines, { y: '100%' })
    //                 } else {
    //                     // If SplitText didn't work properly, fall back to simple animation
    //                     splitText = null;
    //                 }
    //             } catch (error) {
    //                 console.warn('SplitText not available, using fallback animation')
    //                 splitText = null
    //             }
    //         }

    //         // Set initial states for elements
    //         gsap.set([descElement, buttonElement], {
    //             opacity: 0,
    //             y: 30
    //         })

    //         // If not using SplitText or it failed, set fallback state for heading
    //         if (!splitText) {
    //             gsap.set(aboutHeading, {
    //                 opacity: 0,
    //                 y: 30
    //             })
    //         }

    //         // Create ScrollTrigger with mobile-friendly settings
    //         const aboutTrigger = ScrollTrigger.create({
    //             trigger: containerRef.current,
    //             start: isMobile ? 'top 50%' : 'top 80%',
    //             end: 'bottom 20%',
    //             id: "about-component-trigger",
    //             refreshPriority: 1,
    //             onEnter: () => {
    //                 // Create timeline when trigger enters
    //                 const tl = gsap.timeline()

    //                 // Heading animation (SplitText or fallback)
    //                 if (splitText && splitText.lines && splitText.lines.length > 0) {
    //                     tl.to(splitText.lines, {
    //                         y: '0%',
    //                         duration: 0.8,
    //                         stagger: 0.1,
    //                         ease: 'power2.out'
    //                     })
    //                 } else {
    //                     tl.to(aboutHeading, {
    //                         opacity: 1,
    //                         y: 0,
    //                         duration: 0.8,
    //                         ease: 'power2.out'
    //                     })
    //                 }

    //                 // Description and button animations
    //                 tl.to(descElement, {
    //                     opacity: 1,
    //                     y: 0,
    //                     duration: 0.8,
    //                     ease: 'power2.out'
    //                 }, 0.2)

    //                 tl.to(buttonElement, {
    //                     opacity: 1,
    //                     y: 0,
    //                     duration: 0.6,
    //                     ease: 'power2.out'
    //                 }, 0.4)
    //             },
    //             onLeaveBack: () => {
    //                 // Reset elements when scrolling back up
    //                 if (splitText && splitText.lines && splitText.lines.length > 0) {
    //                     gsap.set(splitText.lines, { y: '100%' })
    //                 } else {
    //                     gsap.set(aboutHeading, {
    //                         opacity: 0,
    //                         y: 30
    //                     })
    //                 }

    //                 gsap.set([descElement, buttonElement], {
    //                     opacity: 0,
    //                     y: 30
    //                 })
    //             }
    //         })

    //         // Store references for cleanup
    //         if (splitText) {
    //             containerRef.current._splitText = splitText
    //         }

    //         return aboutTrigger
    //     }

    //     // Initialize animation after a short delay to ensure DOM is ready
    //     const timer = setTimeout(() => {
    //         const trigger = initAnimation()
    //         if (trigger) {
    //             containerRef.current._aboutTrigger = trigger
    //         }
    //     }, 150) // Slightly longer delay for mobile

    //     // Cleanup function
    //     return () => {
    //         clearTimeout(timer)
    //         if (containerRef.current?._aboutTrigger) {
    //             containerRef.current._aboutTrigger.kill()
    //         }
    //         if (containerRef.current?._splitText) {
    //             containerRef.current._splitText.revert()
    //         }
    //     }

    // }, { scope: containerRef, dependencies: [hasMounted, isMobile] }) 

    // Handle window resize to refresh ScrollTrigger
    useEffect(() => {
        const handleResize = () => {
            if (ScrollTrigger) {
                ScrollTrigger.refresh()
            }
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    if (!hasMounted) {
        return null
    }

    return (
        <div className='flex flex-col md:flex-row' ref={containerRef}>
            <div className='flex md:w-[40%] justify-between 
            flex-row md:flex-col pb-4 md:pb-0'>
                <h6 className='flex md:items-center items-start text-black'>
                    <span className='mb-1 pr-2'>■</span>
                    About Me
                </h6>
                <div className='md:h-[9vw] md:w-max h-[40vw] w-[40vw] 
                bg-[#666] md:rounded-[.4rem] rounded-lg mb-[40px] md:mb-0'>
                    <Image
                        className='h-[100%] w-[100%] object-contain object-top grayscale hover:grayscale-0 transition duration-300'
                        src={profile1}
                        alt='Lazim Mv Image'
                    />
                </div>
            </div>

            <div className='flex flex-col md:w-[40%]' style={{ gap: isMobile ? 'max(2rem, 24px)' : 'max(3rem, 32px)' }}>
                <h2 className='about-heading text-black overflow-hidden'>
                    Hi, I'm Lazim.<br />
                    Web developer from Kerala.
                </h2>

                <div className="desc-wrapper">
                    <DistortText className='text-medium text-[#8a8a8a]' distortChar=".:">
                        <p className='text-medium text-[#8a8a8a]'>
                            I craft immersive web and mobile experiences that blend performance with personality.
                            Whether it's a sleek dashboard or a smooth app, I turn ideas into pixel perfect, interactive realities.
                        </p>
                    </DistortText>
                </div>

                <Link
                    href="#contact"
                    className="button-wrapper group relative w-max overflow-hidden 
                    md:rounded-[.4rem] rounded-lg md:py-[1rem] md:px-[2.25rem] bg-[#f6f6f6]
                    px-[32px] py-[16px]"
                >
                    <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
                    <div className="relative z-10 flex flex-col items-center overflow-hidden text-black">
                        <span className="transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                            Start Project
                        </span>
                        <span className="absolute top-full transition-transform duration-300 ease-in-out text-white group-hover:translate-y-[-100%]">
                            Start Project
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default About