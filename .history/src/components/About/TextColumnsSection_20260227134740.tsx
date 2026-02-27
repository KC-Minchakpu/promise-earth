import styles from "./TextColumnsSection.module.css";

const TextColumnsSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Column 1 */}
        <div className={styles.column}>
          <h2 className={styles.heading}>
            <span className={styles.accent} /> Our Values
          </h2>

          <p>
            We believe that strong values are the foundation of every successful
            project. Integrity, transparency, and accountability guide our
            decisions at every stage of construction.
          </p>

          <p>
            By fostering collaboration and maintaining clear communication, we
            ensure that our clients remain informed and confident throughout the
            entire project lifecycle.
          </p>
        </div>

        {/* Column 2 */}
        <div className={styles.column}>
          <h2 className={styles.heading}>
            <span className={styles.accent} /> Our Approach
          </h2>

          <p>
            Our approach combines proven construction methods with modern
            technologies to deliver efficient, cost-effective solutions without
            compromising quality.
          </p>

          <p>
            From planning and design to execution and completion, our team is
            committed to meeting deadlines, exceeding expectations, and
            delivering lasting value.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TextColumnsSection;