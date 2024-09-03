import { Navigate } from "react-router-dom";

function Home() {
  const isAuthenticated = true;
  if (isAuthenticated) {
    return <Navigate to={"/verify-otp"} replace={true} />;
  }
  return <Navigate to={"/login"} replace={true} />;
}

export default Home;
