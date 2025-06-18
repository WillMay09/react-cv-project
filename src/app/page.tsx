"use client";

import Image from "next/image";
import EditSection from "../components/editSection";
import EditSectionWithButton from "../components/editSectionWithButton";
import { useState } from "react";
import ResumePreview from "../components/ResumePreview";
export default function Home() {
  let generalFeatures = [
    {
      Name: "Name",
      Type: "text",
    },
    {
      Name: "Email",
      Type: "email",
    },
    {
      Name: "Phone",
      Type: "tel",
    },
  ];
  let educationFeatures = [
    {
      Name: "School Name",
      Type: "text",
    },
    {
      Name: "Title Of Study",
      Type: "text",
    },
    {
      Name: "Date of Study",
      Type: "date",
    },
  ];

  let experienceFeatures = [
    {
      Name: "Title",
      Type: "text",
    },
    {
      Name: "Date",
      Type: "date",
    },
    {
      Name: "Company",
      Type: "text",
    },
    {
      Name: "Description",
      Type: "text",
    },
  ];
  //general info = object that stores all the inputs in the general information section
  const [generalInfo, setGeneralInfo] = useState({});

  const [experienceInfo, setExperienceInfo] = useState({});
  const [showResume, setShowResume] = useState(false);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 space-y-8">
      <h1 className="text-3xl font-bold text-teal-400">CV Builder</h1>
      <div className="flex flex-wrap w-full max-w-6xl gap-8">
        {/* <EditSection title="General Information" features={generalFeatures} />
        <EditSection
          title="Education Information"
          features={educationFeatures}
        /> */}

        {/* <EditSectionWithButton
          title="Experience"
          features={experienceFeatures}
        /> */}

        <div>
          <EditSection
            title="General Information"
            features={generalFeatures}
            sectionData={generalInfo}
            setSectionData={setGeneralInfo}
          />
          <button
            className="mt-4 bg-teal-500 text-white px-4 py-2 rounded"
            onClick={() => setShowResume(true)}
          >
            Generate Resume
          </button>
          <EditSectionWithButton
            title="Education Features"
            features={experienceFeatures}
            sectionData={experienceInfo}
            setSectionData={setExperienceInfo}
          />
        </div>
        <ResumePreview title="General Information" data={generalInfo} />
        <ResumePreview title="Experience Information" data={experienceInfo} />
      </div>
    </div>
  );
}
