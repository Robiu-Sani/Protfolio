import AboutSection from "./AboutSection";
import Banner from "./Banner";
import SkillesSection from "./SkillesSection";

export default function Home() {
  return (
    <div className="w-full">
      <Banner></Banner>
      <AboutSection></AboutSection>
      <SkillesSection></SkillesSection>
    </div>
  );
}
