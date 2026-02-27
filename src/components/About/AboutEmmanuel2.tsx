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
            <span className={styles.accent} /> Emmanuel Benjamin Today:
          </h2>

          <p>
            The skeptics were many. Yet, Emmanuel saw the hotels as a way to create vibrant 
            communities around resource extraction projects, fostering local economies and mitigating 
            environmental impact. He is planning to pioneer eco-friendly hospitality practices 
            within the chain, making it a leader in sustainable tourism.
          </p>

          <p>
            Today, Benjamin Emmanuel&apos;s diversified businesses is a global company in responsible 
            resource extraction and sustainable hospitality. He is a fondly called &quot;Pastor&quot; 
            because of his integrity, and advocacy for a future where resource development goes 
            hand-in-hand with environmental stewardship. His life and career serve 
            as a powerful inspiration, proving that business success and environmental responsibility 
            are not mutually exclusive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutEmmanuel2;