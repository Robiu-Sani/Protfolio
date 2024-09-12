import AboutBanner from "./AboutBanner";
import AboutInformetion from "./AboutInformetion";
import AddressComponent from "./AddressComponent";

export default function About() {
  return (
    <div className="w-full">
      <AboutBanner></AboutBanner>
      <AboutInformetion></AboutInformetion>
      <AddressComponent></AddressComponent>
    </div>
  );
}
