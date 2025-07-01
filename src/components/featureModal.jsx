"use client";
import { useState } from "react";
export default function FeatureModal({ addFeatures, setAddedFeatures }) {
  const [showModal, setShowModal] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [userInputType, setUserInputType] = useState("text");

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
    };

    //add new field to features array
    setAddedFeatures(...addFeatures, newField)

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
            <div className='flex justify-center'>
              <button
                className="bg-slate-600 rounded-[1rem] text-md"
                onClick={handleUpdate}
              >
                Add Features
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
