import styles from "./TextColumnsSection.module.css";

const TextColumnsSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Column 1 */}
        <div className={styles.column}>
          <h2 className={styles.heading}>
            <span className={styles.accent} /> Building a Diversified Empire:
          </h2>

          <p>
            Emmanuel&apos;s career began at a mining and quarrying company. He quickly rose through the 
            ranks, impressing his superiors with his ability to balance efficient extraction with 
            stringent environmental protocols. Recognizing the crucial role of sustainable practices, 
            Emmanuel spearheaded the development of clean drilling technologies, a move that garnered 
            him industry-wide acclaim.
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