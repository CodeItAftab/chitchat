import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { EllipsisVertical } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

function FriendListItem() {
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
        <DropdownMenu className="outline-none">
          <DropdownMenuTrigger className="outline-none">
            <Button
              variant="ghost"
              className="friendListOptionContainer hover:bg-transparent flex items-center p-0"
            >
              <EllipsisVertical color="grey" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-2">
            <DropdownMenuItem>View profile</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Unfriend</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </li>
  );
}

export default FriendListItem;
