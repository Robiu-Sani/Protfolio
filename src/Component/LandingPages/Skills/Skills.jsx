import BackendSkillsDetails from "./BackendSkillsDetails";
import FrontendSkillsDetails from "./FrontendSkillsDetails";
import SkillsBanner from "./SkillsBanner";
import ToolsSkillsDetails from "./ToolsSkillsDetails";

export default function Skills() {
  return (
    <div>
      <SkillsBanner></SkillsBanner>
      <FrontendSkillsDetails></FrontendSkillsDetails>
      <BackendSkillsDetails></BackendSkillsDetails>
      <ToolsSkillsDetails></ToolsSkillsDetails>
    </div>
  );
}
