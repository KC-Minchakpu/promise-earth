import Image from "next/image";
import styles from "./AboutSection.module.css";

const AboutSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Left Image */}
        <div className={styles.imageWrapper}>
          <div className={styles.imageFrame}>
            <Image
              src="/images/about.jpg"
              alt="Construction Gears"
              fill
              className={styles.image}
            />
          </div>
        </div>

        {/* Right Content */}
        <div className={styles.content}>
          <h2 className={styles.heading}>
            <span className={styles.accent}></span>
            About Promise Earth<span className={styles.dot}>.</span>
          </h2>

          <h2 className={styles.lead}>
            Building the Future, Responsibly
          </h2>

          <p>
            At Promise Earth, we are a leading mining and quarrying company committed to supplying the 
            essential materials that fuel infrastructure development and economic growth. We extract 
            and process a variety of minerals and aggregates, ensuring a steady supply for construction, 
            manufacturing, and other vital industries.
          </p>

          <p>
            Our trustworthy business practices, efficient work processes, and
            a huge performance capacity ensure the Basalt&apos;s ability to deliver
            as promised.
          </p>

          <ul className={styles.list}>
            <li>Special rigger license holder.</li>
            <li>Asbestos certified contractor.</li>
            <li>Certified roofing contractor.</li>
            <li>OSHA certified.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;