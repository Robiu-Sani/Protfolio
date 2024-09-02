import AboutSection from "./AboutSection";
import Banner from "./Banner";
import ProjectSection from "./ProjectSection";
import SkillesSection from "./SkillesSection";

export default function Home() {
  return (
    <div className="w-full">
      <Banner></Banner>
      <AboutSection></AboutSection>
      <SkillesSection></SkillesSection>
      <ProjectSection></ProjectSection>
    </div>
  );
}
