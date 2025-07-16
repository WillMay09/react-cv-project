export default function ResumeBody({ title, sectionData }) {
  return (
    <>
      <div className="flex flex-col">
        <h2>{title}</h2>

        <div className="grid grid-cols-[2fr,1fr] grid-flow-row gap-3 border-t-2 border-black">
          <p>{sectionData.School}</p>
          <p>{sectionData.Degree}</p>
          <p>{sectionData.Location}</p>
          <p>{sectionData.startDate}</p>
        </div>
      </div>
    </>
  );

  //      let educationInformation = [
  //     { Title: "School", Type: "text" },
  //     { Title: "Degree", Type: "text" },
  //     { Title: "startDate", Type: "date" },
  //     { Title: "endDate", Type: "date" },
  //   ];
}
