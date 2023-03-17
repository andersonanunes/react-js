import { createTheme } from '@mui/material/styles';
import { cyan } from '@mui/material/colors';

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: '#1E2D9E' ,
            light: '#E6E6FF',
            dark: '#1E2D9E',
            contrastText: '#fff',
        },
        secondary: {
            main: '#1E2D9E',
            light: cyan[300],
            dark: '#1E2D9E',
            contrastText: '#fff',           
        },
        background: {
            default: '#E6E6FF' ,
            paper: '#fff',
        },
        text: {
            primary: '#01143A' ,
            secondary: '#01143A' ,
            disabled: '#f7f7f7' ,
        }
    }
});