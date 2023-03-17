import { createTheme } from '@mui/material';
import { yellow } from '@mui/material/colors';
import { cyan } from '@mui/material/colors';

export const DarkTheme = createTheme({
    palette: {
        primary: {
            main: '#2A40DE' ,
            light: yellow[500],
            dark: '#303134',
            contrastText: '#e0e0e0',
        },
        secondary: {
            main: cyan[500] ,
            light: '#e0e0e0',
            dark: cyan[700],
            contrastText: '#e0e0e0',           
        },
        background: {
            default: '#303134',
            paper: '#424242',
        },
        text: {
            primary: '#e0e0e0',
        },
        
    },
    typography: {
        allVariants: {
            color: 'white',
        }
    },
});