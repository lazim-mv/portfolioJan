"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import logo from "../../../../public/header/headerLogo1.png";
import { MessageSquare } from "lucide-react";
import styles from "./Header.module.css";
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

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            e.target.click();
        }
    };

    return (
        <header ref={headerRef} className={styles.header} role="banner">
            <nav className={styles.headerContainer} aria-label="Main navigation">
                <div
                    ref={logoRef}
                    className={styles.logoContainer}
                    onClick={scrollToHome}
                    onKeyDown={handleKeyPress}
                    role="button"
                    tabIndex={0}
                    aria-label="Go to home section"
                >
                    <Image src={logo} alt="Lazim MV logo" className={styles.logoImage} />
                    <span className={styles.logoText}>Lazim mv</span>
                </div>

                <div
                    ref={messageRef}
                    className={styles.messageContainer}
                    onClick={() => window.open(getWhatsAppLink(), "_blank")}
                    onKeyDown={handleKeyPress}
                    role="button"
                    tabIndex={0}
                    aria-label="Open WhatsApp chat"
                >
                    <div className={styles.messageIcon}>
                        <MessageSquare size={17} className={styles.icon} aria-hidden="true" />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
