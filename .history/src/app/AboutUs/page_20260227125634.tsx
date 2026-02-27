import AboutHero from "@/components/About/AboutHero";
import AboutSection from "@/components/About/AboutSection";
import CallToAction from "@/components/About/CallToAction";
import MissionSection from "@/components/About/MissionSection";
import WhatSetsUsApart from "@/components/About/WhatSetsUsApart";


export default function AboutUsPage() {
  return (
    <>
      <AboutHero />
      <AboutSection />
      <WhatSetsUsApart />
      <MissionSection />
      <CallToAction />
    </>
  );
}
