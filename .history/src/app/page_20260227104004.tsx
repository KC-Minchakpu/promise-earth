import AboutUsSection from "@/components/About/AboutUsSection";
import Hero from "@/components/Hero/Hero";
import OurGoal from "@/components/OurGoal/OurGoal";
import GetQuoteSection from "@/components/Services/GetQuoteSection";
import ServicesSection from "@/components/Services/ServicesSection";
import TestimonialSlider from "@/components/Services/TestimonialSlider";
import TeamSection from "@/components/TeamSection/TeamSection";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
   <>
    <Hero />
    <AboutUsSection />
    <ServicesSection />
    <WhyChooseUs />
    <TeamSection />
    <OurGoal />
    <GetQuoteSection />
    <TestimonialSlider />
  </>
  );
}
