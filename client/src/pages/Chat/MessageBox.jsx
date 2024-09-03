import { faker } from "@faker-js/faker";
import { IconButton } from "@mui/material";
// import Picker from "@emoji-mart/react";
// import data from "@emoji-mart/data";

import {
  CaretLeft,
  Info,
  Paperclip,
  PaperPlaneTilt,
  Phone,
  Smiley,
  VideoCamera,
} from "phosphor-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showMainBox } from "@/app/slices/app";
import AvatarWithStatus from "@/components/custom/AvatarWithStatus";
import MessageItem from "./MessageItem";
// import data from "@emoji-mart/data";
// import Picker from "@emoji-mart/react";

function MessageBox() {
  const [chatHistory, setChatHistory] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inputRef = useRef();

  useEffect(() => {
    dispatch(showMainBox(true));

    return () => {
      dispatch(showMainBox(false));
    };
  }, [dispatch]);

  useEffect(() => {
    setChatHistory((prev) => {
      return [
        ...prev,
        {
          type: "text",
          message: faker.person.bio(),
          sender: faker.datatype.boolean(),
        },
        {
          type: "text",
          message: faker.person.bio(),
          sender: faker.datatype.boolean(),
        },
        {
          type: "text",
          message: faker.person.bio(),
          sender: faker.datatype.boolean(),
        },
        {
          type: "text",
          message: faker.person.bio(),
          sender: faker.datatype.boolean(),
        },
        {
          type: "text",
          message: faker.person.bio(),
          sender: faker.datatype.boolean(),
        },
        {
          type: "text",
          message: faker.person.bio(),
          sender: faker.datatype.boolean(),
        },
        {
          type: "text",
          message: faker.person.bio(),
          sender: faker.datatype.boolean(),
        },
        {
          type: "text",
          message: faker.person.bio(),
          sender: faker.datatype.boolean(),
        },
        {
          type: "text",
          message: faker.person.bio(),
          sender: faker.datatype.boolean(),
        },
        {
          type: "text",
          message: faker.person.bio(),
          sender: faker.datatype.boolean(),
        },
        {
          type: "text",
          message: faker.person.bio(),
          sender: faker.datatype.boolean(),
        },
        {
          type: "text",
          message: faker.person.bio(),
          sender: faker.datatype.boolean(),
        },
        {
          type: "text",
          message: faker.person.bio(),
          sender: faker.datatype.boolean(),
        },
        {
          type: "text",
          message: faker.person.bio(),
          sender: faker.datatype.boolean(),
        },
        {
          type: "text",
          message: faker.person.bio(),
          sender: faker.datatype.boolean(),
        },
        {
          type: "text",
          message: faker.person.bio(),
          sender: faker.datatype.boolean(),
        },
        {
          type: "text",
          message: faker.person.bio(),
          sender: faker.datatype.boolean(),
        },
        {
          type: "text",
          message: faker.person.bio(),
          sender: faker.datatype.boolean(),
        },
      ];
    });
  }, []);
  return (
    <div className="h-full w-full flex flex-col ">
      <header className="messagebox-header h-16 w-full bg-blue-50 px-3 border-b-[1px] flex justify-between items-center">
        <div className="chat-user-info h-full flex items-center gap-3">
          <IconButton
            sx={{
              padding: "0",
              width: "fit-content",
            }}
            onClick={() => {
              navigate("/", { replace: true });
            }}
          >
            <CaretLeft color="black" />
          </IconButton>
          <div className="chat-user-avatar h-9 w-9 rounded-full">
            <AvatarWithStatus />
          </div>
          <div className="header-user-info h-full flex flex-col justify-center gap-1">
            <h3 className="text-lg leading-none">{faker.person.fullName()}</h3>
            <span className="user-online-status text-[10px] leading-none">
              Online
            </span>
          </div>
        </div>
        <div className="header-menu flex h-full gap-1 items-center">
          <IconButton>
            <VideoCamera size={20} color="black" weight="fill" />
          </IconButton>
          <IconButton>
            <Phone size={20} color="black" weight="fill" />
          </IconButton>
          <IconButton>
            <Info size={20} />
          </IconButton>
        </div>
      </header>
      <ul className="messages-box bg-blue-50 w-full lg:h-[calc(100%-128px)] h-[calc(100%-112px)] px-3 py-4 flex flex-col-reverse gap-4  overflow-auto">
        {chatHistory.map((chat) => {
          return <MessageItem key={faker.person.bio()} message={chat} />;
        })}
      </ul>
      <form className="message-input-container  h-16 w-full bg-blue-50  border-t-[1px] flex items-center justify-evenly lg:px-4 z-10">
        <div className="message-input h-10 w-[calc(100%-80px)] flex items-center bg-blue-100  rounded-[6px] overflow-hidden border-[2px_solid_black]">
          <input
            className="h-10 w-[calc(100%-40px)] px-3 leading-none outline-none rounded-[6px] bg-transparent text-black"
            type="text"
            name="message"
            id="message"
            maxLength={200}
            placeholder="Message..."
            autoComplete="off"
            ref={inputRef}
          />
          <IconButton className="emoji-button h-10 w-10">
            <Smiley size={20} color="black" />
          </IconButton>
          <IconButton className="attachment-button h-10 w-10">
            <Paperclip size={20} color="black" />
          </IconButton>
        </div>
        {/* <Picker
          data={data}
          onEmojiSelect={(e) => (inputRef.current.value += e.native)}
        /> */}
        <IconButton
          className="message-send-button"
          sx={{
            backgroundColor: "#1976d4",
            height: "40px",
            width: "60px",
            padding: "none",
            borderRadius: "10px",
            ":hover": { backgroundColor: "#1976d4" },
          }}
        >
          <PaperPlaneTilt size={20} color="white" />
        </IconButton>
      </form>
    </div>
  );
}

export default MessageBox;
