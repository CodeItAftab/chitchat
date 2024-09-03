import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { faker } from "@faker-js/faker";
import { useState } from "react";

function AvatarWithStatus() {
  const [isOnline, setIsOnline] = useState(true);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: isOnline ? "#44b700" : "orange",
      color: isOnline ? "#44b700" : "orange",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: isOnline ? "ripple 1.2s infinite ease-in-out" : "",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  return (
    <StyledBadge
      sx={{ height: "100%", width: "100%" }}
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      variant="dot"
    >
      <Avatar
        sx={{
          height: "100%",
          width: "100%",
          border: "1px solid rgba(0,0,0,0.2)",
        }}
        alt="Remy Sharp"
        src={faker.image.avatar()}
      />
    </StyledBadge>
  );
}

export default AvatarWithStatus;
