import Image from "next/image";
import styles from "./TeamSection.module.css";

const TeamSection = () => {
  return (
    <section className={styles.team}>
      {/* Header */}
      <div className={styles.header}>
        <div>
          <h2 className={styles.heading}>
            <span className={styles.accent} />
            Great Results Depend on a
            <br />
            Professional Team.
          </h2>
          <p className={styles.subheading}>
           Meet our experienced managers, engineers, and constructors who combine expertise, 
          innovation, and dedication to deliver outstanding results. With years of industry 
          knowledge and a commitment to excellence, our team works collaboratively to ensure 
          every project is completed efficiently, safely, and to the highest professional standards. 
          From planning and design to execution and final delivery, we bring precision, reliability, 
          and a passion for quality to everything we do.
          </p>
        </div>

        <div className={styles.vacancies}>
          <div className={styles.vacancyIcon}>
            <Image
              src="/images/helmet-circle.jpg"
              alt="Vacancies"
              width={70}
              height={70}
            />
          </div>
          <div>
            <h4>Check our vacancies!</h4>
            <p>You can work with us.</p>
            <a href="#" className={styles.link}>
              VIEW VACANCIES
            </a>
          </div>
        </div>
      </div>

      {/* Team Grid */}
      <div className={styles.grid}>
        <div className={styles.card}>
          <Image
            src="/images/team-1.jpg"
            alt="Emmanuel K. Benjamin"
            width={400}
            height={480}
          />
          <h3>Emmanuel K. Benjamin</h3>
          <span>CEO / Project Manager</span>
        </div>

        <div className={styles.card}>
          <Image
            src="/images/team-2.jpg"
            alt="Mollie Boone"
            width={400}
            height={480}
          />
          <h3>Mollie Boone</h3>
          <span>Chief Executive Officer</span>
        </div>

        <div className={styles.card}>
          <Image
            src="/images/team-3.jpg"
            alt="Andrew Norman"
            width={400}
            height={480}
          />
          <h3>Andrew Norman</h3>
          <span>Interior Design Project Manager, VP</span>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;