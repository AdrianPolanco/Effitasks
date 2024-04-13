import { Theme, createTheme } from "@mui/material";

export const mainTheme: Theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#00cd98",
            light: "#d7fef7",
            dark: "#00f9d7",
            contrastText: "#404040",
        },
        secondary: {
            main: "#7ff0ff",
            light: "#b4f6fe",
            dark: "#00cae4",
            contrastText: "#000000",
        },
    },
});
