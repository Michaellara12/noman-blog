import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

function createGradient(color1, color2) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#E9EEF9',
  400: '#CDD6EA',
  500: '#92A2C2',
  600: '#5E7197',
  700: '#3B4B6B',
  800: '#2B374F',
  900: '#142037',
  500_8: alpha('#919EAB', 0.08),
  500_12: alpha('#919EAB', 0.12),
  500_16: alpha('#919EAB', 0.16),
  500_24: alpha('#919EAB', 0.24),
  500_32: alpha('#919EAB', 0.32),
  500_48: alpha('#919EAB', 0.48),
  500_56: alpha('#919EAB', 0.56),
  500_80: alpha('#919EAB', 0.8),
};

const PRIMARY = {
  lighter: '#FFE6DE',
  light: '#FFBDA8',
  main: '#FF7F55',
  dark: '#DF5436',
  darker: '#A13020',
  contrastText: '#fff',
};

const SECONDARY = {
  lighter: '#D4F9EE',
  light: '#9BD8D4',
  main: '#008D8C',
  dark: '#006261',
  darker: '#003932',
  contrastText: '#fff',
};

const INFO = {
  lighter: '#C9D4E9',
  light: '#6E7C96',
  main: '#2B374F',
  dark: '#1B2447',
  darker: '#141E42',
  contrastText: '#fff',
};

const SUCCESS = {
  lighter: '#BDFFD3',
  light: '#56EA88',
  main: '#1BB951',
  dark: '#008756',
  darker: '#003E3A',
  contrastText: GREY[800],
};

const WARNING = {
  lighter: '#FFFAF3',
  light: '#FDF3E7',
  main: '#F4E2CC',
  dark: '#DFC5A5',
  darker: '#C17950',
  contrastText: GREY[800],
};

const ERROR = {
  lighter: '#FDC6DD',
  light: '#EB5392',
  main: '#E9116A',
  dark: '#CE0F6B',
  darker: '#820448',
  contrastText: '#fff',
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};

const CHART_COLORS = {
  violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
  blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
  green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
  yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
  red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4'],
};

const palette = {
  common: { black: '#000', white: '#fff' },
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  grey: GREY,
  gradients: GRADIENTS,
  chart: CHART_COLORS,
  divider: GREY[500_24],
  text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
  background: { paper: '#FFF', default: GREY[200], neutral: GREY[200] },
  action: {
    active: GREY[600],
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;