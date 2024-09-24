import { fetchAllSentRequests } from "@/app/slices/user";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SentRequestItem from "./SentRequestItem";

function SentRequestList() {
  const disptach = useDispatch();
  const { sentRequests } = useSelector((state) => state.user);
  useEffect(() => {
    document.title = "Sent Friend Request";
    disptach(fetchAllSentRequests());
  }, []);
  return (
    <ul className="h-full w-full flex flex-col items-center p-4 gap-2 overflow-auto">
      {sentRequests?.map((request) => {
        return <SentRequestItem req={request} key={request._id} />;
      })}
    </ul>
  );
}

export default SentRequestList;
