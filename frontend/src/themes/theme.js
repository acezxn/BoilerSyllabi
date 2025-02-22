import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: "#8E6F3E", // Primary interface elements
            contrastText: "#FFFFFF",
        },
        secondary: {
            main: "#6E5B40", // Secondary interface elements
            contrastText: "#FFFFFF",
        },
        error: {
            main: "#BA1A1A", // For elements the user should be aware of (errors)
            contrastText: "#FFFFFF",
        },
        warning: {
            main: "#FBC02D", // For potentially dangerous actions or important messages
            contrastText: "#000000",
        },
        info: {
            main: "#29B6F6", // For highlighting neutral information
            contrastText: "#000000",
        },
        success: {
            main: "#388E3C", // For indicating successful actions
            contrastText: "#FFFFFF",
        },
        background: {
            default: "#FFF8F3", // Background color
            paper: "#FFF8F3", // Paper surface color
        },
        text: {
            primary: "#201B13", // Primary text color
        },
    },
});