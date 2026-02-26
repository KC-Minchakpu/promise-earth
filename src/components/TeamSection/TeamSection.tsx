import Image from "next/image";
import styles from "./TeamSection.module.css";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const team: TeamMember[] = [
  {
    name: "Emmanuel K. Benjamin",
    role: "CEO/Project Manager",
    image: "/images/team-1.jpg",
  },
  {
    name: "Mollie Boone",
    role: "Secretary/Office Manager",
    image: "/images/team-2.jpg",
  },
  {
    name: "Andrew Norman",
    role: "Site Manager",
    image: "/images/team-3.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <span className={styles.accentBar}></span>
            <h2>
              Great Results Depend on a <br />
              <span>Professional Team.</span>
            </h2>
          </div>

          <div className={styles.vacancyBox}>
            <div className={styles.vacancyImage}>
              <Image
                src="/images/vacancy.jpg"
                alt="Vacancy"
                fill
                className={styles.roundImage}
              />
            </div>
            <div>
              <h4>Check our vacancies!</h4>
              <p>You can work with us.</p>
              <a href="#">VIEW VACANCIES</a>
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <p className={styles.subtitle}>
          Meet our experienced managers, engineers, and constructors who combine expertise, 
          innovation, and dedication to deliver outstanding results. With years of industry 
          knowledge and a commitment to excellence, our team works collaboratively to ensure 
          every project is completed efficiently, safely, and to the highest professional standards. 
          From planning and design to execution and final delivery, we bring precision, reliability, 
          and a passion for quality to everything we do.
        </p>

        {/* Team Grid */}
        <div className={styles.grid}>
          {team.map((member, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className={styles.image}
                />
              </div>

              <div className={styles.cardContent}>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}