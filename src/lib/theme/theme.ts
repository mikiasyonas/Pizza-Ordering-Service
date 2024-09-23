import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#fa8524',
      light: '#fa8524',
      dark: '#fa8524',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
      light: '#ffffff',
      dark: '#ffffff',
      contrastText: '#ffffff',
    },
    success: {
      main: '#13deb9',
      light: '#E6FFFA',
      dark: '#02b3a9',
      contrastText: '#ffffff',
    },
    info: {
      main: '#7460ee',
      light: '#dedaf9',
      dark: '#1682d4',
      contrastText: '#ffffff',
    },
    error: {
      main: '#fa896b',
      light: '#FDEDE8',
      dark: '#f3704d',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ffb22b',
      light: '#FEF5E5',
      dark: '#ae8e59',
      contrastText: '#ffffff',
    },
  },
});

export default theme;
