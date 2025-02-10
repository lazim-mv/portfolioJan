import React, { useState, useEffect, useRef } from "react";
import styles from "./Projects.module.css";
import Image from "next/image";
import { SquareArrowDownRight, X, Eye } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedText from "../animations/AnimatedText";
import TitleAnimation from "../animations/TitleAnimations";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const [iframeLink, setIframeLink] = useState("");
    const titleRef = useRef(null);

    const data = [
        {
            name: "Nexwave",
            link: "https://www.nexwavedigital.com/",
            img: "/projects/nexwave.gif",
        },
        {
            name: "Level Up",
            img: "/projects/lvlup.png",
        },
        {
            name: "Pullys",
            link: "https://www.pullysons.com/",
            img: "/projects/pullysons.gif",
        },
        {
            name: "Pullys",
            link: "https://www.pullysons.com/",
            img: "/projects/pullysons.gif",
        },
    ];

    useEffect(() => {
        const title = titleRef.current;
        if (title) {
            const text = title.textContent;
            title.innerHTML = `
                <div class="${styles.titleWrapper}">
                    <span class="${styles.textBase}">${text}</span>
                    <span class="${styles.textFill}">${text}</span>
                </div>
            `;

            gsap.fromTo(
                `.${styles.textFill}`,
                {
                    clipPath: "inset(100% 0 0 0)",
                },
                {
                    clipPath: "inset(0% 0 0 0)",
                    scrollTrigger: {
                        trigger: title,
                        start: "top 20%",
                        end: "top -20%",
                        scrub: 1,
                        toggleActions: "restart none none reverse"
                    }
                }
            );
        }
    }, [])

    useEffect(() => {

        if (iframeLink) {
            gsap.fromTo(
                `.${styles.iframeView}`,
                { x: "-50%", y: "100%" },
                { y: "0%", duration: 1, ease: "power3.out" }
            );
        }
    }, [iframeLink]);

    return (
        <div className={styles.container}>
            {/* <h1 className={styles.title} ref={titleRef}>Latest Work</h1> */}
            <TitleAnimation text="Latest Work" className={styles.title} />
            <div className={styles.cards}>
                {data.map((project, index) => (
                    <div
                        key={index}
                        className={styles.card}
                    >
                        <div className={styles.cardHeading}>
                            <AnimatedText text={project.name} />
                            {project.link && (
                                <div onClick={() => project.link && setIframeLink(project.link)} style={{ cursor: "pointer" }}>
                                    <SquareArrowDownRight className={styles.icon} strokeWidth={0.75} />
                                </div>
                            )}
                        </div>
                        <Image
                            src={project.img}
                            alt={`Image of ${project.name} company website`}
                            width={400}
                            height={300}
                            className={styles.projectImage}
                        />
                    </div>
                ))}
            </div>

            {iframeLink && (
                <div className={styles.iframeView}>
                    <div className={styles.iframeViewWrap}>
                        <div className={styles.iframeHeader}>
                            <div className={styles.iconContainer} onClick={() => setIframeLink("")}>
                                <X className={styles.closeIcon} color="white" />
                            </div>
                            <a href={iframeLink} target="_blank">
                                <div className={styles.iconContainer}>
                                    <Eye className={styles.viewIcon} color="white" />
                                </div>
                            </a>
                        </div>
                        <iframe src={iframeLink} frameBorder="0" className={styles.iframe}></iframe>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;