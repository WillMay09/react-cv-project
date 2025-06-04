import Image from "next/image";
import EditSection from "../components/editSection";
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
  return (
    <div>
      <EditSection title="General Information" features={generalFeatures} />
      <EditSection title="Education Information" features={educationFeatures} />
    </div>
  );
}
