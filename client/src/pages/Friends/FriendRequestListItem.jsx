import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { faker } from "@faker-js/faker";
import { Button } from "@mui/material";
// import { CircleCheck, CircleX } from "lucide-react";

function FriendRequestListItem() {
  return (
    <li className="friend-list-item bg-white  h-[80px] w-full  rounded-lg box-border mb-[4px]  flex items-center justify-between gap-2  overflow-hidden">
      <div className=" flex items-center justify-center h-full w-[80px] ">
        <div className="avatar-container h-16 w-16 rounded-full border-[1px] ">
          <Avatar className="h-16 w-16">
            <AvatarImage src={faker.image.avatar()} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="Chat-user-info h-full w-[calc(100%-64px)] box-border  flex flex-col justify-center gap-2 mb-[-4px] ">
        <h2 className="chat-user-name text-xl leading-none text-slate-700">
          {faker.person.fullName()}
        </h2>
        <div className="friend-request-actions w-full  flex items-center gap-3">
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              height: "30px",
              padding: "0.2rem",
              width: "45%",
              boxShadow: "none",
              fontWeight: "400",
              ":hover": { boxShadow: "none" },
            }}
          >
            Confirm
          </Button>
          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              height: "30px",
              padding: "0.2rem",
              width: "45%",
              boxShadow: "none",
              fontWeight: "400",
              ":hover": {
                boxShadow: "none",
              },
            }}
          >
            Delete
          </Button>
        </div>
      </div>
    </li>
  );
}

export default FriendRequestListItem;
