import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import NavSmall from "../Navbar/NavSmall";
import { useSelector } from "react-redux";

function Dashboard() {
  const { isLoggedIn } = useSelector((state) => state.auth);

  if (!isLoggedIn) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <div className="dasahboard h-full w-full  relative flex lg:flex-row flex-col">
      <Navbar />
      <Outlet />
      <NavSmall />
    </div>
  );
}

export default Dashboard;
