"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import styles from "./Hero.module.css";
import hero from "../../../../public/hero/hero.png";
import TitleAnimation from "../animations/TitleAnimations";
import { getWhatsAppLink } from "@/app/utils/whatsappLink";

const Hero = () => {
    const buttonRef = useRef(null);
    const scrollIndicatorRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            buttonRef.current,
            { scale: 1 },
            {
                scale: 1.1,
                repeat: -1,
                yoyo: true,
                duration: 0.8,
                ease: "power1.inOut",
            }
        );
    }, []);


    useEffect(() => {
        // Button hover effect
        gsap.fromTo(
            buttonRef.current,
            { scale: 1 },
            {
                scale: 1.1,
                repeat: -1,
                yoyo: true,
                duration: 0.8,
                ease: "power1.inOut",
            }
        );

        // Scroll indicator bounce animation
        gsap.to(scrollIndicatorRef.current, {
            y: 10,
            repeat: -1,
            yoyo: true,
            duration: 1.5,
            ease: "power1.inOut",
        });
    }, []);

    return (
        <section className={styles.heroSection} id="home">
            <div className={styles.heroContainer}>
                <div className={styles.heroImageWrapper}>
                    <Image
                        src={hero}
                        alt="Image of Lazim Latheef"
                        width={500}
                        height={500}
                        priority
                        className={styles.heroImage}
                        style={{ display: "none" }}
                    />
                </div>
                <TitleAnimation text="Lazim Latheef" className={styles.heroTitle} start="top 90%" />

                <p className={styles.heroDescription}>
                    Software Developer / Fullstack
                </p>

                <button className={styles.heroButton}
                    onClick={() => window.open(getWhatsAppLink(), "_blank")}
                >
                    Get in touch →
                </button>
            </div>

            <div
                className={styles.indicatorContainer}
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
                <div className={styles.indicator}>
                    <div className={styles.dot}></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
