import React from 'react'
import styles from './footer.module.css'
import TitleAnimation from '../animations/TitleAnimations'
import { getWhatsAppLink } from '@/app/utils/whatsappLink'

const Footer = () => {
    return (
        <section className={styles.heroSection}
            onClick={() => window.open(getWhatsAppLink(), "_blank")}
        >
            <div className={styles.heroContainer}>

                <TitleAnimation text="Get in Touch" className={styles.heroTitle} start="bottom 10%" />



                <button className={styles.heroButton}
                    onClick={() => window.open(getWhatsAppLink(), "_blank")}
                >
                    Get in touch →
                </button>
            </div>
        </section>
    )
}

export default Footer