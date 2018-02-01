import React from 'react'
import { create } from 'jss'
import JssProvider from 'react-jss/lib/JssProvider'
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
  jssPreset,
} from 'material-ui/styles'
import './fonts/Graphik-Medium.css'
import blue from 'material-ui/colors/blue'

const pastelRed =  {
  300: '#ff9997',
  500: 'rgb(252, 103, 105)',
  700: '#f44336',
}
const moonsoon = 'rgb(119, 119, 119)'

const theme = createMuiTheme({
  palette: {
    type: 'light',
    background: {
      default: 'white',
    },
    primary: {
      contrastText: pastelRed[500],
      light: 'white',
      main: 'white',
      dark: 'white',
    },
    secondary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
    },
  },
  overrides: {
    MuiButton: {
      raised: {
        borderRadius: 'calc(1.4em + 2 * 14px)',
        textTransform: 'none',
        fontSize: '1.07rem',
        fontWeight: 'bold',
        padding: '14px 22px',
        boxShadow: '0 5px 5px 0px rgba(252, 103, 105, .25)',
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
        fontSize: '0.95rem',
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

const jss = create(jssPreset())

const generateClassName = createGenerateClassName()

function withRoot(Component) {
  function WithRoot(props) {
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>
          <Component {...props} />
        </MuiThemeProvider>
      </JssProvider>
    )
  }

  return WithRoot
}

export default withRoot
