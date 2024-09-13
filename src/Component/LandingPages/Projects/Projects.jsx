import FullProjects from "./FullProjects";
import PreactiesProject from "./PreactiesProject";
import ProjectsBanner from "./ProjectsBanner";

export default function Projects() {
  return (
    <div className="w-full">
      <ProjectsBanner></ProjectsBanner>
      <div className="container mx-auto pb-7 flex justify-center items-center ">
        <div role="tablist" className="tabs w-full tabs-lifted">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab min-w-[120px]"
            aria-label="Full Projects"
            defaultChecked
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-md py-6 px-2 md:px-6"
          >
            <FullProjects></FullProjects>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab min-w-[150px]"
            aria-label="Single Pages"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-md py-6 px-2 md:px-6"
          >
            <PreactiesProject></PreactiesProject>
          </div>
        </div>
      </div>
    </div>
  );
}
