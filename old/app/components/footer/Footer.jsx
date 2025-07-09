import React from 'react'
import styles from './footer.module.css'
import TitleAnimation from '../animations/TitleAnimations'
import { getWhatsAppLink } from '@/app/utils/whatsappLink'

const Footer = () => {
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            e.target.click();
        }
    };

    return (
        <section 
            className={styles.heroSection}
            onClick={() => window.open(getWhatsAppLink(), "_blank")}
            onKeyDown={handleKeyPress}
            role="contentinfo"
            aria-label="Contact section"
            tabIndex={0}
            id='contact'
        >
            <div 
                className={styles.heroContainer}
                role="region"
                aria-label="Contact information"
            >
                <TitleAnimation 
                    text="Get in Touch" 
                    className={styles.heroTitle} 
                    start="bottom 10%" 
                    aria-label="Contact heading"
                />

                <button 
                    className={styles.heroButton}
                    onClick={() => window.open(getWhatsAppLink(), "_blank")}
                    onKeyDown={handleKeyPress}
                    aria-label="Open WhatsApp chat"
                >
                    Get in touch →
                </button>
            </div>
        </section>
    )
}

export default Footer