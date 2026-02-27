import Image from "next/image";
import styles from "./ServicesHero.module.css";

const ServicesHero = () => {
  return (
    <section className={styles.hero}>
      {/* Background Image */}
      <Image
        src="/images/quarry.jpg"
        alt="Quarry Background"
        fill
        priority
        className={styles.bgImage}
      />

      {/* Overlay */}
      <div className={styles.overlay} />

      {/* Content */}
      <div className={styles.content}>
        <h2 className={styles.label}>Our Services</h2>

        <p className={styles.title}>
          We offer all kinds of mining and construction-related services for our clients.
          Whatever your task is, we can implement it.
        </p>
      </div>
    </section>
  );
};

export default ServicesHero;