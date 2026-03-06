import Image from "next/image";
import styles from "./SandstoneServices.module.css";

const services = [
  {
    title: "Sandstone Quarrying",
    description:
      "We extract high-quality sandstone directly from our quarries using advanced drilling, cutting, and controlled blasting techniques. Our quarry operations follow strict safety standards and efficient mining practices to ensure a consistent supply of durable natural stone for construction and industrial use.",
    image: "/images/sandstones.jpg",
  },
  {
    title: "Stone Cutting & Processing",
    description:
      "Large sandstone blocks are carefully cut, shaped, and processed using modern equipment to produce slabs, tiles, blocks, and other building stones. Our processing methods ensure precision, durability, and consistent quality suitable for both structural and architectural applications.",
    image: "/images/stonecutting.jpg",
  },
  {
    title: "Crushing & Aggregate Production",
    description:
      "Our crushing and screening systems transform raw sandstone into high-quality aggregates of various sizes. These materials are widely used in road construction, concrete production, foundations, and other infrastructure projects that require reliable and durable construction materials.",
    image: "/images/crushing.jpg",
  },
  {
    title: "Construction Material Supply",
    description:
      "We provide a reliable supply of sandstone materials including blocks, slabs, paving stones, gravel, and sand. Our products support a wide range of construction and infrastructure projects, ensuring builders and contractors have access to durable and high-quality materials.",
    image: "/images/construction-material.jpg",
  },
  {
    title: "Landscaping Stone Production",
    description:
      "We produce decorative sandstone products designed for landscaping and outdoor architectural projects. These materials are ideal for garden pathways, patios, retaining walls, and other outdoor features that combine natural beauty with long-lasting durability.",
    image: "/images/landscaping.jpg",
  },
  {
    title: "Material Transport & Logistics",
    description:
      "Our transport and logistics services ensure efficient delivery of sandstone materials to construction sites, contractors, and industrial clients. Using heavy-duty vehicles and a coordinated supply chain, we guarantee timely and reliable distribution of materials for projects of any scale.",
    image: "/images/logistics2.jpg",
  },
];

export default function SandstoneServices() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.subtitle}>SANDSTONE SERVICES</p>

        <h2 className={styles.title}>Aggregate Production</h2>

        <p className={styles.description}>
          Promise Earth mining provides range of services, from the extraction
          of minerals to the processing and distribution of the final products.
          Our Core Services include:
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