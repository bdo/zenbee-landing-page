import React from 'react'
import {
  MuiThemeProvider,
  createMuiTheme,
} from 'material-ui/styles'
import './fonts/Graphik-Medium.css'

const pastelRed =  {
  300: '#ff9997',
  500: 'rgb(252, 103, 105)',
  700: '#f44336',
}
const moonsoon = 'rgb(119, 119, 119)'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      contrastText: pastelRed[500],
      light: 'rgba(255, 255,255, 0.8)',
      main: 'rgba(255, 255,255, 0.9)',
      dark: 'rgba(255, 255,255, 1.0)',
    },
    error: {
      main: '#ffffff',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        boxShadow: '0 4px 10px 0 rgba(0, 0, 0, 0.1)',
      },
      raised: {
        borderRadius: 'calc(1.4em + 2 * 14px)',
        textTransform: 'none',
        fontSize: '1.07rem',
        fontWeight: 'bold',
        padding: '14px 22px',
      },
    },
    MuiFormLabel: {
      root: {
        fontFamily: 'Graphik-Medium-Web',
        fontSize: '0.7rem',
        textTransform: 'uppercase',
        color: 'white',
      },
    },
    MuiInput: {
      root: {
        fontSize: '0.8rem',
        fontWeight: 'bold',
        color: 'white',
      },
      underline: {
        '&:before': {
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
        },
        '&$disabled:before': {
          backgroundColor: 'white',
        },
        '&:hover:not($disabled):before': {
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
        },
      },
    },
    MuiInputLabel: {
      shrink: {
        '@media (max-width: 800px)': {
          transform: 'translate(0, 1.5px)',
        }
      },
    },
    MuiMenuItem: {
      root: {
        fontSize: '0.95rem',
      },
    },
  },
  typography: {
    fontFamily: 'Comfortaa',
    title: {
      color: pastelRed[500],
      fontSize: '2.32rem',
      fontWeight: 'bold',
    },
    headline: {
      color: moonsoon,
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
    subheading: {
      color: pastelRed[500],
      fontSize: '1.15rem',
      fontWeight: 'bold',
    }
  }
})

function withRoot(Component) {
  function WithRoot(props) {
    return (
      <MuiThemeProvider theme={theme}>
        <Component {...props} />
      </MuiThemeProvider>
    )
  }

  return WithRoot
}

export default withRoot
