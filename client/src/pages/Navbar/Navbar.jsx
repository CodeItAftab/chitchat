// import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { faker } from "@faker-js/faker";
import { IconButton } from "@mui/material";
import {
  Chats,
  MagnifyingGlass,
  Users,
  Phone,
  Gear,
  Moon,
  Sun,
  ChatsTeardrop,
  UserCircle,
  SignOut,
  GearSix,
  MoonStars,
  Question,
} from "phosphor-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "@/app/slices/auth";
import { Switch } from "@/components/ui/switch";
// import AvatarWithoutStatus from "@/components/custom/AvatarWithoutStatus";

function Navbar() {
  const [day, setDay] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const current_url = window.location.pathname;

  const showNavbar = useSelector((state) => state.app.showMainBox);
  return (
    <nav
      className={` lg:h-full lg:w-20 w-full h-12 lg:bg-[#edf4ff] ${
        current_url == "/search" ? "bg-blue-100" : "bg-white"
      } flex lg:flex-col justify-between z-[11] lg:shadow-[0px_0px_2px_#00000026]   navbar ${
        showNavbar && "lg:flex hidden"
      }`}
    >
      <div className="flex lg:flex-col lg:justify-start justify-between lg:h-full lg:w-20 w-full h-12 lg:gap-12">
        <header className="logo-container lg:w-full lg:h-16 w-16 h-full  leading-none flex items-center justify-center">
          <IconButton onClick={() => navigate("/")}>
            <ChatsTeardrop size={32} color="#1976d4" weight="fill" />
          </IconButton>
        </header>
        <ul className="nav-items-list flex lg:w-full lg:h-56 lg:flex-col items-center  lg:gap-3 lg:py-4  ">
          <li
            className={`nav-item w-16 lg:h-16 h-12  lg:flex items-center justify-center rounded-sm  hidden `}
          >
            <NavLink to="/inbox">
              {({ isActive }) =>
                isActive ? (
                  <IconButton>
                    <Chats size={28} color="#1976d4" weight="fill" />
                  </IconButton>
                ) : (
                  <IconButton>
                    <Chats size={28} color="black" />
                  </IconButton>
                )
              }
            </NavLink>
          </li>
          <li
            className={`nav-item w-[calc(100%-0.75rem)] h-12  lg:flex items-center justify-center rounded-sm  hidden `}
          >
            <NavLink to={"friends"}>
              {({ isActive }) =>
                isActive ? (
                  <IconButton>
                    <Users size={28} color="#1976d4" weight="fill" />
                  </IconButton>
                ) : (
                  <IconButton>
                    <Users size={28} color="black" />
                  </IconButton>
                )
              }
            </NavLink>
          </li>
          <li
            className={`nav-item w-[calc(100%-0.75rem)] h-12  lg:flex items-center justify-center rounded-sm  hidden `}
          >
            <NavLink to={"search"}>
              {({ isActive }) =>
                isActive ? (
                  <IconButton>
                    <MagnifyingGlass size={28} color="#1976d4" weight="fill" />
                  </IconButton>
                ) : (
                  <IconButton>
                    <MagnifyingGlass size={28} color="black" />
                  </IconButton>
                )
              }
            </NavLink>
          </li>
          <li
            className={`nav-item w-[calc(100%-0.75rem)] h-12  lg:flex items-center justify-center rounded-sm  hidden `}
          >
            <NavLink to={"calls"}>
              {({ isActive }) =>
                isActive ? (
                  <IconButton>
                    <Phone size={28} color="#1976d4" weight="fill" />
                  </IconButton>
                ) : (
                  <IconButton>
                    <Phone size={28} color="black" />
                  </IconButton>
                )
              }
            </NavLink>
          </li>

          {/* <Separator className="w-[36px] h-[2px] lg:block hidden my-2" /> */}
          <li className="nav-item w-[calc(100%-0.75rem)] h-12  lg:flex items-center justify-center rounded-sm  hidden ">
            <NavLink to={"/settings"}>
              {({ isActive }) =>
                isActive ? (
                  <IconButton>
                    <Gear size={28} color="#1976d4" weight="fill" />
                  </IconButton>
                ) : (
                  <IconButton>
                    <Gear size={28} color="black" />
                  </IconButton>
                )
              }
            </NavLink>
          </li>

          <li className="nav-item w-[calc(100%-0.75rem)] h-12  flex items-center justify-center rounded-sm  lg:hidden mx-4 ">
            <Sheet>
              <SheetTrigger asChild>
                <IconButton
                  className="p-0 mr-2 hover:bg-transparent"
                  sx={{
                    border: "1px solid rgba(0,0,0,0.5)",
                    padding: "0",
                  }}
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={faker.image.avatar()} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </IconButton>
              </SheetTrigger>
              <SheetContent side={"right"} className="w-full">
                <SheetHeader className="items-start">
                  <SheetTitle className="flex items-center justify-center gap-2 ">
                    <ChatsTeardrop size={28} color="#1976d4" weight="fill" />
                    <h2 className="text-2xl font-normal leading-none">Viby</h2>
                  </SheetTitle>
                </SheetHeader>
                <ul className="sidebar-menu h-full w-full flex flex-col justify-between grow  py-8">
                  <div className="w-full flex flex-col gap-2">
                    {/* <li className="w-full h-[56px] px-2 flex gap-2 text-lg leading-none items-center justify-between self-end bg-slate-100 rounded-lg">
                      <div className="h-full w-1/2 flex items-center gap-2">
                        <div className="h-8 w-8 shrink-0">
                          <AvatarWithoutStatus />
                        </div>
                        UserName
                      </div>
                    </li> */}
                    <li className="w-full h-[48px]  flex gap-2 text-lg leading-none items-center hover:text-[#1976d4] ">
                      <UserCircle size={20} />
                      View Profile
                    </li>
                    <Separator />
                    <li className="w-full h-[48px]  flex gap-2 text-lg leading-none items-center hover:text-[#1976d4]">
                      <GearSix size={20} />
                      Settings
                    </li>
                    <Separator />
                    <li className="w-full h-[48px]  flex gap-2 text-lg leading-none items-center hover:text-[#1976d4]">
                      <Question size={20} />
                      Help
                    </li>
                    <Separator />
                    <li
                      className="w-full h-[48px]  flex gap-2 text-lg leading-none items-center hover:text-[#1976d4]"
                      onClick={() => dispatch(logout())}
                    >
                      <SignOut size={20} />
                      Logout
                    </li>
                  </div>
                  <li className="w-full h-[56px] px-2 flex gap-2 text-lg leading-none items-center justify-between self-end bg-slate-100 rounded-lg">
                    <div className="h-full w-1/2 flex items-center gap-2 leading-none">
                      <MoonStars size={20} />
                      <span className="leading-none">Dark Mode</span>
                    </div>
                    <Switch />
                  </li>
                </ul>
              </SheetContent>
            </Sheet>
          </li>
        </ul>
      </div>
      <ul className="nav-footer lg:flex flex-col items-center gap-2 py-4  hidden">
        <li className="nav-item w-[calc(100%-0.75rem)] h-12  flex items-center justify-center rounded-sm ">
          <IconButton
            className="p-0 hover:bg-transparent"
            onClick={() => {
              setDay((prevDay) => !prevDay);
            }}
          >
            {day ? (
              <Moon size={28} color="black" />
            ) : (
              <Sun size={28} color="black" />
            )}
          </IconButton>
        </li>
        <li className="nav-item w-[calc(100%-0.75rem)] h-12  flex items-center justify-center rounded-sm ">
          <DropdownMenu className="ml-4">
            <DropdownMenuTrigger className="border-none  outline-none focus:outline-none">
              <IconButton size="small">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={faker.image.avatar()} />
                  <AvatarFallback>User</AvatarFallback>
                </Avatar>
              </IconButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="ml-4">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex gap-2 items-center">
                <UserCircle size={18} /> View Profile
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex gap-2 items-center"
                onClick={() => dispatch(logout())}
              >
                <SignOut size={18} />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
