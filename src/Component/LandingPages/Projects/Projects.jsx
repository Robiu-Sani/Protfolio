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
            className="tab"
            aria-label="Full Projects"
            defaultChecked
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-md p-6"
          >
            Tab content 1
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Preactiesing Pages"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-md p-6"
          >
            Tab content 2
          </div>
        </div>
      </div>
    </div>
  );
}
