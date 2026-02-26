// Footer.tsx
import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Column 1 */}
        <div className={styles.colBrand}>
          <div className={styles.logoRow}>
            <div className={styles.logoIcon}>🏗️</div>
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
            <a className={styles.social}>f</a>
            <a className={styles.social}>ig</a>
            <a className={styles.social}>tw</a>
            <a className={styles.social}>yt</a>
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
        <span>© Created by</span>
        <span>All rights Reserved</span>
      </div>
    </footer>
  );
}