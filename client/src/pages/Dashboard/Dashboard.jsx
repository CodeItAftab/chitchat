import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import NavSmall from "../Navbar/NavSmall";

function Dashboard() {
  return (
    <div className="dasahboard h-full w-full bg-[#fafafa] relative flex lg:flex-row flex-col">
      <Navbar />
      <Outlet />
      <NavSmall />
    </div>
  );
}

export default Dashboard;
