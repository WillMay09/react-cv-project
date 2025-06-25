"use client"

import React, { useState } from "react";
export default function CustomizeSectionModal({fields, setFields}) {
  //setting showModal intitial state to false(modal not visible)
  const [showModal, setShowModal] = useState(false);
  //default input is nothing
  const [newFieldName, setNewFieldName] = useState("");
  //default input type is text
  const [newFieldType, setNewFieldType] = useState("text");
  //set fields array to empty
  

  //triggers the change
  const handleAddField = () => {
    //edge case check
    if (newFieldName.trim() === "") return;

    const newField = {
      Name: newFieldName,
      Type: newFieldType,
    };
    //...fields creates a copy of the fields array, new reference
    setFields([...fields, newField]);
    //cleanup reset section

    //clears the textbox where the user typed the string
    setNewFieldName("");
    //sets field type back to default
    setNewFieldType("text");
    //closes modal
    setShowModal(false);
  };

  //conditional render
  return (
    <div>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => setShowModal(true)}
      >
        Customize Fields
      </button>
      {/* Conditional Render */}
      {showModal && (
        // outermost div contains css that represents it's location on the screen
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h2 className="text-lg font-bold mb-4">Add A Custom Field</h2>
            <input
              type="text"
              placeholder="Field Name"
              value={newFieldName}
              onChange={(e) => setNewFieldName(e.target.value)}
              className="border w-full p-2 mb-3"
            />
            <select
              value={newFieldType}
              onChange={(e) => setNewFieldType(e.target.value)}
            >
              <option value="text">Text</option>
              <option value="email">Email</option>
              <option value="tel">Phone</option>
              <option value="date">Date</option>
            </select>
            <div className="flex justify-between mt-4">
              <button
                className="bg-green-500 text-white px-3 py-1 rounded"
                onClick={handleAddField}
              >
                Add
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {/*preview added fields*/}
      
    
    </div>
  );
}
