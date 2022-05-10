import { createTheme } from "@material-ui/core";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      mainGradient: "linear-gradient(to right,#ddd, #fff, #ddd)",
      contrastText: "#000",
    },
  },
});
export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: "#000",
      mainGradient: "linear-gradient(to right,#111, #1C0A00 , #111)",
      contrastText: "#fff",
    },
  },
});


