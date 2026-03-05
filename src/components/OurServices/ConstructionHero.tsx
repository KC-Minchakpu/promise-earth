import Link from "next/link";
import styles from "./ConstructionHero.module.css";

export default function ConstructionHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>Construction</h1>

        <div className={styles.breadcrumbs}>
          <Link href="/">Home</Link>
          <span>/</span>

          <Link href="/Services">Services</Link>
          <span>/</span>

          <span className={styles.active}>Construction</span>
        </div>
      </div>
    </section>
  );
}