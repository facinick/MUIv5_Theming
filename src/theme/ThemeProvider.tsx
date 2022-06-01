import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { ThemeProvider, createTheme, ThemeOptions } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import { useEffect } from "react";
import { color as ThemeColors } from "./index";

export const ThemeContext = React.createContext({
  toggleColorMode: () => {},
  shuffleColorTheme: () => {},
});

type MyThemeProviderProps = {
  children?: React.ReactNode;
};

export default function MyThemeProvider(props: MyThemeProviderProps) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [mode, setMode] = React.useState<"light" | "dark">(
    prefersDarkMode ? "dark" : "light"
  );
  const [theme, setTheme] = React.useState<0 | 1 | 2 | 3>(0);

  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, [prefersDarkMode]);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      shuffleColorTheme: () => {
        setTheme((prevTheme) => ((prevTheme + 1) % 4) as 0 | 1 | 2 | 3);
      },
    }),
    []
  );

  const _theme = React.useMemo(
    () => createTheme(ThemeColors[theme][mode] as ThemeOptions),
    [mode, theme]
  );

  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={_theme}>
        <GlobalStyles styles={{}} />
        <CssBaseline enableColorScheme />
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
