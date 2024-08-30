import { Outlet } from "react-router-dom";

export default function HomeRoot() {
  return (
    <div className="w-full">
      <Outlet></Outlet>
    </div>
  );
}
