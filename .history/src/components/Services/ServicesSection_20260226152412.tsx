"use client";

import styles from "./ServicesSection.module.css";
import Link from "next/link";
import {
  Building2,
  Home,
  Armchair,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Commercial",
    description:
      "We perform high-quality commercial projects of any complexity.",
    link: "#",
  },
  {
    icon: Home,
    title: "Residential",
    description:
      "We are proud to build dream houses for our community.",
    link: "#",
  },
  {
    icon: Armchair,
    title: "Interiors",
    description:
      "Need a unique interior design? We can turn any idea into reality.",
    link: "#",
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.section}>

      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>

          <div>
            <h2 className={styles.title}>
              <span className={styles.bar}></span>
              Our mission is to be a leader in the mining and quarry industry<span className={styles.dot}>.</span>
            </h2>

            <p className={styles.subtitle}>
              Our team provides expert services in different fields of construction.
            </p>
          </div>

          <Link href="#" className={styles.viewAll}>
            VIEW ALL SECTORS
          </Link>

        </div>


        {/* Cards */}
        <div className={styles.grid}>

          {services.map((service, index) => {

            const Icon = service.icon;

            return (
              <div key={index} className={styles.card}>

                <Icon className={styles.icon} />

                <h3 className={styles.cardTitle}>
                  {service.title}
                </h3>

                <p className={styles.cardDescription}>
                  {service.description}
                </p>

                <Link href={service.link} className={styles.learnMore}>
                  LEARN MORE →
                </Link>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}