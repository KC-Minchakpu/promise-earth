"use client";

import Image from "next/image";
import styles from "./WhyChooseUs.module.css";

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "Sustainable Practices",
    description:
      "We prioritize environmentally friendly practices throughout our mining and quarrying operations.",
  },
  {
    title: "Community Focus",
    description:
      "We believe in partnering with the communities where we operate. We are dedicated to creating local jobs and supporting long-term development.",
  },
  {
    title: "Quality Materials",
    description:
      "We are committed to providing high-quality aggregates, minerals, and other materials that meet the strictest standards.",
  },
  {
    title: "Innovation",
    description:
      "We continuously explore new technologies and methods to reduce our environmental footprint and improve efficiency.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      {/* Left Image */}
      <div className={styles.imageContainer}>
        <Image
          src="/images/about-3.jpg"
          alt="Mining Site"
          fill
          className={styles.image}
        />
      </div>

      {/* Right Content */}
      <div className={styles.content}>
        <div className={styles.inner}>
          <h2>
            <span className={styles.accent}></span>
            Why Choose Us
          </h2>

          <p className={styles.intro}>
            We deliver reliable mining and construction solutions backed by
            experience, responsibility, and innovation.
          </p>

          <div className={styles.grid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.card}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}