"use client";
import { useState } from "react";
export default function FeatureModal({ addedFeatures, setAddedFeatures }) {
  const [showModal, setShowModal] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [userInputType, setUserInputType] = useState("text");
  const [userInputRole, setUserInputRole] = useState("Title");
  //handle change functions, need to add to the new features.
  const handleUpdate = () => {
    const newInputValue = userInput.trim();
    //edge case
    if (newInputValue === "") {
      return;
    }
    if (userInputType === "") {
      return;
    }
    const newField = {
      Title: newInputValue,
      Type: userInputType,
      Role: userInputRole
    };

    //add new field to features array
    setAddedFeatures([...addedFeatures, newField]);

    //reset hooks

    setUserInput("");
    setUserInputType("text");
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
          Add Section
        </button>
      </div>
      {showModal ? (
        <div className="fixed left-0 top-0 w-full h-full bg-white flex justify-center items-center bg-opacity-80">
          <div className="flex flex-col p-3 gap-2 bg-gray-600 border-black border-2 rounded-[1rem]">
            <input
              value={userInput}
              className="rounded border-black border-2"
              onChange={(e) => setUserInput(e.target.value)}
            />
            <select
              value={userInputType}
              onChange={(e) => setUserInputType(e.target.value)}
              className="rounded border-black border-2"
            >
              <option value="text">text</option>
              <option value="email">email</option>
              <option value="date">date</option>
              <option value="tel">telephone</option>
            </select>
            <select
              value={userInputRole}
              onChange={(e) => {
                setUserInputRole(e.target.value);
              }}
              className="rounded border-black border-2"
            >
              <option value="title">Title</option>
              <option value="sub-title">Sub-Title</option>
              <option value = "start-date">Start-Date</option>
              <option value="end-date">End-Date</option>
              <option value="description">Description</option>
            </select>
            <div className="flex justify-center gap-4">
              <button
                className="bg-slate-600 rounded-[1rem] text-md"
                onClick={handleUpdate}
              >
                Add Features
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
