import {  IconButton } from '@mui/material';

import { ReactComponent as IconComponent } from '../../images/loupe_ico.svg';
import { Fragment } from 'react';
import { InputBase } from '@material-ui/core';

const SearchInput = ({ placeholder, small, padding, mr, mb }) => {
  return(
    <Fragment>
      <InputBase
        placeholder={placeholder ? placeholder : 'search for name, contract address'}
        fullWidth

        sx={{
          mb: mb? mb : 0,
          padding: padding ? padding : '0 5px 0 35px',
          mr: mr ? mr : 0
        }}
      >      
      </InputBase>
      {
        small 
          ? <IconComponent style={{ stroke: '#B78300', position: 'absolute', left: '10px', top: '7px'}}/>
          : <IconButton aria-label="search"
            sx={{
              height: '35px',
            }}
          >
          <IconComponent style={{ stroke: 'white'}}/>
        </IconButton>  
      }
      
    </Fragment>
  )
}

export default SearchInput;