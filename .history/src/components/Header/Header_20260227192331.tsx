"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const aboutTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const servicesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to check if a path is active
  const isActive = (path: string) => pathname === path;

  // Helper to check if any child of a dropdown is active
  const isAboutActive = ["/AboutUs", "/Emmanuel", "/OurTeam"].includes(pathname);
  const isServicesActive = ["/mining", "/quarry", "/construction", "/excavation", "/sandstones"].includes(pathname);

  const socials = [
    { href: "#", src: "/icons/whatsapp.png", alt: "WhatsApp", title: "WhatsApp" },
    { href: "#", src: "/icons/facebook.png", alt: "Facebook", title: "Facebook" },
    { href: "#", src: "/icons/linkedin.png", alt: "LinkedIn", title: "LinkedIn" },
    { href: "#", src: "/icons/instagram.png", alt: "Instagram", title: "Instagram" },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      {/* TOP BAR */}
      <div className={styles.topBar}>
        <div className={styles.topContainer}>
          <div className={styles.topLeft}>
            <span>+123 1234-567-8901</span>
            <span>info@domain.com</span>
            <span>Mon – Sat 8:00 – 17:30, Sunday – CLOSED</span>
          </div>
          <div className={styles.topRight}>
            {socials.map((social) => (
              <a key={social.alt} href={social.href} title={social.title}>
                <Image src={social.src} alt={social.alt} width={20} height={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <div className={styles.navbar}>
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logo}>
            <Image src="/images/globe.png" alt="Logo" width={70} height={70} priority />
            <span>Promise Earth</span>
          </Link>

          <nav className={`${styles.navLinks} ${mobileOpen ? styles.show : ""}`}>
            {/* HOME */}
            <Link href="/" className={isActive("/") ? styles.active : ""}>
              Home
            </Link>

            {/* ABOUT DROPDOWN */}
            <div
              className={styles.dropdown}
              onMouseEnter={() => {
                if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
                setAboutOpen(true);
              }}
              onMouseLeave={() => {
                aboutTimeoutRef.current = setTimeout(() => setAboutOpen(false), 150);
              }}
            >
              <Link 
                href="/AboutUs" 
                className={`${styles.dropBtn} ${isAboutActive ? styles.active : ""}`}
              >
                About <ChevronDown size={16} />
              </Link>
              <div className={`${styles.dropdownMenu} ${aboutOpen ? styles.showDropdown : ""}`}>
                <Link href="/AboutUs" className={isActive("/AboutUs") ? styles.active : ""}>Promise Earth</Link>
                <Link href="/Emmanuel" className={isActive("/Emmanuel") ? styles.active : ""}>Emmanuel K. Benjamin</Link>
                <Link href="/OurTeam" className={isActive("/OurTeam") ? styles.active : ""}>Our Team</Link>
              </div>
            </div>

            {/* SERVICES DROPDOWN */}
            <div
              className={styles.dropdown}
              onMouseEnter={() => {
                if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
                setServicesOpen(true);
              }}
              onMouseLeave={() => {
                servicesTimeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
              }}
            >
              <Link 
                href="/Services" 
                className={`${styles.dropBtn} ${isServicesActive ? styles.active : ""}`}
              >
                Services <ChevronDown size={16} />
              </Link>
              <div className={`${styles.dropdownMenu} ${servicesOpen ? styles.showDropdown : ""}`}>
                <Link href="/mining" className={isActive("/mining") ? styles.active : ""}>Mining</Link>
                <Link href="/quarry" className={isActive("/quarry") ? styles.active : ""}>Quarry</Link>
                <Link href="/construction" className={isActive("/construction") ? styles.active : ""}>Construction</Link>
                <Link href="/excavation" className={isActive("/excavation") ? styles.active : ""}>Excavation</Link>
                <Link href="/sandstones" className={isActive("/sandstones") ? styles.active : ""}>Sandstones</Link>
              </div>
            </div>

            {/* PROJECTS */}
            <Link href="/projects" className={isActive("/projects") ? styles.active : ""}>
              Projects
            </Link>

            {/* CONTACT */}
            <Link href="/contact" className={isActive("/contact") ? styles.active : ""}>
              Contact
            </Link>
          </nav>

          <div className={styles.cta}>
            <Link href="/contact">GET A QUOTE</Link>
          </div>

          <div className={styles.mobileToggle} onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;