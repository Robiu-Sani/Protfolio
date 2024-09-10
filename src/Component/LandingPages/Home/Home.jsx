import AboutSection from "./AboutSection";
import Banner from "./Banner";
import ContactForm from "./ContactForm";
import ProjectSection from "./ProjectSection";
import ServicesSection from "./ServicesSection";
import SkillesSection from "./SkillesSection";

export default function Home() {
  return (
    <div className="w-full">
      <Banner></Banner>
      <AboutSection></AboutSection>
      <SkillesSection></SkillesSection>
      <ProjectSection></ProjectSection>
      <ServicesSection></ServicesSection>
      <ContactForm></ContactForm>
    </div>
  );
}
