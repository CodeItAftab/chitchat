import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import NavSmall from "../Navbar/NavSmall";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { connectSocket, socket } from "@/socket";
import toast from "react-hot-toast";
import { fetchAllSentRequests, fetchAllUsers } from "@/app/slices/user";

function Dashboard() {
  const { isLoggedIn, userId } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!socket) {
      connectSocket(userId);
    }

    socket?.on("connection", () => {
      console.log("new");
    });

    socket?.on("request_sent", (data) => {
      toast.success(data.message);
    });

    socket?.on("new_friend_request", (data) => {
      toast.success(data.message);
    });

    socket?.on("request_accepted", (data) => {
      toast.success(data.message);
    });

    return () => {
      socket.off("connection");
      socket.off("request_sent");
      socket.off("new_friend_request");
      socket.off("request_accepted");
    };
  }, [isLoggedIn, userId]);

  if (!isLoggedIn) {
    return <Navigate to="/auth/login" />;
  }
  console.log("dashboard rendered...");

  return (
    <div className="dasahboard h-full w-full  relative flex lg:flex-row flex-col">
      <Navbar />
      <Outlet />
      <NavSmall />
    </div>
  );
}

export default Dashboard;

// useEffect(() => {
//   window.onload = function () {
//     if (!window.location.hash) {
//       window.location = window.location + "#loaded";
//       window.location.reload();
//       console.log("this worked", window.location);
//     }
//   };
//   // window.location.reload();
//   if (!socket) {
//     connectSocket(user_id);
//   }

//   socket.on("new_friend_request", (data) => {
//     toast.success(data.message);
//   });
//   socket.on("request_sent", (data) => {
//     toast.success(data.message);
//   });
//   socket.on("request_accepted", (data) => {
//     toast.success(data.message);
//   });

//   return () => {
//     socket.off("new_friend_request");
//     socket.off("request_accepted");
//     socket.off("request_sent");
//   };
// }, [isLoggedIn, user_id]);
