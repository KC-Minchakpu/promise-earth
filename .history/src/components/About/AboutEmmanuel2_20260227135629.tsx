import styles from "./AboutEmmanuel2.module.css";

const AboutEmmanuel2 = () => {
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
            However, his ambitions extended beyond a single sector. He saw the potential for synergy 
            between oil and gas, mining and quarrying, and even the hospitality industry. His vision: 
            a diversified conglomerate that could leverage resources responsibly while creating a 
            sustainable ecosystem.
          </p>
          <p>
            This led to a bold move. Emmanuel left the comfort of his established career to start his 
            own mining and quarrying company. Through strategic acquisitions and a focus on responsible 
            sourcing, he transformed the company into a leader in sustainable mining practices. He 
            then made a seemingly unrelated move, envisioning the possibility of starting hotel chain 
            with prime locations near his mining and oil exploration sites.
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

export default AboutEmmanuel2;