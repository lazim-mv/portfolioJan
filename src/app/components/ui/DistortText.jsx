"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import gsap, { SplitText } from "@/app/utils/gsapInit";

gsap.registerPlugin(ScrambleTextPlugin);

export const DistortText = ({ distortChar = ".:", className = "", children }) => {
    const wrapperRef = useRef(null);

    useGSAP(() => {
        const element = wrapperRef.current;
        if (!element) return;

        const splitText = SplitText.create(element, {
            type: "chars",
            charsClass: "char"
        });

        splitText.chars.forEach((char) => {
            gsap.set(char, {
                attr: { "data-content": char.innerHTML }
            });
        });

        element.onpointermove = (e) => {
            splitText.chars.forEach((char) => {
                const rect = char.getBoundingClientRect();
                const cx = rect.left + rect.width / 2;
                const cy = rect.top + rect.height / 2;
                const dx = e.clientX - cx;
                const dy = e.clientY - cy;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100) {
                    gsap.to(char, {
                        overwrite: true,
                        duration: 2 - dist / 100,
                        scrambleText: {
                            text: char.dataset.content,
                            chars: distortChar,
                            speed: 0.5,
                        },
                        ease: "bounce",
                    });
                }
            });
        };
    }, { scope: wrapperRef });

    return (
        <h5 className={className} ref={wrapperRef}>
            {children}
        </h5>
    );
};
