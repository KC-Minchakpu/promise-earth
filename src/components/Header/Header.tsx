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
  const navRef = useRef<HTMLElement>(null);

  /* Sticky Scroll */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close menus when clicking outside (Crucial for Mobile) */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setAboutOpen(false);
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
  const closeMenus = setTimeout(() => {
    setMobileOpen(false);
    setAboutOpen(false);
    setServicesOpen(false);
  }, 0);

  return () => clearTimeout(closeMenus);
}, [pathname]);

  const isActive = (path: string) => pathname === path;
  const isAboutActive = ["/AboutUs", "/Emmanuel", "/OurTeam"].includes(pathname);
  const isServicesActive = ["/Services","/Mining", "/Quarry", "/Construction", "/Excavation", "/Sandstones"].includes(pathname);

  // Toggle for Mobile clicks
  const handleToggleAbout = (e: React.MouseEvent) => {
    if (window.innerWidth <= 992) {
      e.preventDefault(); 
      setAboutOpen(!aboutOpen);
      setServicesOpen(false);
    }
  };

  const handleToggleServices = (e: React.MouseEvent) => {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      setServicesOpen(!servicesOpen);
      setAboutOpen(false);
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      {/* ... Top Bar remains the same ... */}

      <div className={styles.navbar}>
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logo}>
            <Image src="/images/globe.png" alt="Logo" width={70} height={70} priority />
            <span>Promise Earth</span>
          </Link>

          <nav 
            ref={navRef}
            className={`${styles.navLinks} ${mobileOpen ? styles.show : ""}`}
          >
            <Link href="/" className={isActive("/") ? styles.active : ""}>Home</Link>

            {/* ABOUT */}
            <div
              className={styles.dropdown}
              onMouseEnter={() => {
                if (window.innerWidth > 992) {
                  if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
                  setAboutOpen(true);
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth > 992) {
                  aboutTimeoutRef.current = setTimeout(() => setAboutOpen(false), 150);
                }
              }}
            >
              <Link 
                href="/AboutUs" 
                onClick={handleToggleAbout}
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

            {/* SERVICES */}
            <div
              className={styles.dropdown}
              onMouseEnter={() => {
                if (window.innerWidth > 992) {
                  if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
                  setServicesOpen(true);
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth > 992) {
                  servicesTimeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
                }
              }}
            >
              <Link 
                href="/Services" 
                onClick={handleToggleServices}
                className={`${styles.dropBtn} ${isServicesActive ? styles.active : ""}`}
              >
                Services <ChevronDown size={16} />
              </Link>
              <div className={`${styles.dropdownMenu} ${servicesOpen ? styles.showDropdown : ""}`}>
                <Link href="/Mining" className={isActive("/Mining") ? styles.active : ""}>Mining</Link>
                <Link href="/Quarry" className={isActive("/Quarry") ? styles.active : ""}>Quarry</Link>
                <Link href="/Construction" className={isActive("/Construction") ? styles.active : ""}>Construction</Link>
                <Link href="/Excavation" className={isActive("/Excavation") ? styles.active : ""}>Excavation</Link>
                <Link href="/Sandstones" className={isActive("/Sandstones") ? styles.active : ""}>Sandstones</Link>
              </div>
            </div>

            <Link href="/Projects" className={isActive("/Projects") ? styles.active : ""}>Projects</Link>
            <Link href="/Contact" className={isActive("/Contact") ? styles.active : ""}>Contact</Link>
          </nav>

          <div className={styles.mobileToggle} onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;