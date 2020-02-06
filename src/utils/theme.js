import { grey } from '@material-ui/core/colors';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import * as brandColors from './brand-colors';

export const palette = {
  primary: {
    ...brandColors.primary,
    contrastText: '#fff',
  },
  secondary: {
    ...brandColors.secondary,
    contrastText: '#fff',
  },
  error: {
    ...brandColors.danger,
    contrastText: '#fff',
  },
  grey: {
    ...brandColors.blueGrey,
    contrastText: '#fff',
  },
};

export default createMuiTheme({
  palette: {
    ...palette,
    contrastThreshold: 3,
  },
  typography: { fontWeight: 300 },
  overrides: {
    MuiAvatar: { colorDefault: {
      color: brandColors.grey[500],
      backgroundColor: brandColors.grey[200],
    } },
    MuiTableCell: { root: {
      padding: '.5em 1em',
      minWidth: 120,
    } },
    MuiButton: {
      contained: {
        backgroundColor: '#F8F8F8',
        boxShadow: 'none',
        color: brandColors.primary[600],
        fontWeight: 900,
        textTransform: 'none',
        '&:hover': {
          backgroundColor: brandColors.secondary[50],
          boxShadow: 'none',
          textDecoration: 'none',
        },
      },
      containedPrimary: {
        color: 'white',
        textTransform: 'none',
        '&:hover': { color: 'white' },
      },
      text: { textTransform: 'none' },
    },
    MuiCard: { root: { marginBottom: 10 } },
    MuiTypography: {
      root: { fontWeight: 300 },
      h1: {
        fontSize: '3em',
        lineHeight: '1.15em',
      },
      h2: { fontSize: '2.2em' },
      h3: {
        fontSize: '1.825em',
        margin: '20px 0 10px',
        lineHeight: '1.4em',
      },
      h4: {
        marginTop: '10px',
        marginBottom: '10px',
        fontSize: '1.3em',
      },
      h5: {
        fontSize: '1.25em',
        lineHeight: '1.4em',
      },
      subtitle1: { textTransform: 'unset' },
      body1: {
        fontSize: '1rem',
        fontWeight: '300',
        lineHeight: 1.5,
        letterSpacing: '.5px',
      },
      body2: {
        fontSize: '.875rem',
        fontWeight: '300',
        lineHeight: 1.5,
        letterSpacing: '.5px',
      },
      overline: {
        fontSize: '.8em',
        fontWeight: 500,
        margin: '10px 0',
        lineHeight: 1,
      },
      button: { textTransform: 'none' },
    },
    MuiBadge: { badge: { fontWeight: 600 } },
    MuiFab: { root: { backgroundColor: grey[400] } },
    MuiTabs: {
      indicator: { backgroundColor: 'white' },
      scroller: { overflowX: 'auto' },
    },
    MuiStepIcon: { text: {
      stroke: 'white',
      fontSize: '0.8rem',
    } },
    MuiStepper: { root: { padding: '1em' } },
    MuiPaper: {
      elevation3: {
        boxShadow: '0 0.375rem 1.5rem 0 rgba(140, 152, 164, 0.125) !important',
        border: `1px solid ${brandColors.grey[200]}`,
      },
      elevation4: {
        boxShadow: '0px 0px 1px -1px rgba(0,0,0,0.2), 0px -5px 0px 0px rgba(0,0,0,0.14), 0px 1px 16px 0px rgba(0,0,0,0.12)',
        border: `1px solid ${brandColors.grey[200]}`,
      },
    },
  },
});
