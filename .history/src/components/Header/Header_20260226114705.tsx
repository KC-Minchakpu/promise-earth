"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Sticky Scroll */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Active Link*/
  const isActive = (path: string) => pathname === path;

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
    >
      {/* TOP BAR */}
      <div className={styles.topBar}>
        <div className={styles.topContainer}>
          <div className={styles.topLeft}>
            <span>+123 1234-567-8901</span>
            <span>info@domain.com</span>
            <span>Mon – Sat 8:00 – 17:30, Sunday – CLOSED</span>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <div className={styles.navbar}>
        <div className={styles.navContainer}>
          {/* LOGO */}
          <Link href="/" className={styles.logo}>
            <Image
              src="/logo.png"   
              alt="Construction Logo"
              width={45}
              height={45}
              priority
            />
            <span>Construction</span>
          </Link>

          {/* NAVIGATION */}
          <nav
            className={`${styles.navLinks} ${
              mobileOpen ? styles.show : ""
            }`}
          >
            <Link
              href="/"
              className={isActive("/") ? styles.active : ""}
            >
              Home
            </Link>

            {/* ABOUT DROPDOWN */}
            <div className={styles.dropdown}>
              <button
                className={`${styles.dropBtn} ${
                  pathname.startsWith("/promise-earth") ||
                  pathname.startsWith("/emmanuel-benjamin") ||
                  pathname.startsWith("/our-team")
                    ? styles.active
                    : ""
                }`}
              >
                About <ChevronDown size={16} />
              </button>

              <div className={styles.dropdownMenu}>
                <Link href="/promise-earth">Promise Earth</Link>
                <Link href="/emmanuel-benjamin">
                  Emmanuel K. Benjamin
                </Link>
                <Link href="/our-team">Our Team</Link>
              </div>
            </div>

            {/* SERVICES DROPDOWN */}
            <div className={styles.dropdown}>
              <button
                className={`${styles.dropBtn} ${
                  pathname.startsWith("/mining") ||
                  pathname.startsWith("/quarry") ||
                  pathname.startsWith("/construction") ||
                  pathname.startsWith("/excavation") ||
                  pathname.startsWith("/sandstones")
                    ? styles.active
                    : ""
                }`}
              >
                Services <ChevronDown size={16} />
              </button>

              <div className={styles.dropdownMenu}>
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

          {/* CTA */}
          <div className={styles.cta}>
            <Link href="/contact">CONTACT NOW</Link>
          </div>

          {/* MOBILE TOGGLE */}
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