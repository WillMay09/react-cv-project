"use client";

export default function ResumeBodyCustom({ title, sectionData }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold border-b border-black mb-2">
        {title}
      </h2>
      <div>
        {sectionData.map((job, index) => {
          //skip rendering if the jobPosition is empty
          if (!job.jobPosition?.trim()) return null;
          return (
            <div key={index} className="flex flex-col gap-1">
              <h3 className="text-xl font-bold text-teal-700">
                {job["jobPosition"]}
              </h3>
              <p className="text-gray-700 font-medium">{job["company"]}</p>
              <p className="text-sm text-gray-600">
                {job["startDate"]} - {job["endDate"]}
              </p>
              {job["description"] && (
                <p className="mt-2 text-gray-800">{job["description"]}</p>
              )}
            </div>
          );

          //skip if empty
        })}
      </div>
    </div>
  );
}
