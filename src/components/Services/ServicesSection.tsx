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
    image: "/images/services-1.png",
  },
  {
    title: "Quarrying",
    description:
      "We provide building stone (granite, marble, etc.), gravel, sand, or slate. You can contact us for this service.",
    image: "/images/services-2.jpg",
  },
  {
    title: "Excavation & Construction",
    description:
      "Excavation is more than just removing dirt. It's the essential first step in many construction projects.",
    image: "/images/services-3.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>
            <span className={styles.accent}></span>
            We Deliver the Best Services <br /> in Mining & Construction.
          </h2>
          <p>
            Our team provides expert services in different fields of construction. With decades of 
            combined industry experience, we specialize in delivering safe, efficient, and high-quality 
            mining and construction solutions tailored to meet the unique needs of each project. 
            From large-scale excavation and quarrying operations to infrastructure development 
            and material supply, we are committed to excellence, sustainability, and precision 
            at every stage. Our skilled engineers, operators, and project managers work collaboratively 
            to ensure timely delivery, cost-effectiveness, and strict adherence to safety and 
            environmental standards.
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