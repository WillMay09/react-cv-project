"use client";

import { useState } from "react";

export default function ResumePreview({ title, sectionData }) {
  console.log("Section Data :" + sectionData);
  return (
    <div className="flex flex-col w-full">
      <h1>{title}</h1>
      <ul className="bg-white border-black border-2 rounded-[1rem]">
        {/* 
        {sectionData.map((item) => (
          <li className="flex gap-1">
            <h5>{item.Title}: </h5>
            <p>{item.Value}</p>
          </li>
        ))}
        
         */}
      </ul>
    </div>
  );
}
