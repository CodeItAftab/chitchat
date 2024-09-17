import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FriendListItem from "./FriendListItem";
import FriendRequestListItem from "./FriendRequestListItem";
import AddFriendItem from "@/components/custom/AddFriendItem";

function Freinds() {
  return (
    <div className="h-full w-full flex overflow-hidden">
      <div className=" friends-container overflow-auto lg:pt-6 pt-2 lg:h-full lg:w-[380px] w-full h-[calc(100%-100px)] bg-white  relative flex flex-col items-center gap-2">
        <Tabs
          defaultValue="Friends"
          className=" freinds-tab w-full flex flex-col items-center"
        >
          <TabsList className="w-11/12 h-11 flex gap-4 bg-[#edf4ff] ">
            <TabsTrigger value="Friends" className=" w-[45%] ">
              Freinds
            </TabsTrigger>
            <TabsTrigger value="Friend Request" className="w-[44%]">
              Freind Request
            </TabsTrigger>
          </TabsList>
          <TabsContent
            className=" friends-tab w-11/12 py-2 overflow-auto"
            value="Friends"
          >
            <FriendListItem />
            <FriendListItem />
            <FriendListItem />
            <FriendListItem />
          </TabsContent>
          <TabsContent
            className=" friends-tab w-11/12 py-2 overflow-auto"
            value="Friend Request"
          >
            <FriendRequestListItem />
            <FriendRequestListItem />
            <FriendRequestListItem />
            <FriendRequestListItem />
          </TabsContent>
        </Tabs>
      </div>
      <div className="  people-you-may-know flex-grow h-full bg-white lg:flex hidden flex-col z-10">
        <div className="people-you-may-know-header h-12 w-full flex items-center justify-center shrink-0">
          <h1 className="text-2xl">People you may know</h1>
        </div>
        <div className="friends-suggestion-container w-full h-[calc( 100%-48px)] p-4 grid grid-cols-6 gap-3 overflow-auto shrink-0">
          <AddFriendItem />
          <AddFriendItem />
          <AddFriendItem />
          <AddFriendItem />
          <AddFriendItem />
          <AddFriendItem />
          <AddFriendItem />
          <AddFriendItem />
          <AddFriendItem />
          <AddFriendItem />
          <AddFriendItem />
          <AddFriendItem />
          <AddFriendItem />
          <AddFriendItem />
        </div>
      </div>
    </div>
  );
}

export default Freinds;
