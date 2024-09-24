import { fetchAllFriends } from "@/app/slices/user";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FriendItem from "./FriendItem";

function FriendList() {
  const disptach = useDispatch();
  const { friends } = useSelector((state) => state.user);
  useEffect(() => {
    document.title = "Friends";
    disptach(fetchAllFriends());
  }, []);

  return (
    <ul className="h-full w-full flex flex-col items-center p-4 gap-2 overflow-auto">
      {friends?.map((friend) => {
        return <FriendItem friend={friend} key={friend._id} />;
      })}
    </ul>
  );
}

export default FriendList;
