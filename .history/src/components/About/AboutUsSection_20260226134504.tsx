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
            src="/images/about-1.png" 
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
          <h2 className={styles.heading}>
            We are committed to responsible extraction of the Earth&apos;s resources
          </h2>
          <p className={styles.description}>
            We prioritize environmentally friendly practices throughout our mining and quarrying operations. This includes minimizing waste, land reclamation, and utilizing innovative technologies to reduce our impact.
          </p>
          <p className={styles.description}>
            We believe in partnering with the communities where we operate. We are dedicated to creating local jobs, supporting local businesses, and contributing to the social and economic well-being of the region.
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