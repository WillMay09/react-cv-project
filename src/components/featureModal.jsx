"use client";
import { useState } from "react";
export default function FeatureModal({ features }) {
  const [showModal, setShowModal] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [userInputType, setUserInputType] = useState("");

  //handle change functions, need to add to the new features.
  const handleUpdate = () => {
    const newInputValue = userInput.trim();
    //edge case
    if (newInputValue == "") {
      return;
    }
    if (userInputType == "") {
      return;
    }
    const newField = {
      Title: userInput,
      Type: userInputType,
    };

    //add new field to features array
    features.push(newField);

    //reset hooks
    setShowModal(false);
    setUserInput("");
    setUserInputType("");
  };
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
        <div className="bg-white w-full h-full rounded-[1rem] bg-opacity-50">
          <div className="fixed right-[50] bottom-[50]  border-gray-600 border-black border-2 rounded-[1rem]">
            <input
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <selection
              value={userInputType}
              onChange={(e) => setUserInputType(e.target.value)}
            >
              <option value="text">text</option>
              <option value="email">email</option>
              <option value="date">date</option>
              <option value="tel">telephone</option>
            </selection>
          </div>
          <button
            className="bg-slate-600 rounded-[1rem] text-md"
            onChange={() => handleUpdate()}
          >
            Add Features
          </button>
        </div>
      ) : null}
    </>
  );
}
