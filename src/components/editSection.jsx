export default function EditSection({title, features}) {
  return (
    <div className="bg-gray-900 text-gray-400 flex flex-col items-center justify-center space-y-4 p-4">
      <h2 className="text-teal-300">{title}</h2>
      <ul className="w-full flex flex-col justify-center items-center gap-4">
        {features.map((feature) => (
          <li key={feature.Name} className="flex flex-col justify-center items-center">
            <label>{feature.Name} </label>
            <input
              className="bg-gray-600 border border-gray-400 rounded py-1 px-1"
              type={feature.Type}
              name={feature.Name}
            ></input>
          </li>
        ))}
      </ul>
    </div>
  );
}
