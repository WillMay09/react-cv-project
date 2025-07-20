"use client";
import { useState } from "react";
export default function FeatureModal({ addedFeatures, setAddedFeatures }) {
  const [showModal, setShowModal] = useState(false);
  const [userInput, setUserInput] = useState("");

  //handle change functions, need to add to the new features.
  const handleUpdate = () => {
    const newInputValue = userInput.trim();
    //edge case
    if(!newInputValue) return;
    const newField = {
      Title: newInputValue,
      Type: "textarea",
    };

    //add new field to features array
    setAddedFeatures([...addedFeatures, newField]);

    //reset hooks

    setUserInput("");
    setShowModal(false);
  };
  //conditional render
  return (
    <>
      <div className="flex justify-center">
        <button
          className="bg-slate-600 rounded-[1rem] text-md p-2"
          onClick={() => setShowModal(true)}
        >
          Add Job Description
        </button>
      </div>
      {showModal ? (
        <div className="fixed left-0 top-0 w-full h-full bg-white flex justify-center items-center bg-opacity-80">
          <div className="flex flex-col p-3 gap-2 bg-gray-600 border-black border-2 rounded-[1rem]">
            <h3 className="text-lg font-semibold mb-4">Add a Job Description</h3>
            <label className="block mb-1 text-sm">Description</label>
            <textarea
              rows={4}
              className="w-full mb-4 px-3 py-2 rounded bg-gray-700 border border-gray-600 resize-none"
              placeholder="e.g., Developed a new API for internal tools..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <div className="flex justify-center gap-4">
              <button
                className="bg-slate-600 rounded-[1rem] text-md"
                onClick={handleUpdate}
              >
                Add 
              </button>
              <button
                className="bg-slate-600 rounded text-md text-red-500"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
