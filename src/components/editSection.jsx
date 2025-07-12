"use client";
import { useState } from "react";
export default function EditComponent({
  title,
  features,
  sectionData,
  setSectionData,
}) {
  const handleUpdate = (userInput, fieldName) => {
    const newData = { Title: fieldName, Value: userInput };

    setSectionData({ ...sectionData, newData });
    console.log(sectionData);
  };

  return (
    <div className="text-gray-400 bg-gray-950 rounded-[1rem] px-3">
      <h2 className="text-teal-300 text-center pb-1 pt-4 ">{title}</h2>
      <ul className="flex flex-col gap-4 p-4">
        {features.map((feature) => (
          <li key={feature.Title}>
            <label className="text-sm">{feature.Title}</label>
            <input
              type={feature.Type}
              name={feature.Title}
              className="rounded-md bg-slate-700 border-2 w-full min-h-8 px-2"
              value={sectionData[feature.Title || ""]}
              onChange={(e) => handleUpdate(e.target.value, feature.Name)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
