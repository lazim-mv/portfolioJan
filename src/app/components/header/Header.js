"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import logo from "../../../../public/header/headerLogo1.png";
import { MessageSquare } from "lucide-react";
import styles from "./Header.module.css"; // Import the CSS module
import { BsChatRightText } from "react-icons/bs";
import { getWhatsAppLink } from "@/app/utils/whatsappLink";

const Header = () => {
    const headerRef = useRef();
    const logoRef = useRef();
    const messageRef = useRef();
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (headerRef.current && logoRef.current && messageRef.current) {
                if (currentScrollY > lastScrollY) {
                    gsap.to(headerRef.current, { y: "0%", duration: 0.2, ease: "power2.out", delay: 0 });
                    gsap.to(logoRef.current, { y: "-250%", duration: 0.2, ease: "power2.out", delay: 0 });
                    gsap.to(messageRef.current, { y: "-30%", duration: 0.2, ease: "power2.out", delay: 0 });
                } else {
                    gsap.to(headerRef.current, { y: "0%", duration: 0.2, ease: "power2.out" });
                    gsap.to(logoRef.current, { y: "0%", duration: 0.2, ease: "power2.out" });
                    gsap.to(messageRef.current, { y: "0%", duration: 0.2, ease: "power2.out" });
                }
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const scrollToHome = () => {
        const homeSection = document.getElementById('home');
        if (homeSection) {
            homeSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div ref={headerRef} className={styles.header}>
            <div className={styles.headerContainer}>

                <div ref={logoRef} className={styles.logoContainer} onClick={scrollToHome}>
                    <Image src={logo} alt="logo of lazim mv" className={styles.logoImage} />
                    <a className={styles.logoText}>Lazim mv</a>
                </div>


                <div
                    ref={messageRef}
                    className={styles.messageContainer}
                    onClick={() => window.open(getWhatsAppLink(), "_blank")}
                >
                    <div className={styles.messageIcon}>
                        <MessageSquare size={17} className={styles.icon} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
