// ----------------------------------------------------------------------

export default function CssBaseline() {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          '*::-webkit-scrollbar': {
            width: '0.1em'
          },
          // '*::-webkit-scrollbar-track': {
          //   '-webkit-box-shadow': 'inset 0 0 1px rgba(0,0,0,0.00)',
          //   margin: '5rem 0 5rem 0'
          // },
          // '*::-webkit-scrollbar-thumb': {
          //   backgroundColor: 'rgba(0,0,0,.1)',
          //   outline: '1px solid slategrey'
          // }
        },
        html: {
          width: '100%',
          height: '100%',
          WebkitOverflowScrolling: 'touch',
        },
        body: {
          width: '100%',
          height: '100%',
        },
        '#root': {
          width: '100%',
          height: '100%',
        },
        input: {
          '&[type=number]': {
            MozAppearance: 'textfield',
            '&::-webkit-outer-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
            '&::-webkit-inner-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
          },
        },
        img: {
          display: 'block',
          maxWidth: '100%',
        },
        
      },
    },
  };
}
