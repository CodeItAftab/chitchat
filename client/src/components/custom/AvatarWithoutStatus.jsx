import Avatar from "@mui/material/Avatar";
import { faker } from "@faker-js/faker";

function AvatarWithoutStatus() {
  return (
    <Avatar
      sx={{
        height: "100%",
        width: "100%",
        border: "1px solid rgba(0,0,0,0.2)",
      }}
      alt="Remy Sharp"
      src={faker.image.avatar()}
    />
  );
}

export default AvatarWithoutStatus;
