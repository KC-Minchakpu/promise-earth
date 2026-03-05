import Image from "next/image";
import styles from "./ConstructionServices.module.css";

const services = [
  {
    title: "Infrastructure Development",
    description:
      "We offer comprehensive infrastructure development solutions on a service-based model. Instead of traditional project-based contracts, we provides a range of services, from planning and design to construction, maintenance, and operation. We are strategic partners to governments, corporations, and communities, driving sustainable growth and development.",
    image: "/images/infrastructure.jpg",
  },
  {
    title: "Site Preparation",
    description:
      "Site preparation is a critical initial phase of any construction project. It involves transforming raw land into a suitable platform for building construction. We provide: Site clearing, Grading and leveling, Excavation, Soil compaction, Drainage systems, Utility installation, Demolition, Soil testing and analysis. We help you lay a solid foundation for your projects.",
    image: "/images/siteprep.jpeg",
  },
  {
    title: "Facility Construction",
    description:
      "We offer comprehensive facility construction services as a service rather than a one-time project. We provide comprehensive Services, customization, risk management, technology integration, performance-based Contracts. We also undertake modular construction, design-build, Construction Management, where we Provide project management services...",
    image: "/images/facility.jpg",
  },
  {
    title: "Mine Shaft & Tunnel Construction",
    description:
      "Promise Earth offers Mine shaft and tunnel construction as a specialized service. We possess the expertise, equipment, and resources to execute these complex underground projects. We undertake Feasibility studies and site investigations, Design and engineering, Permitting and regulatory compliance, Shaft sinking and tunnel boring, Ground support and stabilization, Ventilation and air quality control, Water management, Equipment and machinery, Project management, Safety and risk management.",
    image: "/images/shaft.jpg",
  },
  {
    title: "Remediation and Reclamation",
    description:
      "Remediation and reclamation are crucial steps in restoring contaminated or degraded land to a safe and usable condition. While traditionally associated with environmental cleanup, our company offer these services as part of our portfolio. We provide Site Assessment and Investigation, Soil and Groundwater Remediation, Land Reclamation, Infrastructure Development, Monitoring and Compliance. By offering remediation and reclamation services, we play a vital role in environmental protection and sustainable development.",
    image: "/images/reclamation.jpg",
  },
  {
    title: "Emergency Response",
    description:
      "We offer pre-planned, rapid-deployment infrastructure solutions as a service in the event of an emergency. This service model leverages the company's expertise in design, procurement, logistics, and construction to provide critical infrastructure swiftly and efficiently during disasters. By offering Emergency Response Infrastructure, we position our company as essential partner in disaster recovery and resilience, while creating new revenue streams and expanding our market reach.",
    image: "/images/emergency.jpg",
  },
];

export default function ConstructionServices() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.subtitle}>CONSTRUCTION SERVICES</p>

        <h2 className={styles.title}>Infrastructural Development</h2>

        <p className={styles.description}>
       While primarily known for extracting valuable minerals, we are also heavily involved in 
       construction. These services are essential for establishing and maintaining mining operations, 
       as well as for fulfilling our environmental responsibilities. Our core construction 
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