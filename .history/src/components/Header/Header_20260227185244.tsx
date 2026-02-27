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
  const [aboutOpen, setAboutOpen] = useState<boolean>(false);
  const [servicesOpen, setServicesOpen] = useState<boolean>(false);

  const headerRef = useRef<HTMLDivElement>(null);

  /* ---------------- ACTIVE ROUTE ---------------- */
  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(path + "/");

  /* ---------------- STICKY SCROLL ---------------- */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- CLOSE ON OUTSIDE CLICK ---------------- */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setAboutOpen(false);
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ---------------- KEYBOARD SUPPORT ---------------- */
  const handleKeyToggle = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    setter: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setter((prev) => !prev);
    }
    if (e.key === "Escape") {
      setter(false);
    }
  };

  const socials = [
    { href: "#", src: "/icons/whatsapp.png", alt: "WhatsApp" },
    { href: "#", src: "/icons/facebook.png", alt: "Facebook" },
    { href: "#", src: "/icons/linkedin.png", alt: "LinkedIn" },
    { href: "#", src: "/icons/instagram.png", alt: "Instagram" },
  ];

  return (
    <header
      ref={headerRef}
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
    >
      {/* ================= TOP BAR ================= */}
      <div className={styles.topBar}>
        <div className={styles.topContainer}>
          <div className={styles.topLeft}>
            <span>+123 1234-567-8901</span>
            <span>info@domain.com</span>
            <span>Mon – Sat 8:00 – 17:30, Sunday – CLOSED</span>
          </div>

          <div className={styles.topRight}>
            {socials.map((social) => (
              <a
                key={social.alt}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.alt}
              >
                <Image
                  src={social.src}
                  alt={social.alt}
                  width={20}
                  height={20}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <div className={styles.navbar}>
        <div className={styles.navContainer}>
          {/* LOGO */}
          <Link href="/" className={styles.logo}>
            <Image
              src="/images/globe.png"
              alt="Promise Earth Logo"
              width={70}
              height={70}
              priority
            />
            <span>Promise Earth</span>
          </Link>

          {/* NAV LINKS */}
          <nav
            className={`${styles.navLinks} ${
              mobileOpen ? styles.show : ""
            }`}
          >
            <Link href="/" className={isActive("/") ? styles.active : ""}>
              Home
            </Link>

            {/* ================= ABOUT ================= */}
            <div className={styles.dropdown}>
              <div className={styles.dropdownHeader}>
                <Link
                  href="/about"
                  className={`${styles.dropLink} ${
                    isActive("/about") ? styles.active : ""
                  }`}
                >
                  About
                </Link>

                <button
                  type="button"
                  className={styles.iconButton}
                  aria-expanded={aboutOpen.toString()}
                  aria-controls="about-menu"
                  title="Toggle About menu"
                  onClick={() => setAboutOpen((prev) => !prev)}
                  onKeyDown={(e) => handleKeyToggle(e, setAboutOpen)}
                >
                  <ChevronDown
                    size={16}
                    className={aboutOpen ? styles.rotate : ""}
                  />
                </button>
              </div>

              <div
                id="about-menu"
                className={`${styles.dropdownMenu} ${
                  aboutOpen ? styles.showDropdown : ""
                }`}
              >
                <Link href="/AboutUs">Promise Earth</Link>
                <Link href="/Emmanuel">Emmanuel K. Benjamin</Link>
                <Link href="/OurTeam">Our Team</Link>
              </div>
            </div>

            {/* ================= SERVICES ================= */}
            <div className={styles.dropdown}>
              <div className={styles.dropdownHeader}>
                <Link
                  href="/services"
                  className={`${styles.dropLink} ${
                    isActive("/services") ? styles.active : ""
                  }`}
                >
                  Services
                </Link>

                <button
                  type="button"
                  className={styles.iconButton}
                  aria-expanded={servicesOpen.toString()}
                  aria-controls="services-menu"
                  title="Toggle Services menu"
                  onClick={() => setServicesOpen((prev) => !prev)}
                  onKeyDown={(e) => handleKeyToggle(e, setServicesOpen)}
                >
                  <ChevronDown
                    size={16}
                    className={servicesOpen ? styles.rotate : ""}
                  />
                </button>
              </div>

              <div
                id="services-menu"
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

          {/* CTA */}
          <div className={styles.cta}>
            <Link href="/contact">GET A QUOTE</Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            type="button"
            className={styles.mobileToggle}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle Menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;