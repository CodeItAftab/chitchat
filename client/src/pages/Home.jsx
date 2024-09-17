import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Home() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  if (isLoggedIn) {
    return <Navigate to={"/inbox"} replace={true} />;
  }
  // return <Navigate to={"/ibox"} replace={true} />;
  return <Navigate to={"/auth/login"} />;
  // return <Navigate to={"/inbox"} replace={true} />;
}

export default Home;
