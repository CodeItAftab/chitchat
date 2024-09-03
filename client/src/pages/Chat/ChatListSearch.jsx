import { MagnifyingGlass } from "phosphor-react";

function ChatListSearch() {
  return (
    <div className="search-container w-full h-[56px] shrink-0  flex items-center   pl-4 lg:pr-4 pr-2  ">
      <div className="flex items-center justify-center w-full border-[1px] rounded-[20px] bg-[#fafafa]">
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
  );
}

export default ChatListSearch;
