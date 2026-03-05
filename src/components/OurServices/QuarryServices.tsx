import Image from "next/image";
import styles from "./MiningServices.module.css";

const services = [
  {
    title: "Material Supply",
    description:
      "We provide aggregates such as sand, gravel, and crushed stone, for construction projects, Dimension Stone, a cut and finished stone blocks or slabs for building and decorative purposes and Industrial Minerals like limestone, silica, or clay for industrial processes.",
    image: "/images/quarrying.jpg",
  },
  {
    title: "Support Services",
    description:
      "Promise Earth Mining and Quarry also provide Haulage and Transportation, transporting extracted materials to processing facilities or customer sites, Equipment and Machinery Rental, Environmental Management, Permitting and Licensings.",
    image: "/images/truck.jpg",
  },
  {
    title: "Mine & Quarry Management",
    description:
      "We identify potential mineral deposits through geological surveys and analysis, Conduct feasibility studies to assess the economic viability of a mining or quarrying project, and then develop detailed mine/quarry plans, including extraction methods, infrastructure...",
    image: "/images/manage.jpg",
  },
  {
    title: "Exploration & Feasibility Studies",
    description:
      "Promise Earth offers Quarry exploration and feasibility studies are critical steps in determining the viability of a quarry project. They involve a systematic investigation of a potential quarry site to assess its resource potential, economic feasibility, and environmental impact.",
    image: "/images/explore.jpeg",
  },
  {
    title: "Plant Design & Construction",
    description:
      "Remediation and reclamation are crucial steps in restoring contaminated or degraded land to a safe and usable condition. While traditionally associated with environmental cleanup, our company offer these services as part of our portfolio. We provide Site Assessment and Investigation.",
    image: "/images/plant.jpg",
  },
  {
    title: "Laboratory Services",
    description:
      "We offer pre-planned, rapid-deployment infrastructure solutions as a service in the event of an emergency. This service model leverages the company's expertise in design, procurement, logistics, and construction to provide critical infrastructure swiftly and efficiently during disasters.",
    image: "/images/lab3.jpg",
  },
];

export default function MiningServices() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.subtitle}>QUARRYING SERVICES</p>

        <h2 className={styles.title}>Extraction and Processing</h2>

        <p className={styles.description}>
          As a mining and quarry company we offer quarry operations as a service to clients, 
          rather than simply selling extracted materials. We optimize and develop production 
          processes in the construction, infrastructure and mining sectors. Our core Quarry 
          services include:
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