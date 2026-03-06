import ProjectsBanner from "@/components/Projects/ProjectsBanner";
import ProjectsSection from "@/components/Projects/ProjectsSection";
import ProjectsCompletedSection from "@/components/Projects/ProjectsCompletedSection";

export default function ProjectsPage() {
  return (
    <>
      <ProjectsBanner />
      <ProjectsSection />
      <ProjectsCompletedSection />
    </>
  );
}