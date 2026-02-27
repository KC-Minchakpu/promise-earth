import styles from "./MissionSection.module.css";
import { FaRocket, FaHardHat } from "react-icons/fa";

const MissionSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.icon}>
          <FaRocket />
        </div>
        <h3 className={styles.title}>Our Vision</h3>
        <p className={styles.text}>
          Our vision is to be the leading world&apos;s contractor and employer
          of choice with the ability to provide successful construction
          projects in the USA and other countries.
        </p>
      </div>

      <div className={styles.card}>
        <div className={styles.icon}>
          <FaHardHat />
        </div>
        <h3 className={styles.title}>Our Mission</h3>
        <p className={styles.text}>
          Our mission is to satisfy our clients through excellent service,
          integrated solutions, and the highest quality. We are focused on
          long-term relationships with clients delivering our promises.
        </p>
      </div>
    </section>
  );
};

export default MissionSection;