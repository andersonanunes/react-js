import { createTheme } from '@mui/material';
import { yellow } from '@mui/material/colors';
import { cyan } from '@mui/material/colors';

export const DarkTheme = createTheme({
    palette: {
        primary: {
            main: yellow[700] ,
            light: yellow[500],
            dark: yellow[800],
            contrastText: '#fff',
        },
        secondary: {
            main: cyan[500] ,
            light: cyan[300],
            dark: cyan[700],
            contrastText: '#fff',           
        },
        background: {
            default: '#01143A',
            paper: '#303134',
        }
    },
    typography: {
        allVariants: {
            color: 'white',
        }
    }
});