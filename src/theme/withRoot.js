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
import Reboot from 'material-ui/Reboot'

const pastelRed =  {
  300: '#ff9997',
  500: 'rgb(252, 103, 105)',
  700: '#f44336',
}
const moonsoon = 'rgb(119, 119, 119)'

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#f3f1f1',
    },
    primary: {
      contrastText: "white",
      light: pastelRed[300],
      main: pastelRed[500],
      dark: pastelRed[700],
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
        color: '#87888c',
      },
    },
    MuiInput: {
      root: {
        fontSize: '0.95rem',
        fontWeight: 'bold',
        color: '#5D5F65',
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
          <Reboot />
          <Component {...props} />
        </MuiThemeProvider>
      </JssProvider>
    )
  }

  return WithRoot
}

export default withRoot
