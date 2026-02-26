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

  // ✅ Proper timeout refs
  const aboutTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  /* Sticky Scroll */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbar}>
        <div className={styles.navContainer}>

          {/* LOGO */}
          <Link href="/" className={styles.logo}>
            <Image
              src="/images/logo.png"
              alt="Construction Logo"
              width={90}
              height={90}
              priority
            />
            <span>Promise Earth</span>
          </Link>

          <nav className={styles.navLinks}>
            <Link
              href="/"
              className={isActive("/") ? styles.active : ""}
            >
              Home
            </Link>

            {/* ABOUT */}
            <div
              className={styles.dropdown}
              onMouseEnter={() => {
                if (aboutTimeoutRef.current) {
                  clearTimeout(aboutTimeoutRef.current);
                }
                setAboutOpen(true);
              }}
              onMouseLeave={() => {
                aboutTimeoutRef.current = setTimeout(() => {
                  setAboutOpen(false);
                }, 150);
              }}
            >
              <button className={styles.dropBtn}>
                About <ChevronDown size={16} />
              </button>

              <div
                className={`${styles.dropdownMenu} ${
                  aboutOpen ? styles.showDropdown : ""
                }`}
              >
                <Link href="/promise-earth">Promise Earth</Link>
                <Link href="/emmanuel-benjamin">
                  Emmanuel K. Benjamin
                </Link>
                <Link href="/our-team">Our Team</Link>
              </div>
            </div>

            {/*SERVICES */}
            <div
              className={styles.dropdown}
              onMouseEnter={() => {
                if (servicesTimeoutRef.current) {
                  clearTimeout(servicesTimeoutRef.current);
                }
                setServicesOpen(true);
              }}
              onMouseLeave={() => {
                servicesTimeoutRef.current = setTimeout(() => {
                  setServicesOpen(false);
                }, 150);
              }}
            >
              <button className={styles.dropBtn}>
                Services <ChevronDown size={16} />
              </button>

              <div
                className={`${styles.dropdownMenu} ${
                  servicesOpen ? styles.showDropdown : ""
                }`}
              >
                <Link href="/mining">Mining</Link>
                <Link href="/quarry">Quarry</Link>
                <Link href="/construction">Construction</Link>
                <Link href="/excavation">Excavation</Link>
                <Link href="/sandstones">Sandstones</Link>
              </div>
            </div>

            <Link
              href="/projects"
              className={isActive("/projects") ? styles.active : ""}
            >
              Projects
            </Link>

            <Link
              href="/contact"
              className={isActive("/contact") ? styles.active : ""}
            >
              Contact
            </Link>
          </nav>

           {/* ✅ CTA */}
          <div className={styles.cta}>
            <Link href="/contact">GET A QUOTE</Link>
          </div>

          <div
            className={styles.mobileToggle}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;