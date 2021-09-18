import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#252530',
        },
        secondary: {
            main: '#fafafa',
        },
        background: {
            default: '#252530',
        },
        text: {
            primary: '#fff',
            secondary: '#f4f4f4',
        },
    },
    typography: {
        fontFamily: [
            '"Poppins"',
            'Roboto',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
});

export default theme;
