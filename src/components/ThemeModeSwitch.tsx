import { useTheme } from "@mui/material/styles";
import { ThemeContext } from "../theme/ThemeProvider";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ToggleButton from "@mui/material/ToggleButton";
import React from "react";

const ThemeSwitch = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ThemeContext);
  return (
    <ToggleButton
      style={{ borderRadius: "50px", border: "none" }}
      title={theme.palette.mode === "dark" ? "Light Mode" : "Dark Mode"}
      value="check"
      onChange={colorMode.toggleColorMode}
    >
      {theme.palette.mode === "dark" && <LightModeIcon color={"secondary"} />}
      {theme.palette.mode === "light" && <DarkModeIcon color={"secondary"} />}
    </ToggleButton>
  );
};

export default ThemeSwitch;
