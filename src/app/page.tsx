import Image from "next/image";
import EditSection from "../components/editSection";
import EditSectionWithButton from "../components/editSectionWithButton";
export default function Home() {
  let generalFeatures = [
    {
      Name: "Name",
      Type: "text",
    },
    {
      Name: "Email",
      Type: "email",
    },
    {
      Name: "Phone",
      Type: "tel",
    },
  ];
  let educationFeatures = [
    {
      Name: "School Name",
      Type: "text",
    },
    {
      Name: "Title Of Study",
      Type: "text",
    },
    {
      Name: "Date of Study",
      Type: "date",
    },
  ];

  let experienceFeatures = [
    {
      Name: "Title",
      Type: "text",
    },
    {
      Name: "Date",
      Type: "date",
    },
    {
      Name: "Company",
      Type: "text",
    },
    {
      Name: "Description",
      Type: "text",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 space-y-8">
      <h1 className="text-3xl font-bold text-teal-400">CV Builder</h1>
      <div className="flex flex-wrap min-w-[300px]">
        <EditSection title="General Information" features={generalFeatures} />
        <EditSection
          title="Education Information"
          features={educationFeatures}
        />
        <EditSectionWithButton
          title="Experience"
          features={experienceFeatures}
        />
      </div>
    </div>
  );
}
