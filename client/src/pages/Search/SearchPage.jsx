import { Input } from "@/components/ui/input";
import { IconButton } from "@mui/material";

import { MagnifyingGlass, UsersThree } from "phosphor-react";
import { useEffect, useState } from "react";
import SearchResultItem from "./SearchResultItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "@/app/slices/user";

function SearchPage() {
  const [searchInp, setSearchInp] = useState("");
  const disptach = useDispatch();

  useEffect(() => {
    document.title = "Search People";
    disptach(fetchAllUsers());
  }, []);

  const { allUsers } = useSelector((state) => state.user);
  console.log(allUsers);

  return (
    <div className="lg:h-full h-[calc(100%-100px)] w-full flex flex-col items-center  ">
      <div className="w-full md:h-60 h-32 bg-blue-100 flex flex-col items-center justify-center md:gap-7 sm:gap-3 gap-2 shrink-0 ">
        <header className="search-page-header md:h-20 sm:h-12 h-10 w-full py-4  flex items-center justify-center p-2">
          <h1 className="md:text-4xl sm:text-2xl text-lg leading-none">
            Find People Who Share Your Vibe
          </h1>
        </header>
        <form className="search-people-form flex  justify-center md:gap-4 gap-2 sm:h-24 h-16 w-full  ">
          <Input
            type="text"
            className="sm:h-12 h-11 md:w-[500px] sm:w-[360px] w-[280px] shadow-sm focus-visible:ring-offset-0 focus-visible:ring-[#1976d4] focus-visible:ring-1 rounded-md px-6"
            placeholder="Search for people"
            value={searchInp}
            onChange={(e) => setSearchInp(e.target.value)}
          />
          <IconButton
            variant="contained"
            type="submit"
            sx={{
              borderRadius: "4px",
              backgroundColor: "#1976d4",
              padding: "0",
              ":hover": {
                backgroundColor: "#1976d4",
              },
            }}
            className="sm:h-12 sm:w-12 h-11 w-11"
          >
            <MagnifyingGlass color="white" />
          </IconButton>
        </form>
      </div>
      <main className="serch-result-container flex-grow w-full  flex flex-col sm:p-4 p-2  bg-slate-100 overflow-hidden">
        <ul className="search-result-container w-full min-h-fit max-h-fit flex-grow flex flex-col items-center sm:gap-2 gap-1 overflow-auto">
          {allUsers?.map((user) => (
            <SearchResultItem user={user} key={user._id} />
          ))}
        </ul>
        {/* {!searchInp && (
          <div className="people-you-may-know-list-container flex flex-col gap-4">
            <header className="h-8 w-full flex items-center gap-4 ">
              <UsersThree size={24} />
              <h2 className="md:text-xl sm:text-lg text-base leading-none">
                People you may know
              </h2>
            </header>
            <ul className="people-you-may-know-list "></ul>
          </div>
        )} */}
      </main>
    </div>
  );
}

export default SearchPage;
