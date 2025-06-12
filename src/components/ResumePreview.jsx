export default function ResumePreview() {
  return (
    <div className="bg-white text-black p-8 rounded-lg shadow-lg w-full max-w-2xl">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <ul className="space-y-2">
        {Object.entries(data).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
