"use client";

import styles from "./ServicesSection.module.css";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    image: "/images/mining.png",
    title: "Mining",
    description:
      "We perform high-quality mining operations with modern equipment and expert personnel.",
    link: "#",
  },
  {
    image: "/images/quarry.png",
    title: "Quarrying",
    description:
      "We supply high-grade quarry materials for construction and infrastructure projects.",
    link: "#",
  },
  {
    image: "/images/excavation.png",
    title: "Excavation & Construction",
    description:
      "We provide reliable excavation and construction services for projects of all sizes.",
    link: "#",
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.section}>

      <div className={styles.container}>

        <div className={styles.grid}>

          {services.map((service, index) => (
            <div key={index} className={styles.card}>

              {/* IMAGE */}
              <Image
                src={service.image}
                alt={service.title}
                width={60}
                height={60}
                className={styles.image}
              />

              <h3 className={styles.title}>
                {service.title}
              </h3>

              <p className={styles.description}>
                {service.description}
              </p>

              <Link href={service.link} className={styles.learnMore}>
                LEARN MORE →
              </Link>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}