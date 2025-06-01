export default function EditSection(features) {
  return (
    <div className="bg-gray-900 text-gray-400 flex flex-col items-center justify-center space-y-4 p-4">
      <h2 className="text-teal-300">General Info</h2>
      <ul className="w-full flex flex-col justify-center items-center gap-4">
        <li className = 'flex flex-col justify-center items-center'>
          <label>Name: </label>
          <input className="bg-gray-600 border border-gray-400 rounded py-1 px-1" type="text" name="name"></input>
        </li>
        <li className = 'flex flex-col justify-center items-center'>
          <label>Email: </label>
          <input className="bg-gray-600 border border-gray-400 rounded py-1 px-1" type="email" name="email"></input>
        </li>
        <li className = 'flex flex-col justify-center items-center'>
          <label>Phone: </label>
          <input className="bg-gray-600 border border-gray-400 rounded py-1 px-1" type="tel" name="phone"></input>
        </li>
      </ul>
    </div>
  );
}
