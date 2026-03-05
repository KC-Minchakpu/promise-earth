import Link from "next/link";
import styles from "./CTASection.module.css";

export default function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        
        <p className={styles.subtitle}>LET&apos;S WORK TOGETHER</p>

        <h2 className={styles.phone}>
          +234 803 916 8770
        </h2>

        <div className={styles.divider}></div>

        <p className={styles.address}>
          <span>Head Office:</span> #3 Oil Road, Mando, Kaduna, Nigeria
        </p>

        <p className={styles.address}>
          <span>Corporate Office:</span> Suite 17, 1st Floor, ASAD Plaza, Gwagwalada, Abuja, Nigeria
        </p>

        <p className={styles.email}>
          <span>Email:</span> promiseearthnigeria@gmail.com
        </p>

        <Link href="/contact" className={styles.quoteButton}>
          Get a Quote
        </Link>

      </div>
    </section>
  );
}