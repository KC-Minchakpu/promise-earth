import Image from "next/image";
import styles from "./AboutEmmanuel.module.css";

const AboutEmmanuel = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        {/* Image */}
        <div className={styles.imageWrapper}>
          <Image
            src="/images/team-1.jpg"
            alt="Emmanuel K. Benjamin"
            width={520}
            height={620}
            className={styles.image}
          />
        </div>

        {/* Content */}
        <div className={styles.content}>
          <h2 className={styles.heading}>
            <span className={styles.accent} /> About Emmanuel.
          </h2>

          <p>
            Emmanuel K. Benjamin is a dedicated entrepreneur and industry expert in mining and quarrying. 
            With a strong commitment to sustainable resource extraction and operational excellence, 
            Emmanuel has built a reputation for delivering high-quality materials and efficient project 
            management. His work supports infrastructure development and economic growth, combining 
            technical expertise with a passion for innovation in the extractive industry.
          </p>

          <p>
            We are a leading construction company with 25+ years of experience
            in the industry. We are dedicated to providing a full suite of
            high-quality construction services driven by modern technologies.
            From residential construction to shopping centers and government
            facilities, no job is too big or too small for us.
          </p>

          <p>
            Our trustworthy business practices, efficient work processes, and a
            huge performance capacity ensure our ability to deliver as promised.
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

export default AboutEmmanuel;