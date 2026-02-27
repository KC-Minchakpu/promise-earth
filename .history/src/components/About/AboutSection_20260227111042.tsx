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
            About Great House<span className={styles.dot}>.</span>
          </h2>

          <p className={styles.lead}>
            We are experts in construction and engineering fields. Great House
            is the best choice for your project of any complexity.
          </p>

          <p>
            We are a leading construction company with 25+ years of experience
            in the industry. We are dedicated to providing a full suite of
            high-quality construction services driven by modern technologies.
            From residential construction to shopping centers and government
            facilities, no job is too big or too small for us.
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