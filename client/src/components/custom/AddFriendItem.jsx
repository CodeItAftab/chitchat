import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { faker } from "@faker-js/faker";

import AvatarWithoutStatus from "@/components/custom/AvatarWithoutStatus";

import { Button } from "@mui/material";

function AddFriendItem() {
  const name = faker.person.fullName();

  return (
    <Card className="h-[190px] w-[160px] flex flex-col items-center justify-center gap-1 shrink-0">
      <CardHeader className="h-[90px] w-[90px] p-0">
        <AvatarWithoutStatus />
      </CardHeader>
      <CardContent className="font-medium w-full text-center p-2">
        {name.length > 16 ? name.slice(0, 13) + "..." : name}
      </CardContent>
      <CardFooter className="p-0">
        <Button variant="outlined" sx={{ height: "30px", width: "140px" }}>
          Add friend
        </Button>
      </CardFooter>
    </Card>
  );
}

export default AddFriendItem;
