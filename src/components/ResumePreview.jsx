"use client";

import { features } from "process";
import { useState } from "react";

export default function ResumePreview({ title, sectionData }) {
  console.log("Section Data :", JSON.stringify(sectionData, null, 2));
  return (
    <div className="flex flex-col w-full">
      <h1>{title}</h1>
      <ul className="bg-white border-black border-2 rounded-[1rem]">
        {Object.entries(sectionData).map(([key, value]) => (
          <li key={key} className="flex gap-1">
            <h5>{key} </h5>
            <p>{value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
