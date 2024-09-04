import resume from "../pdf/resume1.pdf";

export default function Test() {
  return (
    <div className="w-full">
      <iframe src={resume}></iframe>
    </div>
  );
}
