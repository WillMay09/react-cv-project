export default function EditComponentWithCustomization({
  title,
  features,
  sectionData,
  setSectionData,
  activeState,
  setActiveState,
}) {
  const [addedFields, setAddedFields] = useState(features);

  // Update a specific field inside a specific job object
  const handleChange = (value, fieldName, jobIndex) => {
    const updatedData = [...sectionData];
    //updating the data for that specific job
    updatedData[jobIndex][fieldName] = value;
    setSectionData(updatedData);
  };
  
  const addJobEntry = () => {
    const newJob = Object.fromEntries(
      addedFields.map((field) => [field.Title, ""])
    );
    setSectionData([...sectionData, newJob]);
  };

  const removeJobEntry = (indexToDelete) => {
    const filtered = sectionData.filter((_, idx) => idx !== indexToDelete);
    setSectionData(filtered);
  };

  const isOpen = activeState === title;

  const toggleActive = () => {
    setActiveState(isOpen ? null : title);
  };

  return (
    <div className="text-gray-400 bg-gray-950 rounded-[1rem] px-3">
      <h2 className="text-teal-300 text-center pb-1 pt-4 ">{title}</h2>

      {isOpen && (
        <>
        {/* each job is it's own list */}
          {sectionData.map((job, jobIndex) => (
            <ul
              key={jobIndex}
              className="flex flex-col gap-4 p-4 border-t border-slate-700 mt-4"
            >
              <h3 className="text-lg text-teal-200 font-semibold">
                Job #{jobIndex + 1}
              </h3>

              {addedFields.map((feature, featureIndex) => (
                <li key={`${feature.Title}-${featureIndex}`}>
                  <label className="text-sm block text-slate-400 mb-1">
                    {feature.Title}
                  </label>
                  <div className="relative w-full max-w-sm">
                    {feature.Type === "textArea" ? (
                      <textarea
                        rows={4}
                        name={feature.Title}
                        className="rounded-md bg-slate-800 border border-slate-600 px-2 py-1 resize-none w-full"
                        value={job[feature.Title] || ""}
                        onChange={(e) =>
                          handleChange(e.target.value, feature.Title, jobIndex)
                        }
                      />
                    ) : (
                      <input
                        type={feature.Type}
                        name={feature.Title}
                        className="rounded-md bg-slate-700 border-2 w-full min-h-8 px-2"
                        value={job[feature.Title] || ""}
                        onChange={(e) =>
                          handleChange(e.target.value, feature.Title, jobIndex)
                        }
                      />
                    )}
                  </div>
                </li>
              ))}

              <button
                className="text-red-400 mt-2 text-sm hover:text-red-300"
                onClick={() => removeJobEntry(jobIndex)}
              >
                Remove Job
              </button>
            </ul>
          ))}

          <div className="flex justify-center mt-4">
            <button
              className="bg-teal-700 hover:bg-teal-600 px-4 py-2 rounded text-white"
              onClick={addJobEntry}
            >
              Add Job
            </button>
          </div>

          <FeatureModal
            addedFeatures={addedFields}
            setAddedFeatures={setAddedFields}
          />
        </>
      )}

      <div className="flex justify-center mt-2">
        <button
          className="rounded-[1rem] border-gray-400 border-2 p-2 text-white"
          onClick={toggleActive}
        >
          {isOpen ? "Hide" : "Edit"} Section
        </button>
      </div>
    </div>
  );
}
