import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CircleCheck, CircleX } from "lucide-react";

function FriendRequestListItem() {
  return (
    <li className="friend-list-item hover:bg-[#ecedf1] h-[64px] w-full  rounded-lg box-border mb-[2px] px-2 flex items-center justify-between overflow-hidden">
      <div className="avatar-container h-12 w-12 rounded-full bg-white">
        <Avatar className="h-12 w-12">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="Chat-user-info h-full w-[calc(100%-64px)] box-border  flex items-center justify-between">
        <h2 className="chat-user-name text-lg leading-none text-slate-700">
          Aftab Alam
        </h2>
        <div className="friend-request-actions w-20 h-full flex items-center gap-3">
          <Button
            variant="ghost"
            className="friendListOptionContainer hover:bg-transparent flex items-center p-0"
          >
            <CircleX size={32} strokeWidth={1} color="red" />
          </Button>
          <Button
            variant="ghost"
            className="friendListOptionContainer hover:bg-transparent flex items-center p-0"
          >
            <CircleCheck size={32} strokeWidth={1} color="green" />
          </Button>
        </div>
      </div>
    </li>
  );
}

export default FriendRequestListItem;
