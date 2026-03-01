// Footer.tsx
import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Column 1 */}
        <div className={styles.colBrand}>
          <div className={styles.logoRow}>
            <Image
            src="/images/globe.png"
            alt="Promise Earth logo"
            width={60}
            height={60}
            className={styles.logoImage}
            priority
            />
            <div>
              <div className={styles.brand}>Promise Earth</div>
              <div className={styles.subBrand}>MINING | CONSTRUCTION | QUARRY</div>
            </div>
          </div>

          <p className={styles.desc}>
            We offer residential and commercial construction services, as well
            as all kinds of additional services throughout the USA.
          </p>

          <div className={styles.socials}>
      <a
        href="https://www.facebook.com/yourpage"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className={styles.social}
      >
        <Image
          src="/icons/facebook.png"
          alt="Facebook"
          width={24}
          height={24}
        />
      </a>

      <a
        href="https://www.instagram.com/yourpage"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className={styles.social}
      >
        <Image
          src="/icons/instagram.png"
          alt="Instagram"
          width={24}
          height={24}
        />
      </a>

      <a
        href="https://whatsapp.com/yourpage"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className={styles.social}
      >
        <Image
          src="/icons/whatsapp.png"
          alt="WhatsApp"
          width={24}
          height={24}
        />
      </a>

      <a
        href="https://www.linkedin.com/@yourchannel"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className={styles.social}
      >
        <Image
          src="/icons/linkedin.png"
          alt="LinkedIn"
          width={24}
          height={24}
        />
      </a>
    </div>
        </div>

        {/* Column 2 */}
        <div className={styles.col}>
          <h4 className={styles.heading}>Company</h4>
          <ul className={styles.links}>
            <li><Link href="/sectors" className={styles.link}>About Us</Link></li>
            <li><Link href="/services" className={styles.link}>Services</Link></li>
            <li><Link href="/projects" className={styles.link}>Projects</Link></li>
            <li><Link href="/contacts" className={styles.link}>Contacts</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className={styles.col}>
          <h4 className={styles.heading}>Services</h4>
          <ul className={styles.links}>
            <li><Link href="/services/project-management" className={styles.link}>Mining</Link></li>
            <li><Link href="/services/design-build" className={styles.link}>Quarrying</Link></li>
            <li><Link href="/services/remodeling" className={styles.link}>Excavation</Link></li>
            <li><Link href="/services/construction" className={styles.link}>Construction</Link></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className={styles.colNewsletter}>
          <h4 className={styles.heading}>Newsletter</h4>
          <p className={styles.newsText}>
            Subscribe to get the latest news from us.
          </p>

          <input
            type="email"
            placeholder="Email*"
            className={styles.input}
          />
          <button className={styles.button}>SUBSCRIBE</button>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <span>Design and Developed by: </span> <a href="http://">Kevin Cross Minchakpu</a>
        <span>&copy; 2026. Promise Earth. All rights Reserved</span>
      </div>
    </footer>
  );
}