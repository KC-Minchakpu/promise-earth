import Image from "next/image";
import styles from "./AboutHero.module.css";

const AboutHero = () => {
  return (
    <section className={styles.hero}>
      {/* Background Image */}
      <Image
        src="/images/service.jpg"
        alt="Breaking Gravel"
        fill
        priority
        className={styles.bgImage}
      />

      {/* Overlay */}
      <div className={styles.overlay} />

      {/* Content */}
      <div className={styles.content}>
        <span className={styles.label}>About Us</span>

        <h1 className={styles.title}>
          Promise Earth is a Mining, construction & engineering company that offers
          its services throughout Nigeria.
        </h1>
      </div>
    </section>
  );
};

export default AboutHero;