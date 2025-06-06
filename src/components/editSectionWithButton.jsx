import { useState } from "react";

export default function EditSectionWithButton({ title, features }) {
  
  //intial value is set to features
  const [fields, setFields] = useState(features);
  const [showModal, setShowModal] = useState(false);
  
  const handleAddField = () => {
    const newField = { Name: `Field ${fields.length + 1}`, Type: "text" };
    //need to repopulate the whole array everytime in order for react to detect a change
    setFields([...fields, newField]);
  };
  return (
    // Give the user the ability to choose what kind of feature they want to add
    <div className="bg-gray-900 text-gray-400 flex flex-col items-center justify-center space-y-4 p-4">
      <h2 className="text-teal-300">{title}</h2>
      <ul>
        {fields.map((field, index) => (
          <li
            key={`${fields.Name}-${index}`}
            className="flex flex-col justify-center items-center"
          >
            <label>{fields.Name}</label>
            <input
              className="bg-gray-600 border border-gray-400 rounded py-1 px-1"
              type={field.Type}
              name={fields.Name}
            />
          </li>
        ))}
      </ul>
      <button
        onClick={handleAddField}
        className="mt-4 px-3 py-1 bg-teal-500 text-white rounded hover:bg-teal-600 "
      >
        +Add Field
      </button>
    </div>
  );
}
