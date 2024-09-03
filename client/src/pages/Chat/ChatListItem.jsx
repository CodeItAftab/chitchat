import { faker } from "@faker-js/faker";
import AvatarWithStatus from "../../components/custom/AvatarWithStatus";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showMainBox } from "@/app/slices/app";

function ChatListItem() {
  let name = faker.person.fullName();
  let bio = faker.person.bio();
  bio = bio.length > 22 ? bio.slice(0, 24) + "..." : bio;
  name = name.length > 22 ? name.slice(0, 20) + "..." : name;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <li
      className="chat-list-item hover:bg-[#ecedf1] h-[64px] w-full cursor-pointer  rounded-lg box-border mb-[2px] px-2 flex items-center overflow-hidden"
      onClick={() => {
        navigate("/inbox/dskjflkdsjfkl");
        dispatch(showMainBox(true));
      }}
    >
      <div className="avatar-container h-10 w-10 rounded-full bg-white">
        <AvatarWithStatus />
      </div>
      <div className="Chat-user-info h-full w-[calc(100%-112px)] box-border  pl-4 flex flex-col gap-[6px] justify-center">
        <h2 className="chat-user-name text-base font-medium leading-none text-slate-700">
          {name}
        </h2>
        <p className="last-message text-[14px] leading-none text-slate-500">
          {bio}
        </p>
      </div>
      <div className="chat-time-container h-full w-16 flex flex-col items-center justify-center gap-2">
        <span className="last-message-time text-[12px] leading-none text-slate-500">
          10:10 AM
          {/* {faker.number.int({ min: 1, max: 12 })}:
          {faker.number.int({ min: 1, max: 12 })} */}
        </span>
        <span className="new-message-count h-5 w-5 flex items-center justify-center text-[10px] bg-[#1976d2] text-white leading-none  rounded-full">
          {faker.number.int({ min: 0, max: 99 })}
        </span>
      </div>
    </li>
  );
}

export default ChatListItem;
