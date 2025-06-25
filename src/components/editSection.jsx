export default function EditComponent({
  title,
  features,
  sectionData,
  setSectionData,
}) {
  const handleUpdate = (userInput, fieldName) => {
    const newData = { Title: fieldName, Value: userInput };

    setSectionData({ ...sectionData, newData });
  };

  return (
    <div className="text-gray-400 bg-gray-950 rounded-[2rem]">
      <h2 className="text-teal-300">{title}</h2>
      <ul className="flex flex-col gap-2">
        {features.map((feature) => (
          <li key={feature.Title}>
            <label className="text-base">{feature.title}</label>
            <input
              type={feature.Type}
              name={feature.Type}
              className="rounded-[1rem] bg-slate-500 border-2 w-full"
              value={sectionData}
              onChange={(e) => handleUpdate(e.target.value, feature.Name)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
