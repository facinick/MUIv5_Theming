import { useTheme } from "@mui/material/styles";
import { ThemeContext } from "../theme/ThemeProvider";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import IconButton from "@mui/material/IconButton";
import React from "react";

const ThemeModeSwitch = () => {
  const colorMode = React.useContext(ThemeContext);
  return (
    <IconButton
      style={{ borderRadius: "50px", border: "none" }}
      onClick={colorMode.shuffleColorTheme}
    >
      <ColorLensIcon color={"secondary"} />
    </IconButton>
  );
};

export default ThemeModeSwitch;
