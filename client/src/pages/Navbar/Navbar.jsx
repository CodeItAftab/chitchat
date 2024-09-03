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
  FramerLogo,
} from "phosphor-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [day, setDay] = useState(true);

  const showNavbar = useSelector((state) => state.app.showMainBox);
  return (
    <nav
      className={` lg:h-full lg:w-20 w-full h-12 lg:bg-[#77bcff45] bg-white flex lg:flex-col justify-between z-[11]  lg:shadow-[0_0_2px_rgba(0,0,0,0.25)] navbar ${
        showNavbar && "lg:flex hidden"
      }`}
    >
      <div className="flex lg:flex-col lg:justify-start justify-between lg:h-full lg:w-20 w-full h-12 lg:gap-12">
        <header className="logo-container lg:w-full lg:h-16 w-16 h-full  leading-none flex items-center justify-center">
          <IconButton>
            <FramerLogo size={28} color="black" />
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
          <IconButton size="small">
            <Avatar className="h-8 w-8">
              <AvatarImage src={faker.image.avatar()} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </IconButton>
          {/* <Button variant="ghost" className="bg-transparent p-0">
            <Avatar className="h-8 w-8">
              <AvatarImage src={faker.image.avatar()} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Button> */}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
