"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* Background Image */}
      <Image
        src="/hero-building.jpg" 
        alt="Engineering Project"
        fill
        priority
        className={styles.backgroundImage}
      />

      {/* Overlay */}
      <div className={styles.overlay}></div>

      {/* Content */}
      <div className={styles.content}>
        <h1 className={styles.heading}>
          We Deliver High-Quality
          <br />
          Engineering Projects<span className={styles.highlight}>.</span>
        </h1>

        <div className={styles.buttons}>
          <Link href="/contact" className={styles.primaryBtn}>
            REQUEST A QUOTE
          </Link>

          <Link href="/about" className={styles.secondaryBtn}>
            LEARN MORE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;