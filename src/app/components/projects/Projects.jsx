"use client"
import React, { useState, useEffect, useRef } from 'react'
import { projectData } from './data'
import Image from 'next/image'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLenis } from 'lenis/react'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const Projects = ({ isMobile, hasMounted }) => {
    const lenis = useLenis();
    const [showAll, setShowAll] = useState(false)
    const containerRef = useRef(null)
    const projectRefs = useRef([])

    const visibleProjects = showAll ? projectData : projectData.slice(0, 4)

    useGSAP(() => {

        ScrollTrigger.getAll().forEach(trigger => trigger.kill())


        projectRefs.current.forEach((ref, index) => {
            if (ref) {
                const image = ref.querySelector('.parallax-image')
                const webImage = ref.querySelector('.web-image')

                if (image) {
                    gsap.set(image, {
                        transformStyle: 'preserve-3d',
                        willChange: 'transform',
                        scale: 1.3,
                    })

                    gsap.to(image, {
                        yPercent: -8,
                        scale: 1.3,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: ref,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: 1,
                            invalidateOnRefresh: true,
                        }
                    })
                }

                // Add scale animation for webImage
                if (webImage) {
                    gsap.set(webImage, {
                        scale: 0.95,
                        transformOrigin: 'center center',
                    })

                    gsap.to(webImage, {
                        scale: 1,
                        duration: 0.8,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: ref,
                            start: 'top 75%',
                            end: 'bottom 25%',
                            toggleActions: 'play none none reverse',
                            invalidateOnRefresh: true,
                        }
                    })
                }
            }
        })

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, { scope: containerRef, dependencies: [visibleProjects.length, hasMounted, isMobile] })


    useEffect(() => {
        projectRefs.current = projectRefs.current.slice(0, visibleProjects.length)
    }, [visibleProjects.length])


    const handleToggleView = () => {
        const newShowAll = !showAll
        setShowAll(newShowAll)


        if (!showAll && newShowAll && lenis && containerRef.current) {
            setTimeout(() => {
                const containerBottom = containerRef.current.offsetTop + containerRef.current.offsetHeight
                const offset = containerBottom - 1500
                lenis.scrollTo(offset, { duration: 1.2 })
            }, 100)
        }
    }

    if (!hasMounted) {
        return null
    }



    return (
        <div ref={containerRef}>
            <div className='flex justify-between items-start'>
                <h6 className='
                    flex items-center
                    text-black  
                    '>
                    <span className='mb-1 pr-2'>■</span>
                    Projects
                </h6>

                <Link
                    href=""
                    onClick={(e) => {
                        e.preventDefault()
                        handleToggleView()

                    }}
                    className="relative group overflow-hidden  mb-6 md:inline-block hidden"
                >
                    <span className="text-black">{showAll ? "Hide" : "View More"}</span>
                    <span className="text-[rgba(255,255,255,.9)] block absolute top-full left-0 transition-transform duration-300 group-hover:translate-y-[-100%]">
                        {showAll ? "Hide" : "View More"}
                    </span>
                </Link>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 lg:gap-12 md:pt-[50px] pt-[46px] pb-5'
                style={{
                    gridColumnGap: 'max(3vw, 40px)', gridRowGap: isMobile ? 'max(2.25rem, 36px)' : 'max(3.5vw, 64px)'
                }}>
                {visibleProjects.map((project, index) => (
                    <div
                        ref={el => projectRefs.current[index] = el}
                        onClick={() => window.open(project.link, '_blank')}
                        key={index}
                        className='group cursor-pointer md:rounded-[.4rem] rounded-lg overflow-hidden'
                    >
                        <div className="
                                    relative 
                                    aspect-[4/3]
                                    w-[100%]
                                    max-h-[551px]
                                    md:rounded-[.4rem] rounded-lg 
                                    overflow-hidden
                                    flex
                                    items-center
                                    justify-center
                                    transition-all duration-400 ease-out
                                    hover:-translate-y-1
                                    hover:shadow-xl hover:shadow-black/20
                                    border border-[##7a7a7a]"
                        >
                            <Image
                                src={project.image}
                                alt={project.alt}
                                fill
                                className="parallax-image md:rounded-[.4rem] rounded-lg overflow-hidden blur-[4px] object-cover object-center"
                                quality={100}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                                style={{
                                    transformStyle: 'preserve-3d',
                                    willChange: 'transform'
                                }}
                            />


                            <div className="relative aspect-[1902/911] shadow-sm bg-gray-100 w-[90%] md:rounded-[.4rem] rounded-lg overflow-hidden">
                                <Image
                                    src={project.webImage}
                                    alt={`${project.alt}(blurred bakcground)`}
                                    fill
                                    className="web-image object-cover md:rounded-[.4rem] rounded-lg shadow-sm"
                                    quality={100}
                                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 90vw, 90vw"
                                />
                            </div>
                        </div>

                        {/* Project title */}
                        <div className="mt-4 text-start">
                            <h3 className="text-medium text-black">
                                {project.name}
                            </h3>
                            {project.description && (
                                <p className="text-medium text-[#8a8a8a] mt-1">
                                    {project.description}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects