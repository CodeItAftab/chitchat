import AvatarWithoutStatus from "@/components/custom/AvatarWithoutStatus";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IconButton } from "@mui/material";
import { Pencil, CalendarIcon } from "lucide-react";
import { ArrowLeft } from "phosphor-react";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function UpdateProfile() {
  const [date, setDate] = useState();

  const navigate = useNavigate();

  return (
    <div className="min-h-full w-full flex flex-col bg-slate-100 pb-8">
      <header className="form-container lg:h-16 h-12 w-full flex items-center gap-2 px-4 ">
        <IconButton onClick={() => navigate(-1)}>
          <ArrowLeft size={20} color="black" />
        </IconButton>
        <h1 className="lg:text-2xl text-lg leading-none">Edit Profile</h1>
      </header>
      <form className="lg:h-[calc(100%-64px)] h-[calc(100%-48px)] w-full mx-auto flex  flex-col lg:gap-10 justify-center items-center ">
        <div className=" flex w-full lg:flex-row flex-col lg:gap-16 justify-center items-center">
          <div className="avatar-container lg:py-8 py-4">
            <div className="avatar-box lg:h-[300px] lg:w-[300px] w-[200px] h-[200px] rounded-full bg-slate-400 relative">
              <div className="avatar h-full w-full rounded-full">
                <AvatarWithoutStatus />
              </div>
              <div className="avatar-edit-button absolute bottom-0 right-8 bg-[#1976d4] h-10 w-10  rounded-full flex items-center justify-center">
                <IconButton>
                  <label htmlFor="avatar">
                    <Pencil color="white" />
                  </label>
                </IconButton>
              </div>
              <input type="file" name="avatar" id="avatar" hidden />
            </div>
            <div className="user-details-container"></div>
          </div>
          <div className="user-info-inputs h-fit w-fit grid lg:grid-cols-2 grid-cols-1  gap-8 lg:p-8 p-4 items-center ">
            <div className="flex flex-col w-[320px] gap-2">
              <Label htmlFor="">Name</Label>
              <Input id="name" type="name" placeholder="Your Name" required />
            </div>
            <div className="flex flex-col w-[320px] gap-2">
              <Label htmlFor="">Date of Birth</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="flex flex-col w-[320px] gap-2">
              <Label htmlFor="">Gender</Label>
              <Select id="gender">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Your Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col w-[320px] gap-2">
              <Label htmlFor="">Relationship</Label>
              <Select id="relationship">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Your Relationship" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="single">Single</SelectItem>
                  <SelectItem value="in a relationship">
                    In a relationship
                  </SelectItem>
                  <SelectItem value="married">Married</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col lg:w-auto w-[320px]  gap-2 lg:col-span-2 ">
              <Label htmlFor="bio">Your Bio</Label>
              <Textarea placeholder="Type your bio here." id="bio" />
            </div>
          </div>
        </div>
        <div className="submit-button-container h-16 w-full flex flex-col lg:px-[7rem] lg:items-end items-center justify-center  ">
          <Button type="submit" className=" lg:w-32 w-[320px]">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}

export default UpdateProfile;
