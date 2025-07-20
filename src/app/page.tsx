"use client";
import { useState } from "react";

import EditComponent from "../components/editSection";
import EditComponentWithCustomization from "../components/editSectionWithCustomization";
import ResumeBody from "../components/ResumeBodyEducation";
import ResumeHeading from "../components/ResumePreview";
import resumeBodyCustom from "../components/ResumeBodyCustom";
import ResumeBodyCustom from "../components/ResumeBodyCustom";
export default function Home() {
  //general information data

  let generalInformation = [
    { Title: "Name", Type: "text" },
    { Title: "Number", Type: "tel" },
    { Title: "Email", Type: "email" },
    { Title: "LinkedIn", Type: "text" },
  ];

  let educationInformation = [
    { Title: "School", Type: "text" },
    { Title: "Degree", Type: "text" },
    { Title: "Location", Type: "text" },
    { Title: "startDate", Type: "date" },
  ];

  let experienceInformation = [
    { Title: "jobPosition", Type: "text" },
    { Title: "company", Type: "text" },
    { Title: "startDate", Type: "date" },
    { Title: "endDate", Type: "date" },
    { Title: "description", Type: "textArea" },
  ];
  const [generalData, setGeneralData] = useState({});
  const [educationData, setEducationData] = useState({});
  const [experienceData, setExperienceData] = useState([
    {
      jobTitle: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);
  const [activeState, setActiveState] = useState(null); //controls which one is open

  return (
    <div className="h-[100vh] p-[5rem]">
      <div className="flex flex-col items-center px-4 w-full h-full border border-red-400">
        <h1 className="text-teal-300 mt-2 mb-4 text-2xl font-bold">
          My CV Builder
        </h1>
        <div className="flex flex-row items-center w-full h-full gap-2">
          <div className="flex-col gap-[1rem] h-full w-1/2">
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
              title={"Experience"}
              features={experienceInformation}
              sectionData={experienceData}
              setSectionData={setExperienceData}
              activeState={activeState}
              setActiveState={setActiveState}
            />
          </div>

          <div className="w-1/2 h-full border-2 flex-col gap-4 border-black p-10">
            <ResumeHeading
              title={"General Information"}
              sectionData={generalData}
            />
            <ResumeBody
              title={"Eduction Information"}
              sectionData={educationData}
            />
            <ResumeBodyCustom
              title={"Experience Information"}
              sectionData={experienceData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
