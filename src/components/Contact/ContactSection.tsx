"use client";

import styles from "./ContactSection.module.css";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* LEFT CONTACT CARD */}
        <div className={styles.infoCard}>
          <div className={styles.block}>
            <h3>Address</h3>
            <p>35 Park Ave, New York, NY 10016</p>
          </div>

          <div className={styles.block}>
            <h3>Phone</h3>
            <p>+1 (234) 567 89 00</p>
            <p>+1 (234) 567 89 01</p>
          </div>

          <div className={styles.block}>
            <h3>E-mail</h3>
            <p>greathouse@email.com</p>
            <p>hr-greathouse@email.com</p>
          </div>

          <div className={styles.socials}>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
            </div>
        </div>

        {/* GOOGLE MAP */}
        <div className={styles.mapWrapper}>
          <iframe
            src="https://maps.google.com/maps?q=35%20Park%20Ave%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            title="Map showing the location of our office at Gwagwalada"
            className={styles.map}
/>
        </div>

      </div>
    </section>
  );
}