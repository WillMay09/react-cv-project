"use client";

import { useState } from "react";
import CustomizeSectionModal from "./featureModal";
export default function EditSectionWithButton({ title, features }) {
  //intial value is set to features
  const [fields, setFields] = useState(features);
  const [showModal, setShowModal] = useState(false);

  const handleAddField = () => {
    const newField = { Name: `Field ${fields.length + 1}`, Type: "text" };
    //need to repopulate the whole array everytime in order for react to detect a change
    setFields([...fields, newField]);
  };
  const handleDeleteField = (indexToDelete) => {
    setFields(fields.filter((_, index) => index !== indexToDelete));
  };
  return (
    // Give the user the ability to choose what kind of feature they want to add
    <div className="bg-gray-900 text-gray-400 flex flex-col items-center justify-center gap-4 p-6 rounded-[1rem]">
      <h2 className="text-teal-300">{title}</h2>
      <ul className="flex flex-col justify-center items-center gap-2 ">
        {fields.map((field, index) => (
          <li
            key={`${field.Name}-${index}`}
            className="flex flex-col justify-center items-center group gap-2"
          >
            <label className="w-full max-w-sm text-center">{field.Name}</label>

            <div className="relative w-full max-w-sm">
              <input
                className="bg-gray-600 border border-gray-400 rounded py-1 px-1 w-full"
                type={field.Type}
                name={field.Name}
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
    </div>
  );
}
