"use client";

import { useState } from "react";
import CustomizeSectionModal from "./featureModal";
export default function EditSectionWithButton({
  title,
  features,
  sectionData,
  setSectionData,
}) {
  //intial value is set to features
  //fields = an array describing the fields the user can fill out
  const [fields, setFields] = useState(features);
  //controls whether or no the customize model shows
  const [showModal, setShowModal] = useState(false);

  //add a new input field, updates the fields by creating a new field object
  //and 
  // const handleAddField = () => {
  //   const newField = { Name: `Field ${fields.length + 1}`, Type: "text" };
  //   //need to repopulate the whole array everytime in order for react to detect a change
  //   setFields([...fields, newField]);
  // };
  //filters through the fields and filters out the one the user selected
  const handleDeleteField = (indexToDelete) => {
    setFields(fields.filter((_, index) => index !== indexToDelete));
  };

  //updates section data for a given field name when the user inputs something
  const handleChange = (e, field) => {
    setSectionData({ ...sectionData, [field]: e.target.value });
  };
  return (
    // Give the user the ability to choose what kind of feature they want to add
    <div className="bg-gray-900 text-gray-400 flex flex-col items-center justify-center gap-4 p-6 rounded-[1rem]">
      <h2 className="text-teal-300">{title}</h2>
      <ul className="flex flex-col justify-center items-center gap-2 ">
        {/* renders each field in the fields array of objects */}
        {fields.map((feature, index) => (
          <li
            key={`${feature.Name}-${index}`}
            className="flex flex-col justify-center items-center group gap-2"
          >
            <label className="w-full max-w-sm text-center">{feature.Name}</label>

            <div className="relative w-full max-w-sm">
              <input
                className="bg-gray-600 border border-gray-400 rounded py-1 px-1 w-full"
                type={feature.Type}
                name={feature.Name}
                value={sectionData[feature.Name] || ""}
                onChange={(e) => handleChange(e,feature.Name)}
              />
              <button
                onClick={() => handleDeleteField(index)}
                className="absolute h-full mx-2 text-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                x
              </button>
            </div>
          </li>
        ))}
      </ul>
      <CustomizeSectionModal fields={fields} setFields={setFields} />

      {/* <button
        className="mt-4 bg-teal-500 text-white px-4 rounded"
        onClick={handleGenerate}
      >
        Generate Resume
      </button> */}
    </div>
  );
}
