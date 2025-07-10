import React, { useState } from 'react'
import { testimonialsData } from './content'

const Testimonials = ({ isMobile, hasMounted }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
        )
    }

    if (!hasMounted) {
        return null
    }


    return (
        <div id="testimonials" className='h-max'>
            <div
                className="flex flex-col md:gap-x-[max(5rem,80px)] md:gap-y-[max(5rem,80px)] gap-y-[20px]"
            >
                <h6 className='
                    flex items-center
                    text-black  
                    '>
                    <span className='mb-1 pr-2'>■</span>
                    Testimonials
                </h6>
                <div className='flex justify-between md:flex-row flex-col'>
                    <div className='md:w-[70%] w-[100%] flex flex-col'>
                        <div className='relative overflow-hidden'>
                            <div
                                className='flex transition-transform duration-500 ease-in-out'
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {testimonialsData.map((data, index) => (
                                    <div key={index} className='w-full flex-shrink-0'>
                                        <p className='text-black' style={{ fontSize: 'max(2vw, 24px)' }}>
                                            {data.testimonial}
                                        </p>
                                        {data.name && (
                                            <div className='md:mt-[3rem] mt-[30px] flex gap-3 items-center'>
                                                <div className='bg-[#1a1a1a] rounded-[.4rem] flex items-center justify-center'
                                                    style={{ width: 'max(3.5rem, 32px)', height: 'max(3.5rem, 32px)' }}
                                                ><h3 className='text-center'>{data.logo}</h3></div>

                                                <div className='flex flex-col gap-1 '>
                                                    <h3 className='text-black'>{data.name}</h3>
                                                    <p className='text-[#8a8a8a]'>{data.company}</p>
                                                </div>

                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Dots indicator */}
                        {isMobile && <div className='flex gap-3 md:mt-6 mt-[30px] md:mb-0 mb-[30px]'>
                            {testimonialsData.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                    className={`rounded-full transition-all duration-300 flex items-center justify-center
        ${index === currentIndex ? 'bg-black w-6 h-2' : 'bg-gray-300 hover:bg-gray-400 w-4 h-4'}
      `}
                                    style={{
                                        minWidth: 22,
                                        minHeight: 22,
                                        padding: 10, // ensures enough hit area
                                    }}
                                />
                            ))}
                        </div>}

                    </div>

                    <div className='flex gap-3'>
                        <div
                            onClick={prevTestimonial}
                            className='relative overflow-hidden group flex items-center justify-center bg-[#f6f6f6] rounded-[.4rem] cursor-pointer transition-all duration-300'
                            style={{ width: 'max(3.5rem, 32px)', height: 'max(3.5rem, 32px)' }}>
                            {/* Background animation */}
                            <div className='absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out'></div>

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8" className='relative z-10'>
                                <g clipPath="url(#clip0_1436_35)">
                                    <path
                                        d="M0.646401 3.64659C0.451201 3.84186 0.451201 4.15844 0.646401 4.3537L3.8284 7.53568C4.0237 7.73094 4.3403 7.73094 4.5355 7.53568C4.7308 7.34042 4.7308 7.02384 4.5355 6.82857L1.7071 4.00015L4.5355 1.17172C4.7308 0.97646 4.7308 0.65988 4.5355 0.46461C4.3403 0.26935 4.0237 0.26935 3.8284 0.46461L0.646401 3.64659ZM16 3.50015L1 3.50015L1 4.50015L16 4.50015L16 3.50015Z"
                                        fill="#1A1A1A"
                                        className='group-hover:fill-white transition-colors duration-300'
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1436_35">
                                        <rect width="16" height="8" fill="white" transform="translate(16 8) rotate(-180)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>

                        <div
                            onClick={nextTestimonial}
                            className='relative overflow-hidden group flex items-center justify-center bg-[#f6f6f6] rounded-[.4rem] rotate-180 cursor-pointer transition-all duration-300'
                            style={{ width: 'max(3.5rem, 32px)', height: 'max(3.5rem, 32px)' }}>
                            {/* Background animation */}
                            <div className='absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out'></div>

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8" className='relative z-10'>
                                <g clipPath="url(#clip0_1436_36)">
                                    <path
                                        d="M0.646401 3.64659C0.451201 3.84186 0.451201 4.15844 0.646401 4.3537L3.8284 7.53568C4.0237 7.73094 4.3403 7.73094 4.5355 7.53568C4.7308 7.34042 4.7308 7.02384 4.5355 6.82857L1.7071 4.00015L4.5355 1.17172C4.7308 0.97646 4.7308 0.65988 4.5355 0.46461C4.3403 0.26935 4.0237 0.26935 3.8284 0.46461L0.646401 3.64659ZM16 3.50015L1 3.50015L1 4.50015L16 4.50015L16 3.50015Z"
                                        fill="#1A1A1A"
                                        className='group-hover:fill-white transition-colors duration-300'
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1436_36">
                                        <rect width="16" height="8" fill="white" transform="translate(16 8) rotate(-180)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials