import Image from "next/image";
import styles from "./MiningServices.module.css";

const services = [
  {
    title: "Rock Excavation and Blasting",
    description:
      "In areas where hard rock formations prevent conventional digging, Promise Earth provides rock excavation and controlled blasting services. Using specialized equipment and safe blasting techniques, we efficiently break and remove rock to clear the way for mining, road construction, and large infrastructure developments.",
    image: "/images/blasting.jpg",
  },
  {
    title: "Quarry Material Extraction",
    description:
      "As part of our excavation services, Promise Earth also specializes in quarry material extraction. We excavate and supply high-quality materials such as granite, limestone, sand, gravel, and laterite for construction and road development. Our quarry operations ensure consistent material quality to meet the demands of modern infrastructure projects.",
    image: "/images/excavator.jpg",
  },
  {
    title: "Bulk Earthworks & Excavation",
    description:
      "Promise Earth handles large-scale earthmoving projects involving the removal and transportation of significant volumes of soil and rock. Our bulk excavation services support major infrastructure projects such as highways, industrial developments, and mining operations. With powerful machinery and experienced operators, we ensure efficient and timely project execution.",
    image: "/images/earthwork.jpg",
  },
  {
    title: "Foundation Excavation",
    description:
      "Promise Earth specializes in foundation excavation for residential, commercial, and industrial structures. Our team carefully excavates and prepares the ground to create strong and stable foundations for buildings, bridges, and other infrastructure. We ensure accurate digging, proper soil removal, and site leveling to support durable and long-lasting construction projects.",
    image: "/images/foundation.jpg",
  },
  {
    title: "Trenching and Utility Excavation",
    description:
      "We provide professional trenching services for the installation of underground utilities such as water pipelines, drainage systems, electrical cables, and fiber-optic networks. Promise Earth uses precision excavation techniques to create trenches that meet required depths and safety standards, ensuring that utility infrastructure is installed securely and efficiently.",
    image: "/images/trench.jpg",
  },
  {
    title: "Site Preparation & Land Clearing",
    description:
      "Promise Earth offers comprehensive site preparation and land clearing services to prepare land for construction or mining operations. Our team removes trees, vegetation, rocks, and debris while leveling and grading the terrain to create a safe and stable surface for development. This service ensures that projects begin on properly prepared ground, reducing delays and improving construction efficiency.",
    image: "/images/land2.jpg",
  },
];

export default function MiningServices() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.subtitle}>EXCAVATION SERVICES</p>

        <h2 className={styles.title}>Precision, Safety, and Sustainability</h2>

        <p className={styles.description}>
          At Promise Earth, excavation is at the heart of our mining operations. It is the foundational step in accessing valuable mineral resources that support industries and economies around the world. Guided by our core values—responsibility, innovation, and respect for the planet—we carry out excavation with a strong focus on efficiency, safety, and environmental stewardship.
        </p>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className={styles.image}
                />
              </div>

              <div className={styles.cardContent}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}