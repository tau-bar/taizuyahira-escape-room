import React, { useState } from 'react';
import './text-field.styles.scss';
import TextField from '@material-ui/core/TextField';
import green from '@material-ui/core/colors/green';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { InputLabel } from '@material-ui/core';

const CustomTextField = ({ correct, onChange, label, placeholder, helperText }) => {
  const [ht,  setHt] = useState(false);
  const theme = createMuiTheme({
    palette: {
      primary: {
          main: green[700],
      },
    },
  });
  return(
    <ThemeProvider theme = {theme}>
    <TextField 
      color = {correct ? "primary" : "secondary"} 
      label={label}
      variant="outlined" 
      onChange = {onChange} 
      onFocus = {() => console.log("test")}
      placeholder={placeholder}>
    </TextField>
    <p class = 'helper-text'>{helperText}</p>
    </ThemeProvider>
)}

export default CustomTextField;