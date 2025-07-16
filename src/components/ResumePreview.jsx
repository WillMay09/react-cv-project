"use client";

import { features } from "process";
import { useState } from "react";

export default function ResumeHeading({ title, sectionData }) {
  console.log("Section Data :", JSON.stringify(sectionData, null, 2));
  return (
    <div className="flex flex-col w-full text-center">
      {sectionData.Name && sectionData.Name.trim() !== "" && (
        <h1 className="font-bold text-3xl">{sectionData.Name}</h1>
      )}
      <div className="flex flex-row justify-evenly border-t-2 border-black">
        <div className="flex-1 text-center">
          {sectionData.Number && sectionData.Number.trim() !== "" && (
            <p>{sectionData.Number}</p>
          )}
        </div>
        <div className="flex-1 text-center">
          {sectionData.Email && sectionData.Email.trim() !== "" && (
            <p>{sectionData.Email}</p>
          )}
        </div>
        <div className="flex-1 text-center">
          {sectionData.LinkedIn && sectionData.LinkedIn.trim() !== "" && (
            <p>{sectionData.LinkedIn}</p>
          )}
        </div>
      </div>
    </div>
  );

  //   <ul className="bg-white border-black border-2 rounded-[1rem]">
  // {Object.entries(sectionData).map(([key, value]) => (
  //     <li key={key} className="flex gap-1">
  //       <h5>{key} </h5>
  //       <p>{value}</p>
  //     </li>
  //   ))}
  // </ul>
}
