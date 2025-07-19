"use client";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import FeatureModal from "../components/featureModal";
export default function EditComponentWithCustomization({
  title,
  features,
  sectionData,
  setSectionData,
  activeState,
  setActiveState,
}) {
  const [addedFields, setAddedFields] = useState(features);
  const handleNewField = (targetValue, featureTitle) => {
    const newField = { Title: `Field ${addedFields.length + 1}`, Type: "text" };
    setAddedFields([...addedFields, newField]);
  };

  //indexToDelete is provided by the onChange handle by the jsx element
  const handleDeleteField = (indexToDelete) => {
    setAddedFields(addedFields.filter((_, index) => index !== indexToDelete));
  };

  //updates section data for a given field name when a user inputs something

  const handleChange = (userInput, fieldName, roleName) => {
    const newData = { Title: fieldName, Value: userInput, Role: roleName };

    //assumes section data is an object, spreads over the object and adds another field
    setSectionData({ ...sectionData, newData });
  };

  const isOpen = activeState === title;

  const toggleActive = () => {
    if (isOpen) {
      setActiveState(null);
    } else {
      setActiveState(title);
    }
  };
  return (
    <>
      <div className="text-gray-400 bg-gray-950 rounded-[1rem] px-3">
        <h2 className="text-teal-300 text-center pb-1 pt-4 ">{title}</h2>
        {isOpen && (
          <>
            <ul className="flex flex-col gap-4 p-4">
              {/* implicit return with () rather than {} */}

              {addedFields.map((feature, index) => (
                <li key={`${feature.Name}-${index}`}>
                  <label className="text-sm">{feature.Title}</label>
                  <div className="relative w-full max-w-sm">
                    <input
                      type={feature.Type}
                      name={feature.Title}
                      className="rounded-md bg-slate-700 border-2 w-full min-h-8 px-2"
                      value={sectionData[feature.Title] || ""}
                      onChange={(e) =>
                        handleChange(e.target.value, feature.Title,feature.Role)
                      }
                    ></input>
                    <button
                      className="absolute h-full mx-2 text-white opacity-0 hover:opacity-100 transition-opacity"
                      onClick={() => handleDeleteField(index)}
                    >
                      x
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <FeatureModal
              addedFeatures={addedFields}
              setAddedFeatures={setAddedFields}
            />
          </>
        )}

        {/* Modal can be opened with a button */}

        <div className="flex justify-center w-full my-2">
          <button
            // takes the previous value of showButton and returns the opposite of it
            onClick={toggleActive}
            className="flex justify-center rounded-[1rem] border-gray-400 border-2 p-2 "
          >
            {isOpen ? (
              <Minus className="w-6 h-6 text-gray-400" />
            ) : (
              <Plus className="w-6 h-6 text-gray-400" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}
