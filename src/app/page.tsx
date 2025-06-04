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
  return (
    <div>
      <EditSection title="General Information" features={generalFeatures} />
      
    </div>
  );
}
