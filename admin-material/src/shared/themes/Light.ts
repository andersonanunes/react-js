import { createTheme } from '@mui/material/styles';
import { cyan } from '@mui/material/colors';

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: '#01143A' ,
            light: '#D4E6FF',
            dark: '#01143A',
            contrastText: '#fff',
        },
        secondary: {
            main: cyan[500] ,
            light: cyan[300],
            dark: cyan[700],
            contrastText: '#fff',           
        },
        background: {
            default: '#D4E6FF' ,
            paper: '#fff',
        },
        text: {
            primary: '#01143A' ,
            secondary: '#01143A' ,
            disabled: '#f7f7f7' ,
        }
    }
});