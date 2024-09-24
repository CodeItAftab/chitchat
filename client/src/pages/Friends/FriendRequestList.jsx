import { fetchAllFriendRequests } from "@/app/slices/user";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FriendRequestListItem from "./FriendRequestListItem";

function FriendRequestList() {
  const disptach = useDispatch();
  const { friendRequests } = useSelector((state) => state.user);
  useEffect(() => {
    document.title = "Friend Requests";
    disptach(fetchAllFriendRequests());
  }, []);

  return (
    <ul className="h-full w-full flex flex-col items-center p-4 gap-2 overflow-auto">
      {friendRequests?.map((req) => {
        return <FriendRequestListItem req={req} key={req._id} />;
      })}
    </ul>
  );
}

export default FriendRequestList;
