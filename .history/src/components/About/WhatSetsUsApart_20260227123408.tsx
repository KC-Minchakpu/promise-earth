import Image from "next/image";
import styles from "./WhatSetsUsApart.module.css";

const WhatSetsUsApart = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* LEFT CONTENT */}
        <div className={styles.textContent}>
          <h2 className={styles.heading}>
            <span className={styles.accent}></span>
            What sets us apart:
          </h2>

          <p>
            <span className={styles.bold}>Sustainable Practices:</span>{" "}
            We prioritize environmentally friendly practices throughout our
            mining and quarrying operations. This includes minimizing waste,
            land reclamation, and utilizing innovative technologies to reduce
            our impact.
          </p>

          <p>
            <span className={styles.bold}>Community Focus:</span>{" "}
            We believe in partnering with the communities where we operate. We
            are dedicated to creating local jobs, supporting local businesses,
            and contributing to the social and economic well-being of the
            region.
          </p>

          <p>
            <span className={styles.bold}>Quality Materials:</span>{" "}
            We are committed to providing high-quality aggregates, minerals,
            and other materials that meet the strictest standards. Our
            dedication to excellence ensures your projects have a strong
            foundation. Promise Earth isn&apos;t just about extracting resources,
            it&apos;s about leaving a lasting positive impact.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.imageWrapper}>
          <div className={styles.imageFrame}>
            <Image
              src="/images/Mining-3.webp"
              alt="Mining truck at quarry site"
              fill
              className={styles.image}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhatSetsUsApart;