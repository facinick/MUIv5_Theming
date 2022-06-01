import Stack from "@mui/material/Stack";
import ThemeSwitch from "./ThemeModeSwitch";
import ThemeModeSwitch from "./ThemeSwitch";

const NavBar = (): JSX.Element => (
  <Stack
    justifyContent={"center"}
    alignItems={"center"}
    direction="row"
    spacing={5}
  >
    <ThemeModeSwitch />
    <ThemeSwitch />
  </Stack>
);

export default NavBar;
