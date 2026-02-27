import styles from "./ServicesHero.module.css";

const ServicesHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <h1 className={styles.heading}>
          <span className={styles.accent} />
          Our Services
        </h1>

        <p className={styles.text}>
          We offer all kinds of Mining and construction-related services for our clients.
          Whatever your task is, we can implement it.
        </p>
      </div>
    </section>
  );
};

export default ServicesHero;