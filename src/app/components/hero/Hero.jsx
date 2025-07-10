import React from 'react'
import dynamic from 'next/dynamic'

// Import the client component dynamically
const ClientHero = dynamic(() => import('./ClientHero'), {
    ssr: true
})

const Hero = ({ isMobile, hasMounted }) => {
    return (
        <>
            {/* Static content for SEO */}
            

            {/* Interactive content */}
            <ClientHero isMobile={isMobile} hasMounted={hasMounted} />
        </>
    )
}

export default Hero