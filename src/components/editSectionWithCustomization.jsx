"use client";
import FeatureModal from "../components/featureModal";
export default function EditComponentWithCustomization({
  title,
  features,
  sectionData,
  setSectionData,
}) {
  const handleChange = (targetValue, featureTitle) => {
    const newData = { Title: featureTitle, Value: targetValue };

    setSectionData({ ...sectionData, newData });
  };
  return (
    <>
      <div className="text-gray-400 bg-gray-950 rounded-[1rem] px-3">
        <h2 className="text-teal-300 text-center pb-1 pt-4 ">{title}</h2>
        <ul className="flex flex-col gap-4 p-4">
          {/* implicit return with () rather than {} */}
          {features.map((feature) => (
            <li key={feature.Title}>
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
        <FeatureModal features={features} />
      </div>
    </>
  );
}
