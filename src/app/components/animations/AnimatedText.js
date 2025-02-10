import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({ text, start = "top 60%", className }) => {
    const textRef = useRef(null);

    useEffect(() => {
        if (!textRef.current) return;

        const workWithChars = textRef.current.querySelectorAll("span");

        gsap.fromTo(
            workWithChars,
            {
                x: -50,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.03,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: start,
                    toggleActions: "play none none reverse",
                }
            }
        );

    }, [start]);

    return (
        <p ref={textRef} style={{ display: "inline-block", overflow: "hidden" }} className={` ${className || ""}`}>
            {text.split("").map((char, index) => (
                <span key={index} style={{ display: "inline-block" }}>
                    {char}
                </span>
            ))}
        </p>
    );
};

export default AnimatedText;
