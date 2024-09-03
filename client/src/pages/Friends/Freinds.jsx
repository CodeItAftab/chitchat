import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FriendListItem from "./FriendListItem";
import FriendRequestListItem from "./FriendRequestListItem";

function Freinds() {
  return (
    <div className=" friends-container overflow-auto pt-4 lg:h-full lg:w-[380px] w-full h-[calc(100%-100px)] bg-white border-r-[1px] relative flex flex-col items-center gap-2">
      <Tabs
        defaultValue="Friends"
        className=" freinds-tab w-full flex flex-col items-center"
      >
        <TabsList className="w-11/12 h-11 flex gap-4 ">
          <TabsTrigger value="Friends" className=" w-[40%] ">
            Freinds
          </TabsTrigger>
          <TabsTrigger value="Friend Request" className="w-[40%]">
            Freind Request
          </TabsTrigger>
        </TabsList>
        <TabsContent
          className=" friends-tab w-11/12 py-2 overflow-auto"
          value="Friends"
        >
          <FriendListItem />
        </TabsContent>
        <TabsContent
          className=" friends-tab w-11/12 py-2 overflow-auto"
          value="Friend Request"
        >
          <FriendRequestListItem />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Freinds;
