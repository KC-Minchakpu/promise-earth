import Link from "next/link";
import styles from "./SandstoneServicesHero.module.css";

export default function SandstoneHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>SandStones</h1>

        <div className={styles.breadcrumbs}>
          <Link href="/">Home</Link>
          <span>/</span>

          <Link href="/Services">Services</Link>
          <span>/</span>

          <span className={styles.active}>SandStones</span>
        </div>
      </div>
    </section>
  );
}