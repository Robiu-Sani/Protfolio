import BackendServices from "./BackendServices";
import FrontendServices from "./FrontendServices";
import ServicesBanner from "./ServicesBanner";
import UIUXDesign from "./UIUXDesign";

export default function Services() {
  return (
    <div>
      <ServicesBanner></ServicesBanner>
      <FrontendServices></FrontendServices>
      <UIUXDesign></UIUXDesign>
      <BackendServices></BackendServices>
    </div>
  );
}
