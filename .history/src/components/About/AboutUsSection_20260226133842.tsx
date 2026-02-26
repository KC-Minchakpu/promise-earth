// components/AboutUsSection.tsx
"use client";

import Image from "next/image";
import styles from "./AboutUsSection.module.css";

const AboutUsSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        {/* Left Image */}
        <div className={styles.imageWrapper}>
          <Image
            src="/about-1.png" 
            alt="Earth Moving Vehicle"
            width={400}
            height={400}
            className={styles.image}
          />
        </div>

        {/* Right Content */}
        <div className={styles.content}>
          <h2 className={styles.heading}>
            <span className={styles.highlight}>|</span> About Us.
          </h2>
          <p className={styles.description}>
            We offer residential and commercial construction services throughout the USA.
          </p>
          <p className={styles.description}>
            We are a leading construction company with 30+ years of experience in the industry. We are dedicated to providing the highest quality construction services to our customers meeting their special needs on schedule and within their budgets. Client satisfaction is always our first priority.
          </p>
          <p className={styles.description}>
            We are engaged in construction of industrial, residential, commercial, healthcare, and other types of buildings.
          </p>

          {/* Stats */}
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>3000+</span>
              <span className={styles.statLabel}>Satisfied clients</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>60k+</span>
              <span className={styles.statLabel}>Sq ft built</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>25</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;