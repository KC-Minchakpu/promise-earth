"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* TOP BAR */}
      <div className={styles.topBar}>
        <div className={styles.topContainer}>
          <div className={styles.topLeft}>
            <span>+123 1234-567-8901</span>
            <span>info@domain.com</span>
            <span>Mon – Sat 8:00 – 17:30, Sunday – CLOSED</span>
          </div>

          <div className={styles.topRight}>
            <a href="#">X</a>
            <a href="#">F</a>
            <a href="#">In</a>
            <a href="#">Ig</a>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className={styles.navbar}>
        <div className={styles.navContainer}>
          {/* LOGO */}
          <div className={styles.logo}>
            <div className={styles.logoIcon}>🏢</div>
            <span>Construction</span>
          </div>

          {/* DESKTOP MENU */}
          <nav className={`${styles.navLinks} ${mobileOpen ? styles.show : ""}`}>
            <Link href="/" className={styles.active}>
              Home
            </Link>

            {/* ABOUT DROPDOWN */}
            <div
              className={styles.dropdown}
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button className={styles.dropBtn}>
                About <ChevronDown size={16} />
              </button>

              {aboutOpen && (
                <div className={styles.dropdownMenu}>
                  <Link href="/promise-earth">Promise Earth</Link>
                  <Link href="/emmanuel-benjamin">
                    Emmanuel K. Benjamin
                  </Link>
                  <Link href="/our-team">Our Team</Link>
                </div>
              )}
            </div>

            {/* SERVICES DROPDOWN */}
            <div
              className={styles.dropdown}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className={styles.dropBtn}>
                Services <ChevronDown size={16} />
              </button>

              {servicesOpen && (
                <div className={styles.dropdownMenu}>
                  <Link href="/mining">Mining</Link>
                  <Link href="/quarry">Quarry</Link>
                  <Link href="/construction">Construction</Link>
                  <Link href="/excavation">Excavation</Link>
                  <Link href="/sandstones">Sandstones</Link>
                </div>
              )}
            </div>

            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          {/* CONTACT BUTTON */}
          <div className={styles.cta}>
            <Link href="/contact">Get a Quote</Link>
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