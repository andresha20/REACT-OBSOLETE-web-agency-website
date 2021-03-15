import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Oswald',
        'sans-serif',
      ].join(','),
      fontWeightLight: 70,
      fontWeightRegular: 400,
      fontWeightMedium: 700,
    },
    palette: {
        primary: {
          main: '#0487B2',
          
        },
        secondary: {
          main: '#e8761e',
          contrastText: "#ffffff"
        },
        text: {
          primary: '#ffffff'
        }
    }
});

export default theme;