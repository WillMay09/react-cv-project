"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
export default function EditComponent({
  title,
  features,
  sectionData,
  setSectionData,
  activeState,
  setActiveState
}) {
 
  const [showButton, setShowButton] = useState(false);

  const handleUpdate = (userInput, fieldName) => {
    setSectionData({ ...sectionData, [fieldName]: userInput });
    console.log(sectionData);
  };
//derived value, created from comparing activeState to title
//active state is the currently opened component, if they match, 
// this component is open, isOpen is true
  const isOpen = activeState === title;

  const toggleActive = () =>{
  //if this component is open, setActiveState goes to null and closes it
    if(isOpen){

      setActiveState(null)
    }else{
      //if it is not open, update active state and open the component
      setActiveState(title)
    }
  }
  
  return (
    <div className="text-gray-400 bg-gray-950 rounded-[1rem] px-3">
      <h2 className="text-teal-300 text-center pb-1 pt-4 ">{title}</h2>

      {isOpen && (
        <ul className="flex flex-col gap-4 p-4">
          {features.map((feature) => {
            return (
              <li key={feature.Title}>
                <label className="text-sm">{feature.Title}</label>
                <input
                  type={feature.Type}
                  name={feature.Title}
                  className="rounded-md bg-slate-700 border-2 w-full min-h-8 px-2"
                  value={sectionData[feature.Title] || ""}
                  onChange={(e) => handleUpdate(e.target.value, feature.Title)}
                />
              </li>
            );
          })}
        </ul>
      )}
      <div className="flex justify-center w-full">
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
  );
}
