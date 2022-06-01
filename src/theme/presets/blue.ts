import { createTheme } from "@mui/material/styles";
import { AppTheme } from "..";

const { palette } = createTheme();

export const theme: AppTheme = {
  dark: {
    palette: {
      mode: "dark",
      primary: palette.augmentColor({
        color: {
          main: "#cdbeff",
          contrastText: "#32009a",
        },
      }),
      secondary: palette.augmentColor({
        color: {
          main: "#cac3dc",
          contrastText: "#322e41",
        },
      }),
      text: {
        primary: "#e6e1e6",
        secondary: "#e6e1e6",
      },
      background: {
        default: "#1c1b1e",
        paper: "#1c1b1e",
      },
      error: palette.augmentColor({
        color: {
          main: "#ffb4a9",
          contrastText: "#680003",
        },
      }),
      success: palette.augmentColor({
        color: {
          main: "#79dd72",
          contrastText: "#003a03",
        },
      }),
      info: palette.augmentColor({
        color: {
          main: "#99cbff",
          contrastText: "#003257",
        },
      }),
      warning: palette.augmentColor({
        color: {
          main: "#cace09",
          contrastText: "#313300",
        },
      }),
      divider: "#938f99",
      upvote: palette.augmentColor({
        color: {
          main: "#cdbeff",
          contrastText: "#32009a",
        },
      }),
      downvote: palette.augmentColor({
        color: {
          main: "#ffb4a9",
          contrastText: "#680003",
        },
      }),
      containerPrimary: palette.augmentColor({
        color: {
          main: "#4b24ba",
          contrastText: "#e8deff",
        },
      }),
      containerSecondary: palette.augmentColor({
        color: {
          main: "#494458",
          contrastText: "#e7dff8",
        },
      }),
    },
  },
  light: {
    palette: {
      mode: "light",
      primary: palette.augmentColor({
        color: {
          main: "#6342d2",
          contrastText: "#ffffff",
        },
      }),
      secondary: palette.augmentColor({
        color: {
          main: "#605b71",
          contrastText: "#ffffff",
        },
      }),
      text: {
        primary: "#1c1b1e",
        secondary: "#1c1b1e",
      },
      background: {
        default: "#fffbff",
        paper: "#fffbff",
      },
      error: palette.augmentColor({
        color: {
          main: "#ba1b1b",
          contrastText: "#ffffff",
        },
      }),
      success: palette.augmentColor({
        color: {
          main: "#006e10",
          contrastText: "#ffffff",
        },
      }),
      info: palette.augmentColor({
        color: {
          main: "#0062a2",
          contrastText: "#ffffff",
        },
      }),
      warning: palette.augmentColor({
        color: {
          main: "#606200",
          contrastText: "#313300",
        },
      }),
      divider: "#79757f",
      upvote: palette.augmentColor({
        color: {
          main: "#6342d2",
          contrastText: "#ffffff",
        },
      }),
      downvote: palette.augmentColor({
        color: {
          main: "#ba1b1b",
          contrastText: "#ffffff",
        },
      }),
      containerPrimary: palette.augmentColor({
        color: {
          main: "#e8deff",
          contrastText: "#1c0062",
        },
      }),
      containerSecondary: palette.augmentColor({
        color: {
          main: "#e7dff8",
          contrastText: "#1d192b",
        },
      }),
    },
  },
};
