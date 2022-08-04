import {
  Box,
  Card,
  CardContent,
  Checkbox,
  CircularProgress,
  Slider,
  Switch,
  TextField,
  TextFieldProps,
  Typography,
  useTheme,
} from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import DarkModeSwitch from "./DarkModeSwitch";
import ThemeColorShuffle from "./ThemeColorShuffle";

const StyledTextField = styled(TextField)<TextFieldProps>(({ theme }) => ({
  color: theme?.palette?.containerSecondary?.contrastText,
  backgroundColor: theme?.palette?.containerSecondary?.main,
  "& .MuiInputBase-root": {
    color: theme?.palette?.containerSecondary?.contrastText,
  },
  "& .MuiInputLabel-root": {
    color: theme?.palette?.containerSecondary?.contrastText,
  },
}));

export const Main = () => {
  const theme = useTheme();

  return (
    <Card>
      <CardContent>
        <Stack direction="column" spacing={5}>
          <Stack direction="row" spacing={5}>
            <DarkModeSwitch />
            <ThemeColorShuffle />
          </Stack>
          <Stack direction="row" spacing={5}>
            <Button variant={"contained"} color={"primary"}>
              Primary Button
            </Button>
            <Button variant={"contained"} color={"secondary"}>
              Secondary Button
            </Button>
            <Button variant={"contained"} color={"upvote"}>
              Custom Button
            </Button>
          </Stack>
          <Stack direction="row" spacing={5}>
            <TextField value={"Un styled text field"} color={"primary"} />
            <StyledTextField
              value={"styled text field"}
              multiline
              size="small"
              rows={4}
            />
          </Stack>
          <Stack alignItems={"center"} direction="row" spacing={5}>
            <Switch defaultChecked />
            <Checkbox color={"primary"} defaultChecked />
            <Checkbox color={"error"} defaultChecked />
            <Checkbox color={"secondary"} defaultChecked />
            <Slider />
          </Stack>
          <Stack alignItems={"center"} direction="row" spacing={5}>
            <Box
              sx={{
                color: theme?.palette?.containerSecondary?.contrastText,
                backgroundColor: theme?.palette?.containerSecondary?.main,
                padding: 1,
              }}
            >
              <Typography>Use Theme</Typography>
            </Box>
            <CircularProgress color={"downvote"} />
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};
