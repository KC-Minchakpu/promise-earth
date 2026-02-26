import Image from "next/image";
import Link from "next/link";
import styles from "./OurGoal.module.css";

interface ProjectItem {
  id: string;
  title: string;
  image: string;
  slug: string;
}

const projects: ProjectItem[] = [
  {
    id: "1",
    title: "Engineering Survey",
    image: "/images/project1.jpg",
    slug: "engineering-survey",
  },
  {
    id: "2",
    title: "Corporate Building",
    image: "/images/project2.jpg",
    slug: "corporate-building",
  },
  {
    id: "3",
    title: "Blueprint Planning",
    image: "/images/project3.jpg",
    slug: "blueprint-planning",
  },
  {
    id: "4",
    title: "Interior Architecture",
    image: "/images/project4.jpg",
    slug: "interior-architecture",
  },
  {
    id: "5",
    title: "Glass Tower Project",
    image: "/images/project5.jpg",
    slug: "glass-tower",
  },
  {
    id: "6",
    title: "Industrial Construction",
    image: "/images/project6.jpg",
    slug: "industrial-construction",
  },
];

export default function OurGoal() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <span className={styles.bar}></span>
          <h2>
            Our Main Goal Is to Deliver the <br /> Best Quality
            <span className={styles.dot}>.</span>
          </h2>
        </div>

        <Link href="/contact" className={styles.quote}>
          REQUEST A QUOTE
        </Link>
      </div>

      <p className={styles.subtitle}>
        We work hard to finish every project on schedule.
      </p>

      <div className={styles.grid}>
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.slug}`}
            className={styles.card}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className={styles.image}
            />
            <div className={styles.overlay}>
              <h3>{project.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
