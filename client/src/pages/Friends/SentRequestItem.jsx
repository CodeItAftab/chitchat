import AvatarWithoutStatus from "@/components/custom/AvatarWithoutStatus";
import { faker } from "@faker-js/faker";
import { Button } from "@mui/material";

function SentRequestItem() {
  const name = faker.person.fullName();
  return (
    <li className="h-20 md:w-[700px] sm:w-[600px] w-[98%] bg-white flex items-center justify-between p-4 md:rounded-[12px] rounded-[8px] shadow-sm hover:shadow-md cursor-pointer select-none">
      <div className="flex items-center h-full gap-3">
        <div className="sm:h-14 sm:w-14 h-12 w-12 rounded-full">
          <AvatarWithoutStatus />
        </div>
        <div className=" flex flex-col gap-1">
          <h1 className="sm:text-xl text-base leading-none">
            {name.length > 20 ? name.slice(0, 18) + "..." : name}
          </h1>
          {faker.datatype.boolean() && (
            <span className="text-[12px] leading-none">2 mutual friends</span>
          )}
        </div>
      </div>
      <div className="button-container">
        <Button
          variant="outlined"
          sx={{ textTransform: "none" }}
          className="sm:h-auto sm:w-auto h-8s"
        >
          <span className="sm:text-base text-[12px] ">Cancel</span>
        </Button>
      </div>
    </li>
  );
}

export default SentRequestItem;
