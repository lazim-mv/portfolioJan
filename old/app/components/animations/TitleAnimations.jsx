import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./TitleAnimation.module.css";

gsap.registerPlugin(ScrollTrigger);

const TitleAnimation = ({ text, className, start = "top 20%" }) => {
    const titleRef = useRef(null);

    useEffect(() => {
        const title = titleRef.current;
        if (title) {
            title.innerHTML = `
                <div class="${styles.titleWrapper}">
                    <span class="${styles.textBase}">${text}</span>
                    <span class="${styles.textFill}">${text}</span>
                </div>
            `;

            const textFill = title.querySelector(`.${styles.textFill}`);

            if (start !== "top 20%") {
                gsap.fromTo(
                    textFill,
                    { clipPath: "inset(100% 0 0 0)" },
                    {
                        clipPath: "inset(50% 0 0 0)", // Fully visible
                        duration: 1.5, // Animation duration for mount effect
                        ease: "power2.out",
                    }
                );
            }

            // Apply ScrollTrigger animation
            gsap.fromTo(
                textFill,
                { clipPath: "inset(100% 0 0 0)" }, // Reset for ScrollTrigger
                {
                    clipPath: "inset(0% 0 0 0)",
                    scrollTrigger: {
                        trigger: title,
                        start: start,
                        end: "top -20%",
                        scrub: 1,
                        toggleActions: "restart none none reverse",
                    },
                }
            );
        }
    }, [text]);

    return <div ref={titleRef} className={`${styles.title} ${className || ""}`}></div>;
};

export default TitleAnimation;
