import React from 'react'
import { create } from 'jss'
import JssProvider from 'react-jss/lib/JssProvider'
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
  jssPreset,
} from 'material-ui/styles'
import './theme/fonts/Graphik-Medium.css'
import deepOrange from 'material-ui/colors/deepOrange'
import blue from 'material-ui/colors/blue'
import Reboot from 'material-ui/Reboot'

const pastelRed =  'rgb(252, 103, 105)'
const moonsoon = 'rgb(119, 119, 119)'

const theme = createMuiTheme({
  palette: {
    primary: {
      contrastText: "white",
      light: deepOrange[300],
      main: pastelRed,
      dark: deepOrange[700],
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
        fontSize: '1.07em',
        fontWeight: 'bold',
        padding: '14px 22px',
        boxShadow: '0 5px 5px 0px rgba(252, 103, 105, .25)',
      },
    },
  },
  typography: {
    fontFamily: 'Comfortaa',
    display1: {
      color: pastelRed,
      fontSize: '2.32em',
      fontWeight: 'bold',
    },
    subheading: {
      fontWeight: 'bold',
      color: moonsoon,
    },
  }
})

// Create a JSS instance with the default preset of plugins.
// It's optional.
const jss = create(jssPreset())

// The standard class name generator.
// It's optional.
const generateClassName = createGenerateClassName()

function withRoot(Component) {
  function WithRoot(props) {
    // JssProvider allows customizing the JSS styling solution.
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        {/* MuiThemeProvider makes the theme available down the React tree
          thanks to React context. */}
        <MuiThemeProvider theme={theme}>
          {/* Reboot kickstart an elegant, consistent, and simple baseline to build upon. */}
          <Reboot />
          <Component {...props} />
        </MuiThemeProvider>
      </JssProvider>
    )
  }

  return WithRoot
}

export default withRoot
