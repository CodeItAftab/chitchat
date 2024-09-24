// import PropTypes from "prop-types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FriendRequestList from "./FriendRequestList";
import FriendList from "./FriendList";
import SentRequestList from "./SentRequestList";

function Friends() {
  return (
    <div className="lg:h-full h-[calc(100%-100px)] w-full flex flex-col items-center  ">
      <div className="w-full h-full  flex-grow  flex flex-col items-center   shrink-0 ">
        <Tabs
          defaultValue="account"
          className=" h-full  w-full flex flex-col items-center bg-white justify-between pt-4"
        >
          <TabsList className="sm:h-12 h-10 md:w-[600px] sm:w-[500px] w-[90%] felx items-center bg-slate-300   justify-evenly">
            <TabsTrigger
              className="font-sans px-8 sm:py-1 py-2 sm:text-base text-xs leading-none w-[32%] font-medium"
              value="account"
            >
              Friends
            </TabsTrigger>
            <TabsTrigger
              className="font-sans px-8 sm:py-1 py-2 sm:text-base text-xs leading-none w-[32%] font-medium"
              value="password"
            >
              Friend Request
            </TabsTrigger>
            <TabsTrigger
              className="font-sans px-8 sm:py-1 py-2 sm:text-base text-xs leading-none w-[32%] font-medium"
              value="email"
            >
              Sent Request
            </TabsTrigger>
          </TabsList>
          <TabsContent
            className="bg-slate-100 w-full h-[calc(100%-64px)] m-0"
            value="account"
          >
            <FriendList />
          </TabsContent>
          <TabsContent
            className="bg-slate-100 w-full h-[calc(100%-64px)] m-0"
            value="password"
          >
            <FriendRequestList />
          </TabsContent>
          <TabsContent
            className="bg-slate-100 w-full h-[calc(100%-64px)] m-0"
            value="email"
          >
            <SentRequestList />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Friends;
