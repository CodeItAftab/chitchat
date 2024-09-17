import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsThreeVertical, UserMinus, UserCircle } from "phosphor-react";
import { IconButton } from "@mui/material";
import { faker } from "@faker-js/faker";

function FriendListItem() {
  return (
    <li className="friend-list-item hover:bg-[#ecedf1] bg-white h-[64px] w-full  rounded-lg box-border mb-[2px] px-2 flex items-center gap-3  overflow-hidden">
      <div className="avatar-container h-11 w-11 rounded-full">
        <Avatar className="h-11 w-11">
          <AvatarImage src={faker.image.avatar()} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="Chat-user-info h-full w-[calc(100%-64px)] box-border  flex items-center justify-between">
        <h2 className="chat-user-name lg:text-lg text-base leading-none text-slate-700">
          {faker.person.fullName()}
        </h2>
        <DropdownMenu className="outline-none">
          <DropdownMenuTrigger className="outline-none ">
            <IconButton
              sx={{ padding: "0", marginRight: "-1rem" }}
              variant="ghost"
              className="friendListOptionContainer hover:bg-transparent flex items-center p-0"
            >
              <DotsThreeVertical size={32} />
            </IconButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-2">
            <DropdownMenuItem className="flex items-center gap-2 pl-1">
              <UserCircle size={20} />
              View profile
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex items-center gap-2 pl-1">
              <UserMinus size={20} />
              Unfriend
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </li>
  );
}

export default FriendListItem;
