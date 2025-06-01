export default function EditSection() {
  return (
    <div>
      <h2>General Info</h2>
      <ul>
        <li>
          <label>Name: </label>
          <input type="text" name="name"></input>
        </li>
        <li>
          <label>Email: </label>
          <input type="email" name="email"></input>
        </li>
        <li>
          <label>Phone: </label>
          <input type="tel" name="phone"></input>
        </li>
      </ul>
    </div>
  );
}
