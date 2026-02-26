"use client";

import Image from "next/image";
import styles from "./ServicesSection.module.css";

interface Service {
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
    {
    title: "Mining",
    description:
      "Nigeria boasts a wealth of mineral resources, but its mining industry contributes a relatively small portion to the overall economy.",
    image: "/images/mining.jpg",
  },
  {
    title: "Quarrying",
    description:
      "We provide building stone (granite, marble, etc.), gravel, sand, or slate. You can contact us for this service.",
    image: "/images/quarrying.jpg",
  },
  {
    title: "Excavation & Construction",
    description:
      "Excavation is more than just removing dirt. It's the essential first step in many construction projects.",
    image: "/images/excavation.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>
            <span className={styles.accent}></span>
            We Deliver the Best Services in Different Sectors.
          </h2>
          <p>
            Our team provides expert services in different fields of
            construction.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className={styles.image}
                />
              </div>

              <div className={styles.content}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#" className={styles.learnMore}>
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}