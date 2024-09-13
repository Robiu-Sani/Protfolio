import AboutBanner from "./AboutBanner";
import AboutInformetion from "./AboutInformetion";
import AddressComponent from "./AddressComponent";
import EducationJourney from "./EducationJourney";
import VisionAndGoalsSection from "./VisionAndGoalsSection";

export default function About() {
  return (
    <div className="w-full">
      <AboutBanner></AboutBanner>
      <EducationJourney></EducationJourney>
      <VisionAndGoalsSection></VisionAndGoalsSection>
      <AddressComponent></AddressComponent>
      <AboutInformetion></AboutInformetion>
    </div>
  );
}
