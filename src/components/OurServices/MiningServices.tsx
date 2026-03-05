import Image from "next/image";
import styles from "./MiningServices.module.css";

const services = [
  {
    title: "Surface Mining",
    description:
      "Promise Earth Mining Company offers a comprehensive Surface Mining as a Service (SMaaS) solution, providing a turnkey approach to extracting valuable minerals and resources from the earth's surface.",
    image: "/images/surface.jpg",
  },
  {
    title: "Underground Mining",
    description:
      "Underground mining as a service represents a transformative shift in the mining industry. We offer our expertise, equipment, and manpower to extract minerals from underground deposits on your behalf.",
    image: "/images/underground.jpg",
  },
  {
    title: "Exploration",
    description:
      "Exploration as a Service (EaaS) is a novel business model where we offer our exploration expertise and resources to other companies, typically junior miners or exploration-stage companies, on a contractual basis.",
    image: "/images/exploration.jpg",
  },
  {
    title: "Engineering and Design",
    description:
      "Engineering as a Service (EaaS) is a burgeoning business model where engineering expertise is offered as a service, rather than a product. Interestingly, our company, with its deep-rooted engineering capabilities and infrastructure, is well-positioned to provide you this service. We design and operate large-scale, complex systems like mine planning, layout e.t.c",
    image: "/images/engineering.jpg",
  },
  {
    title: "Environmental Management",
    description:
      "Mining, while essential for economic growth and development, undeniably carries environmental risks. At Promise Earth Mining, we recognize our responsibility to operate in harmony with the natural world. Our environmental services are integral to our operations, reflecting our commitment to sustainable mining practices.",
    image: "/images/environment.jpg",
  },
  {
    title: "Logistics and Supply Chain",
    description:
      "Logistics, the backbone of any operation, is particularly critical in the mining industry. We transport equipment, machinery, spare parts, and consumables to the mining site. We Handle oversized and heavy machinery like excavators, haul trucks, and drilling rigs. We ensure timely delivery of critical spare parts to minimize downtime. We also transport mined minerals...",
    image: "/images/logistics.jpg",
  },
];

export default function MiningServices() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.subtitle}>MINING SERVICES</p>

        <h2 className={styles.title}>Mineral Extraction</h2>

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