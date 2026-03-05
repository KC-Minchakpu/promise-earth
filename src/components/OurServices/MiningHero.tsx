import Link from "next/link";
import styles from "./MiningHero.module.css";

export default function MiningHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>Mining</h1>

        <div className={styles.breadcrumbs}>
          <Link href="/">Home</Link>
          <span>/</span>

          <Link href="/services">Services</Link>
          <span>/</span>

          <span className={styles.active}>Mining</span>
        </div>
      </div>
    </section>
  );
}