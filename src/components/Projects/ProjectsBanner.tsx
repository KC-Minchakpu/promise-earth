import styles from "./ProjectsBanner.module.css";

export default function ProjectsBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <div className={styles.titleWrapper}>
          <span className={styles.line}></span>
          <h1>Our Projects</h1>
        </div>

        <p className={styles.subtitle}>
          Every month, we implement new projects of different scales.
        </p>
      </div>
    </section>
  );
}