import AddFriendItem from "@/components/custom/AddFriendItem";

import { MagnifyingGlass } from "phosphor-react";

function SearchPage() {
  return (
    <div className="h-full w-full flex items-center justify-center overflow-hidden">
      <div
        className={` friends-container overflow-auto pt-4 lg:h-full lg:w-[380px] w-full h-[calc(100%-100px)] bg-white border-r-[1px] relative flex flex-col items-center gap-2`}
      >
        <div className="search-container w-[calc(100%-0.5rem)] h-[56px] shrink-0  flex items-center   pl-4 lg:pr-4 pr-2  ">
          <div className="flex items-center justify-center w-full border-[1px] rounded-[20px] bg-[ghostwhite]">
            <label htmlFor="searchInput">
              <MagnifyingGlass size={24} />
            </label>
            <input
              className=" lg:h-10 h-11 w-10/12 rounded-[16px] pl-6 lg:pb-[2px] outline-none text-inherit bg-transparent"
              id="searchInput"
              type="text"
              placeholder="Search messages..."
            />
          </div>
        </div>
        <ul className="freind-search-result friends-tab w-11/12 py-2 overflow-auto"></ul>
      </div>
      <div className="  people-you-may-know flex-grow h-full bg-white lg:flex hidden flex-col z-10">
        <div className="people-you-may-know-header h-12 w-full flex items-center justify-center shrink-0">
          <h1 className="text-2xl">People you may know</h1>
        </div>
        <div className="friends-suggestion-container w-full h-[calc(100%-48px)] p-4 grid grid-cols-6 gap-3 overflow-auto shrink-0">
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

export default SearchPage;
