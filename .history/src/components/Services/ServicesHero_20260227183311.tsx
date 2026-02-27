import Image from "next/image";
import styles from "./ServicesHero.module.css";

const ServicesHero = () => {
  return (
    <section className={styles.hero}>
      {/* Background Image */}
      <Image
        src="/images/services-hero.jpg"
        alt="Construction site services"
        fill
        priority
        className={styles.bgImage}
      />

      {/* Overlay */}
      <div className={styles.overlay} />

      {/* Content */}
      <div className={styles.content}>
        <span className={styles.label}>Our Services</span>

        <h1 className={styles.title}>
          We offer all kinds of mining and construction-related services for our clients.
          Whatever your task is, we can implement it.
        </h1>
      </div>
    </section>
  );
};

export default ServicesHero;