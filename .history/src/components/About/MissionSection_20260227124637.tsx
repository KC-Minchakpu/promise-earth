import styles from "./MissionSection.module.css";
import { FaRocket, FaHardHat } from "react-icons/fa";

const MissionSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.icon}>
          <FaRocket />
        </div>
        <h3 className={styles.title}>Our Mission</h3>
        <p className={styles.text}>
          To deliver high-quality minerals and aggregates to fuel infrastructure development and economic 
          growth. Uphold the highest standards of environmental stewardship and community engagement. 
          Foster a culture of safety and innovation within our workforce.
        </p>
      </div>

      <div className={styles.card}>
        <div className={styles.icon}>
          <FaHardHat />
        </div>
        <h3 className={styles.title}>Our Promise</h3>
        <p className={styles.text}>
          We are dedicated to minimizing our impact on the environment through responsible mining 
          practices and land reclamation efforts. We actively collaborate with local communities to 
          ensure our operations benefit the region for generations to come. We invest in cutting-edge 
          technologies to optimize resource extraction and promote sustainability.
        </p>
      </div>
    </section>
  );
};

export default MissionSection;