import { createTheme } from '@mui/material/styles'

export const tema = createTheme({
  palette: {
    primary: {
      main: '#552834',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f7f4f4',
      paper: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#4d4d4d',
    },
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
    h3: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
  },
})
