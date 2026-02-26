import styles from "./GetQuoteSection.module.css";
import Link from "next/link";

export default function GetQuoteSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.ctaBox}>
          <h2>
            Contact Us to Specify Your Next <br />
            Project Details Right Now!
          </h2>

          <Link href="/contact" className={styles.button}>
            REQUEST A QUOTE
          </Link>
        </div>
      </div>
    </section>
  );
}