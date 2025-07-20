"use client";

export default function ResumeBodyCustom({ title, sectionData }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold border-b border-black mb-2">
        {title}
      </h2>
      <div>
        {sectionData.map(({ job, index }) => {
          <div key={index} className="">
            <h2>{job["job-title"]}</h2>
            <div>
              <p>{job["company"]}</p>
              <p>{job["start-date"]}</p>
              <p>{job["end-date"]}</p>
              <p>{job["description"]}</p>
            </div>
          </div>;

          //skip if empty
        })}
      </div>
    </div>
  );
}
