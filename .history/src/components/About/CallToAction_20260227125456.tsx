import styles from "./CallToAction.module.css";

const CallToAction = () => {
  return (
    <section className={styles.cta}>
      <h2 className={styles.heading}>
        Contact Us to Specify Your Next
        <br />
        Project Details Right Now!
      </h2>

      <button className={styles.button}>
        REQUEST A QUOTE
      </button>
    </section>
  );
};

export default CallToAction;