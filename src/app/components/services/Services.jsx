import React, { useRef } from 'react'
import { projectSequenceData, servicesData } from './content'
import { useGSAP } from '@gsap/react'
import gsap from '@/app/utils/gsapInit'
import { SplitText } from '@/app/utils/gsapInit'
import { ScrollTrigger } from '@/app/utils/gsapInit'

const Services = ({ isMobile, hasMounted }) => {
    const section1Ref = useRef(null)
    const section2Ref = useRef(null)


    useGSAP(() => {
        const ctx = gsap.context(() => {
            const heading = section1Ref.current.querySelector('.service-heading1')
            const items = gsap.utils.toArray('.service-item')

            const split = new SplitText(heading, {
                type: 'lines',
                linesClass: 'split-line1',
            })

            split.lines.forEach(line => {
                const wrapper = document.createElement('div')
                wrapper.style.overflow = 'hidden'
                wrapper.style.lineHeight = '1.2'
                line.parentNode.insertBefore(wrapper, line)
                wrapper.appendChild(line)
            })

            gsap.set(split.lines, { y: '100%' })

            gsap.to(split.lines, {
                y: '0%',
                duration: 0.8,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: section1Ref.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            })

            items.forEach(item => {
                const divider = item.querySelector('.service-divider')
                const heading = item.querySelector('.card-heading')
                const desc = item.querySelector('p')

                gsap.set([divider], { width: 0 })
                gsap.set([heading, desc], { y: 20, opacity: 0 })

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 90%',
                        toggleActions: 'play none none reverse',
                    },
                })

                tl.to(divider, {
                    width: '100%',
                    duration: 1,
                    ease: 'power1.inOut',
                }, 0.1)
                    .to(heading, {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'back.out(1.2)',
                    }, '<0.2')
                    .to(desc, {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: 'back.out(1.2)',
                    }, '<0.2')

            })

            return () => {
                split.revert()
                ScrollTrigger.getAll().forEach(t => t.kill())
            }
        }, section1Ref)

        return () => ctx.revert()
    }, [])

    // Section 2 animation (Project Sequence)
    useGSAP(() => {
        const ctx = gsap.context(() => {
            const heading = section2Ref.current.querySelector('.service-heading')
            const lines = new SplitText(heading, {
                type: 'lines',
                linesClass: 'split-line',
            })

            lines.lines.forEach(line => {
                const wrapper = document.createElement('div')
                wrapper.style.overflow = 'hidden'
                wrapper.style.lineHeight = '1.2'
                line.parentNode.insertBefore(wrapper, line)
                wrapper.appendChild(line)
            })

            const cards = gsap.utils.toArray('.service-bottom')
            const dividers = gsap.utils.toArray('.service-divider')

            // Set initial states
            gsap.set(lines.lines, { y: '100%' })
            gsap.set(cards, { y: 40, opacity: 0 })
            gsap.set(dividers, { width: 0 })

            // Create master timeline for sequential animations
            const masterTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: section2Ref.current,
                    start: 'top 75%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                },
            })

            // 1. Animate heading lines first
            masterTimeline.to(lines.lines, {
                y: '0%',
                duration: 0.8,
                stagger: 0.12,
                ease: 'power2.out',
            })

            // 2. Animate dividers after heading (with slight overlap)
            masterTimeline.to(dividers, {
                width: '100%',
                duration: 1.2,
                stagger: 0.2,
                ease: 'power2.out',
            }, '-=0.8')

            // 3. Animate cards after dividers start (with overlap for smoother flow)
            masterTimeline.to(cards, {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.18,
                ease: 'back.out(1.4)',
            }, '-=1.2')

            return () => {
                lines.revert()
                ScrollTrigger.getAll().forEach(t => t.kill())
            }
        }, section2Ref)

        return () => ctx.revert()
    }, [])


    return (
        <div className="bg-[#1a1a1a] relative z-10" id='serviceContainer'>
            <section
                ref={section1Ref}
                id="servicesSection1"
                className="bg-[#1a1a1a]"
                style={{
                    padding: isMobile ? "96px 5vw 96px" : "max(8rem, 96px) 5vw max(10rem, 96px)",
                }}
            >
                <h6 className='
                    flex items-center
                    text-white 
                    '>
                    <span className='mb-1 pr-2'>■</span>
                    Services
                </h6>
                <div className='md:w-[50%] w-[100%]' style={{ marginTop: isMobile ? '32px' : 'max(3rem, 32px)' }}>
                    <h4 className='service-heading1 overflow-hidden'>I handle web design, development, SEO, and maintenance—so you can stay focused on your goals and grow your core business.</h4>
                </div>

                <div
                    className="grid w-full min-w-full p-0 grid-cols-1 md:grid-cols-2"
                    style={{
                        gridTemplateRows: 'auto auto',
                        columnGap: 'max(8vw, 80px)',
                        rowGap: 'max(6vw, 80px)',
                        marginTop: isMobile ? '80px' : 'max(8rem, 96px)',
                        marginBottom: 'max(2em, 32px)',
                        objectFit: 'fill',
                    }}
                >
                    {servicesData.map((service, index) => (
                        <div key={index} className="service-item">
                            <div className='service-bottom'>
                                <div className='card-heading flex gap-2'>
                                    <h5 className='text-[#7a7a7a]'>{service.id}.</h5>
                                    <h5>{service.title}</h5>
                                </div>
                                <div className='service-divider h-[1px] bg-[#666]'
                                    style={{
                                        width: "0%",
                                        marginTop: isMobile ? '24px' : 'max(1.5vw, 16px)',
                                        marginBottom: isMobile ? '24px' : 'max(1.5vw, 16px)',
                                    }}
                                ></div>
                                <div>
                                    <p className='text-[#d0d0d0]'>{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className='hero-divider h-[1px] bg-[#666]'
                style={{
                    width: "100%",
                    marginTop: 'max(1.5vw, 16px)',
                    marginBottom: 'max(1.5vw, 16px)',
                }}
            ></div>

            {/* <TechLogos /> */}

            <section
                ref={section2Ref}
                id="projectSequence"
                className="bg-[#1a1a1a]"
                style={{
                    padding: isMobile ? "96px 5vw 96px" : "max(8rem, 96px) 5vw max(10rem, 96px)",
                }}
            >
                <h6 className='
                    flex items-center
                    text-white 
                    '>
                    <span className='mb-1 pr-2'>■</span>
                    Let's Build It Together
                </h6>

                <div className='md:w-[50%] w-[100%]' style={{ marginTop: 'max(3rem, 32px)' }}>
                    <h4 className='service-heading overflow-hidden'>To give you full clarity on how I work, here's a quick overview of the key phases of your project.</h4>
                </div>

                <div
                    id='projectSequenceContent'
                    className='flex flex-col'
                    style={{ paddingTop: isMobile ? '60px' : 'max(8rem, 96px)' }}
                >
                    {projectSequenceData.map((item, index) => (
                        <div key={index}>
                            <div className='service-divider h-[1px] bg-[#666]'
                                style={{
                                    width: "0%",
                                    marginTop: isMobile ? '24px' : 'max(1.5vw, 16px)',
                                    marginBottom: isMobile ? '24px' : 'max(1.5vw, 16px)',
                                }}
                            ></div>
                            <div
                                className="
                                    service-bottom
                                    grid 
                                    grid-rows-[auto] 
                                    grid-cols-1
                                    md:grid-cols-[0.5fr_1fr_1.25fr] 
                                    mt-[max(2vw,16px)] 
                                    mb-[max(4vw,48px)] 
                                    auto-cols-[1fr] 
                                    gap-[16px]"
                                style={{
                                    width: "100%",
                                    marginTop: isMobile ? '0' : "max(2vw, 16px)",
                                    marginBottom: "max(4vw, 40px)",
                                }}
                            >

                                <p className='text-[#7a7a7a]'>{item.step}.</p>
                                <h3>{item.title}</h3>
                                <p className='text-[#d0d0d0]'>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Services