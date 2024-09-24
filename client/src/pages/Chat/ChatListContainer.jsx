import { Button } from "@mui/material";
import { Faders } from "phosphor-react";
// import { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import ChatListHeader from "./ChatListHeader";
import ChatListSearch from "./ChatListSearch";
import ChatList from "./ChatList";
// import { Outlet } from "react-router-dom";

function ChatListContainer() {
  const show = useSelector((state) => state.app.showMainBox);
  return (
    <div
      className={`chatList-container lg:h-full ${
        show ? "h-full" : "h-[calc(100%-100px)]"
      }  lg:w-[calc(100%-64px)] w-full flex  `}
    >
      <div
        className={`chats-container box-border overflow-auto  h-full lg:w-[340px] w-full lg:bg-blue-100 bg-white  flex flex-col gap-1 ${
          show && "chats-container-hide"
        }`}
      >
        <ChatListHeader />
        <ChatListSearch />
        <div className="w-full !h-10 px-4 py-2 shrink-0 flex items-center box-border">
          <label htmlFor="filterButton">
            <Faders size={20} color="#1976d2" />
          </label>
          <Button
            variant="text"
            id="filterButton"
            sx={{
              fontSize: "12px",
              lineHeight: "1",
              display: "flex",
              alignItems: "center",
            }}
            onClick={() => {
              console.log("clicked");
            }}
          >
            Filter Chats
          </Button>
        </div>
        <ChatList />
      </div>
      {show && (
        <div className="chat-box flex-grow h-full  ">
          <Outlet />
        </div>
      )}
    </div>
  );
}

export default ChatListContainer;
