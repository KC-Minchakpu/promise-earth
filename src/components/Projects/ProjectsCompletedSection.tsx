import Image from "next/image";
import styles from "./ProjectsCompletedSection.module.css";

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Stevenson House Remodeling",
    category: "RESIDENTIAL",
    image: "/project1.jpg",
  },
  {
    id: 2,
    title: "Neal Complex",
    category: "COMMERCIAL",
    image: "/project2.jpg",
  },
  {
    id: 3,
    title: "Seaside House",
    category: "RESIDENTIAL",
    image: "/project3.jpg",
  },
  {
    id: 4,
    title: "Hilltop Residence",
    category: "RESIDENTIAL",
    image: "/project4.jpg",
  },
  {
    id: 5,
    title: "Metro Office Plaza",
    category: "COMMERCIAL",
    image: "/project5.jpg",
  },
  {
    id: 6,
    title: "Lakeview Villa",
    category: "RESIDENTIAL",
    image: "/project6.jpg",
  },
  {
    id: 7,
    title: "Greenwood Apartments",
    category: "COMMERCIAL",
    image: "/project7.jpg",
  },
  {
    id: 8,
    title: "Palm Estate",
    category: "RESIDENTIAL",
    image: "/project8.jpg",
  },
  {
    id: 9,
    title: "City Mall Expansion",
    category: "COMMERCIAL",
    image: "/project9.jpg",
  },
];

export default function ProjectsCompletedSection() {
  return (
    <section className={styles.projectsSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.card}>
              
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={styles.image}
                />
              </div>

              <div className={styles.cardContent}>
                <p className={styles.category}>{project.category}</p>
                <h3 className={styles.title}>{project.title}</h3>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}