"use client";
import { useState } from "react";

import EditComponent from "../components/editSection";
import EditComponentWithCustomization from "../components/editSectionWithCustomization";
import ResumePreview from "../components/ResumePreview";
export default function Home() {
  //general information data

  let generalInformation = [
    { Title: "Full Name", Type: "text" },
    { Title: "Skill", Type: "text" },
    { Title: "Email", Type: "email" },
    { Title: "Number", Type: "tel" },
  ];

  let educationInformation = [
    { Title: "School", Type: "text" },
    { Title: "Degree", Type: "text" },
    { Title: "startDate", Type: "date" },
    { Title: "endDate", Type: "date" },
  ];

  let experienceInformation = [
    { Title: "Job Position", Type: "text" },
    { Title: "Company", Type: "text" },
    { Title: "startDate", Type: "date" },
    { Title: "endDate", Type: "date" },
  ];
  const [generalData, setGeneralData] = useState({});
  const [educationData, setEducationData] = useState({});
  const [experienceData, setExperienceData] = useState({});
  const [activeState, setActiveState] = useState(null)//controls which one is open

  return (
    <div className="h-[100vh] p-[5rem]">
      <div className="flex flex-col items-center px-4 w-full h-full border border-red-400">
        <h1 className="text-teal-300 mt-2 mb-4 text-2xl font-bold">
          My CV Builder
        </h1>
        <div className="flex flex-row items-center w-full h-full gap-2">
          <div className="flex-col gap-[1rem] h-full">
            <EditComponent
              title={"General Information"}
              features={generalInformation}
              sectionData={generalData}
              setSectionData={setGeneralData}
              activeState={activeState}
              setActiveState={setActiveState}
            />
            <EditComponent
              title={"Education Information"}
              features={educationInformation}
              sectionData={educationData}
              setSectionData={setEducationData}
              activeState={activeState}
              setActiveState={setActiveState}
            />
            <EditComponentWithCustomization
              title={"Experience Information"}
              features={experienceInformation}
              sectionData={experienceData}
              setSectionData={setExperienceData}
              activeState={activeState}
              setActiveState={setActiveState}
            />
          </div>

          <div>
            <ResumePreview
              title={"General Information"}
              sectionData={generalData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
