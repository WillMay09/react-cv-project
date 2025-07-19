"use client";

export default function ResumeBodyCustom({title, sectionData }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold border-b border-black mb-2">
        {title}
      </h2>
      <div>
        {sectionData.map(({ Title, Value, Role }) => {
          const value = sectionData[Title];

          //skip if empty
          if (!value || value.trim() === "") return null;

          switch (Role) {
            case "title":
              return (
                <h3 key={Title} className="text-xl font-bold">
                  {Value}
                </h3>
              );
            case "sub-title":
              return (
                <p key={Title} className="italic text-gray-600">
                  {Value}
                </p>
              );
            case "startDate":
              return (
                <p key={Title} className="italic text-gray-600">
                  {Value}
                </p>
              );
            case "endDate":
              return (
                <p key={Title} className="italic text-gray-600">
                  {Value}
                </p>
              );
            case "description":
              return (
                <p key={Title} className="italic text-gray-600">
                  {Value}
                </p>
              );
          }
        })}
      </div>
    </div>
  );
}
