"use client";

import Image from "next/image";
import styles from "./ServicesSection.module.css";

interface Service {
  title: string;
  description: string;
  image: string;
  variant: "dark" | "light";
}

const services: Service[] = [
  // Top Dark Section
  {
    title: "Commercial",
    description:
      "We perform high-quality commercial projects of any complexity.",
    image: "/images/commercial.jpg",
    variant: "dark",
  },
  {
    title: "Residential",
    description:
      "We are proud to build dream houses for our community.",
    image: "/images/residential.jpg",
    variant: "dark",
  },
  {
    title: "Interiors",
    description:
      "Need a unique interior design? We can turn any idea into reality.",
    image: "/images/interiors.jpg",
    variant: "dark",
  },

  // Bottom Light Section
  {
    title: "Mining",
    description:
      "Nigeria boasts a wealth of mineral resources, but its mining industry contributes a relatively small portion to the overall economy.",
    image: "/images/mining.jpg",
    variant: "light",
  },
  {
    title: "Quarrying",
    description:
      "We provide building stone (granite, marble, etc.), gravel, sand, or slate. You can contact us for this service.",
    image: "/images/quarrying.jpg",
    variant: "light",
  },
  {
    title: "Excavation & Construction",
    description:
      "Excavation is more than just removing dirt. It's the essential first step in many construction projects.",
    image: "/images/excavation.jpg",
    variant: "light",
  },
];

export default function ServicesSection() {
  const darkServices = services.filter((s) => s.variant === "dark");
  const lightServices = services.filter((s) => s.variant === "light");

  return (
    <section className={styles.wrapper}>
      {/* Top Section */}
      <div className={styles.topSection}>
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
          {darkServices.map((service, index) => (
            <div key={index} className={styles.darkCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
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

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <div className={styles.grid}>
          {lightServices.map((service, index) => (
            <div key={index} className={styles.lightCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.lightContent}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}