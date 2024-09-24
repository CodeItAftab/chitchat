import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { socket } from "@/socket";
import { faker } from "@faker-js/faker";
import { IconButton } from "@mui/material";
import { Check, X } from "phosphor-react";
// import { CircleCheck, CircleX } from "lucide-react";

// import PropTypes from "prop-types";

function FriendRequestListItem({ req }) {
  function acceptFriendRequest() {
    socket?.emit("accept_request", {
      request_id: req._id,
      sender: req.sender._id,
      recipient: req.recipient,
    });
  }

  return (
    <li className="h-20 md:w-[700px] sm:w-[600px] w-[98%] bg-white flex items-center justify-between p-4 md:rounded-[12px] rounded-[8px] shadow-sm hover:shadow-md cursor-pointer select-none">
      <div className="h-full flex items-center  gap-3 grow">
        <div className="avatar-container h-11 w-11 rounded-full">
          <Avatar className="h-11 w-11">
            <AvatarImage src={faker.image.avatar()} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="Chat-user-info h-full w-[calc(100%-64px)] box-border  flex items-center justify-between">
          <h2 className="chat-user-name lg:text-lg text-base leading-none text-nowrap">
            {req.sender.name.length > 20
              ? req.sender.name.slice(0, 18) + "..."
              : req.sender.name}
          </h2>
        </div>
      </div>
      <div className="h-full flex items-center shrink-0 sm:gap-2 gap-[2px]">
        <IconButton sx={{ padding: "0.5rem" }}>
          <X size={28} className="text-red-600" />
        </IconButton>
        <IconButton
          sx={{ padding: "0.5rem" }}
          onClick={() => acceptFriendRequest()}
        >
          <Check size={28} className="text-blue-500 " />
        </IconButton>
      </div>
    </li>
  );
}

export default FriendRequestListItem;
