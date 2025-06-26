"use client";

export default function EditSectionWithCustomization({
  title,
  features,
  sectionData,
  setSectionData,
}) {
  const handleChange = (targetValue, featureTitle) => {
    const newData = {Title: featureTitle, Value: targetValue}

    setSectionData({...sectionData,newData})
  };
  return (
    <div>
      <div className="text-gray-400 bg-gray-950 rounded-[1rem] px-3">
        <h2 className="text-teal-300 text-center pb-1 pt-4 ">{title}</h2>
        <ul className="flex flex-col gap-4 p-4">
          {features.map((feature) => {
            <li key={feature.Title}>
              <label className="text-sm">{feature.Title}</label>
              <input
                className="rounded-md bg-slate-700 border-2 w-full min-h-8"
                type={feature.Type}
                name={feature.Title}
                value={sectionData[feature.Title] || ""}
                onChange={(e)=>handleChange(e.target.value, feature.Title)}
              ></input>
            </li>;
          })}
        </ul>   
          {/* Modal can be opened with a button */}
        {/* <featureModal /> */}
      </div>
    </div>
  );
}
