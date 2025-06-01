import Image from "next/image";
import EditSection from "../components/editSection";
export default function Home() {
  let features = [
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
      Hello There
      <EditSection id="general-info"/>
    </div>
  );
}
