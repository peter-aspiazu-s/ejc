import { createTheme } from "@mui/material";
import { blueGrey, red, grey } from "@mui/material/colors";

export const darkTheme = createTheme({
    palette: {
        mode: 'light',
        
        primary: {
            main: blueGrey[900],
        },
        secondary: {
            main: red[800],
        },
        text: {
            primary: blueGrey[50],
            secondary: blueGrey[50], 
            disabled: blueGrey[50],
        },
        background: {
            paper: blueGrey[700],
            default: blueGrey[800],
        },
    }
})