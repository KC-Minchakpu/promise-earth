import Image from "next/image";
import styles from "./ContactHero.module.css";

export default function ContactHero() {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/contact.jpg"
        alt="Project Site"
        fill
        priority
        className={styles.background}
      />

      <div className={styles.overlay} />

      <div className={styles.content}>
        <div className={styles.titleRow}>
          <span className={styles.accent}></span>
          <h1 className={styles.title}>Contacts</h1>
        </div>

        <p className={styles.description}>
          If you want to schedule a consultation, order a new project, or
          simply have any questions, feel free to contact us!
        </p>
      </div>
    </section>
  );
}