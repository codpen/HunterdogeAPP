import {createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
  defaultProps: {
    MuiInput: {

      disableUnderline: true, // <---------
  
    }
  },
  // overrides: {
  //   MuiInputBase: {
  //     input: {
  //       textTransform: "uppercase"
  //     }
  //   }
  // },
  components: {
    // Name of the component
    MuiTypography: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontFamily: 'Raleway, sans-serif',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          borderTopLeftRadius: '25px',
          borderTopRightRadius: '25px',
          width: '163px',
          fontSize: 16,
          fontWeight: 600,
          padding: '23px 0',
          color: '#B78300',
          border: '3px solid #FFF3D4',
          borderBottom: '0',
          filter: 'drop-shadow(5px 5px 0px rgba(0, 0, 0, 0.1))',
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontStyle: 'normal',
          textTransform: 'uppercase',
          borderBottom: '3px solid #FAF0CB',
          padding: '6px 16px',
        },
        head: {
          fontFamily: 'MonsterHunter',
          fontSize: 26,
          fontWeight: 400,
          padding: '14px 16px',
          color: '#AB882E',
          
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: 15,
          color: '#FFFFFF',
          backgroundColor: '#AB882E',
          borderRadius: '25px',
          padding: '10px 16px',
          lineHeight: '15px',
          filter: 'drop-shadow(5px 5px 0px rgba(0, 0, 0, 0.1))',
          '&:hover': {
            backgroundColor: '#d5b562',
        },
        },
      },
      variants: [
        {
          props: { variant: 'large' },
          style: {
            width: '100%',
            padding: '20px 16px',
            fontSize: 18,
            fontWeight: 700,
            filter: 'none'
          },
        },
        {
          props: { variant: 'more' },
          style: {
            fontSize: 45,
            color: '#AB882E',
            backgroundColor: '#fff',
            padding: '0 0 25px 0',
            minWidth: '35px',
            height: '35px'
            // fontWeight: 700,
            // lineHeight: '45px',
          },
        },
        
      ],
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#AB882E',
          filter: 'drop-shadow(1px 3px 0px rgba(0, 0, 0, 0.1))',
          '&:hover': {
            backgroundColor: '#d5b562',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          padding: '6px 14px',
          color: '#AB882E'
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '25px',
          border: '2px solid #B78300',
          backgroundColor: '#FFFBE2',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
        },
      },
    },
    MuiInput: {
      
      styleOverrides: {
        root: {
          
        }
      }
    },
    //УБРАТЬ ПОДЧЕРКИВАНИЕ ИНПУТОВ и ДОБАВИТЬ ОБЩИЕ СТИЛИ
    MuiInputBase: {
      // disableUnderline: true,
      styleOverrides: {
        // disableUnderline: true,
        // underline: {
        //   "&&&:before": {
        //     borderBottom: '5px solid red',
        //   },
        //   "&&&:after": {
        //     borderBottom: '5px solid red'
        //   }
        // },
        root: {
          // MuiInput: {
          //   root:{
          //     "&&&:before": {
          //       borderBottom: '5px solid red'
          //     },
          //     "&&&:after": {
          //       borderBottom: '5px solid red'
          //     }
          //   }
          // },
          // disableUnderline: true,

          color: "#AB882E",
          borderRadius: "25px",
          backgroundColor: "white",
          border: "2px solid #B78300",
          filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',

          // '&&&:hover:not(.Mui-disabled):before': {
          //   borderBottom: 'none',
          // },
          // '&&&:after': {
          //   borderBottom: 'none',
          // },
          // '&&&:before': {
          //   borderBottom: '2px solid red',
          // },
        },
      },
    },
  },
  typography: {
    fontFamily: 'Raleway, sans-serif',
    h3: {
      fontSize: 26,
      fontWeight: 700,
      color:'#B78300',
      textTransform: 'uppercase',
      letterSpacing: 0.5
    },
    h4: {
      fontSize: 20,
      fontWeight: 900,
      color:'#B78300',
      textTransform: 'uppercase'
    },
    h5: {
      fontSize: 17,
      fontWeight: 900,
      color:'#B78300',
      textTransform: 'uppercase'
    },
    h6: {
      fontSize: 18,
      fontWeight: 700,
      color:'#B78300',
      textTransform: 'uppercase'
    },
    
    caption: {
      fontSize: 12,
      fontWeight: 700,
      lineHeight: '19px',
      color:'#96FF95'
    },
    subtitle1: {
      fontSize: 20,
      fontWeight: 700,
      letterSpacing: 0,
      color: '#FAF0CB'
    },
    body1: {
      fontSize: 16,
      fontWeight: 700,
      color:'#B78300'
    },
    body2: {
      fontSize: 11,
      fontWeight: 500,
      color:'#B78300',
      lineHeight: '10px',
      fontStyle: 'italic'
    },
    table: {
      fontSize: 18,
      fontWeight: 500,
      color:'#B78300',
      lineHeight: '10px',
    },
  },
});

console.log(theme);