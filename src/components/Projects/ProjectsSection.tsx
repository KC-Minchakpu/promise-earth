"use client";

import Image from "next/image";
import styles from "./ProjectsSection.module.css";

interface Project {
  category: string;
  title: string;
  image: string;
}

const projects: Project[] = [
  {
    category: "Mining",
    title: "Gwagwalada Mining Project",
    image: "/images/project-1.jpeg",
  },
  {
    category: "Commercial",
    title: "Garage Center",
    image: "/images/project-2.jpg",
  },
];

export default function ProjectsSection() {
  return (
    <section className={styles.projectsSection}>
      <div className={styles.container}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className={styles.image}
              />
            </div>

            <div className={styles.textContent}>
              <span className={styles.category}>
                {project.category.toUpperCase()}
              </span>

              <h3 className={styles.title}>{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}