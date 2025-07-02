"use client";
import {useState} from 'react'
import FeatureModal from "../components/featureModal";
export default function EditComponentWithCustomization({
  title,
  features,
  sectionData,
  setSectionData,
}) {

  const [addedFields, setAddedFields] = useState(features)
  const handleNewField = (targetValue, featureTitle) => {
    const newField = {Title: `Field ${addedFields.length+1}`, Type: "text"};
    setAddedFields([...addedFields, newField]);
  };

  //indexToDelete is provided by the onChange handle by the jsx element
  const handleDeleteField = (indexToDelete) => {

    setAddedFields(addedFields.filter((_,index) =>index !== indexToDelete));
  }

  //updates section data for a given field name when a user inputs something

  const handleChange = (userInput, fieldName) => {
    const newData = { Title: fieldName, Value: userInput };

    setSectionData({ ...sectionData, newData});
   
  }
  return (
    <>
      <div className="text-gray-400 bg-gray-950 rounded-[1rem] px-3">
        <h2 className="text-teal-300 text-center pb-1 pt-4 ">{title}</h2>
        <ul className="flex flex-col gap-4 p-4">
          {/* implicit return with () rather than {} */}
          {addedFields.map((feature, index) => (
            <li key={`${feature.Name}-${index}`}>
              <label className="text-sm">{feature.Title}</label>
              <input
                type={feature.Type}
                name={feature.Title}
                className="rounded-md bg-slate-700 border-2 w-full min-h-8 px-2"
                value={sectionData[feature.Title || ""]}
                onChange={(e) => handleChange(e.target.value, feature.Title)}
              ></input>
            </li>
          ))}
        </ul>
        {/* Modal can be opened with a button */}
        <FeatureModal addedFeatures={addedFields} setAddedFeatures={setAddedFields} />
      </div>
    </>
  );
}
