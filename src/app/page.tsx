"use client";
import { useState } from "react";
import EditComponent from "../components/editSection";
import EditComponentWithCustomization from "../components/editSectionWithCustomization";

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
  return (
    <div className="h-[100vh] p-[5rem]">
      <div className="flex flex-col items-center w-full h-full border border-red-400">
        <h1 className="text-teal-300 mt-2 mb-4 text-2xl font-bold">
          My CV Builder
        </h1>
        <div className="flex h-full">
          <EditComponent
            title={"General Information"}
            features={generalInformation}
            sectionData={generalData}
            setSectionData={setGeneralData}
          />
          <EditComponent
            title={"Education Information"}
            features={educationInformation}
            sectionData={educationData}
            setSectionData={setEducationData}
          />
          <EditComponentWithCustomization
            title={"Experience Information"}
            features={experienceInformation}
            sectionData={experienceData}
            setSectionData={setExperienceData}
          />
        </div>
      </div>
    </div>
  );
}
