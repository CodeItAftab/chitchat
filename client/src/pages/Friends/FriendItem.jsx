import AvatarWithoutStatus from "@/components/custom/AvatarWithoutStatus";
import { faker } from "@faker-js/faker";
import { IconButton } from "@mui/material";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsThreeVertical, UserMinus, UserCircle } from "phosphor-react";

function FriendItem({ friend }) {
  return (
    <li className="h-20 md:w-[700px] sm:w-[600px] w-[98%] bg-white flex items-center justify-between p-4 md:rounded-[12px] rounded-[8px] shadow-sm hover:shadow-md cursor-pointer select-none">
      <div className="flex items-center h-full gap-3">
        <div className="sm:h-14 sm:w-14 h-12 w-12 rounded-full">
          <AvatarWithoutStatus />
        </div>
        <div className=" flex flex-col gap-1">
          <h1 className="sm:text-xl text-base leading-none">
            {friend?.name.length > 20
              ? friend?.name.slice(0, 18) + "..."
              : friend?.name}
          </h1>
          {faker.datatype.boolean() && (
            <span className="text-[12px] leading-none">2 mutual friends</span>
          )}
        </div>
      </div>
      <div className="button-container">
        <DropdownMenu className="outline-none">
          <DropdownMenuTrigger className="outline-none ">
            <IconButton
              sx={{ padding: "0.5rem", marginRight: "-1rem" }}
              variant="ghost"
              className="friendListOptionContainer hover:bg-transparent flex items-center p-2"
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

export default FriendItem;
