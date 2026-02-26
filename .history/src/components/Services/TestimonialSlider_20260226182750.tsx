// TestimonialSlider.tsx
"use client";

import { useState } from "react";
import styles from "./TestimonialSlider.module.css";

type Testimonial = {
  name: string;
  text: string;
  date: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Jessica Peterson",
    text:
      "We have been cooperating with this company for a long time and order the construction of various commercial facilities quite often. This is a reliable contractor and a team of real professionals. For 10 years of cooperation, we have never encountered a violation of agreements.",
    date: "December 15, 2024",
  },
  {
    name: "Daniel Williams",
    text:
      "Thanks to Great House, we have moved to our new home six months ago. We hesitated for a long time when choosing a contractor, as we wanted a non-standard design project. Great House specialists have won our trust and have come up with improvements that are really useful and convenient.",
    date: "March 03, 2024",
  },
  {
    name: "Sophia Brown",
    text:
      "Professional approach, transparent pricing, and excellent communication throughout the entire project. Highly recommended!",
    date: "January 10, 2025",
  },
  {
    name: "Jessica Peterson",
    text:
      "We have been cooperating with this company for a long time and order the construction of various commercial facilities quite often. This is a reliable contractor and a team of real professionals. For 10 years of cooperation, we have never encountered a violation of agreements.",
    date: "December 15, 2024",
  },
  {
    name: "Daniel Williams",
    text:
      "Thanks to Great House, we have moved to our new home six months ago. We hesitated for a long time when choosing a contractor, as we wanted a non-standard design project. Great House specialists have won our trust and have come up with improvements that are really useful and convenient.",
    date: "March 03, 2024",
  },
  {
    name: "Sophia Brown",
    text:
      "Professional approach, transparent pricing, and excellent communication throughout the entire project. Highly recommended!",
    date: "January 10, 2025",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  };

  return (
    <section className={styles.wrapper}>
      <button className={styles.arrowLeft} onClick={prev} aria-label="Previous testimonial">
        ‹
      </button>

      <div className={styles.viewport}>
        {/* Apply position class instead of inline styles */}
        <div className={`${styles.track} ${styles[`pos${index}`]}`}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.quoteMark}>“</div>
              <h3 className={styles.name}>{t.name}</h3>
              <p className={styles.text}>{t.text}</p>
              <span className={styles.date}>{t.date}</span>
            </div>
          ))}
        </div>
      </div>

      <button className={styles.arrowRight} onClick={next} aria-label="Next testimonial">
        ›
      </button>
    </section>
  );
}
