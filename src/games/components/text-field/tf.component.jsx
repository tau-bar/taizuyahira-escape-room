import React from 'react';
import TextField from '@material-ui/core/TextField';
import green from '@material-ui/core/colors/green';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const TF = ({ onChange, correct, multiline, label, placeholder, helperText }) => {
  const theme = createMuiTheme({
    palette: {
      primary: {
          main: green[700],
      },
    },
  });
  return (
    <div className = "custom-text-field">
    <ThemeProvider theme = {theme} >
    <TextField 
        multiline = {multiline}
        color = {correct ? "primary" : "secondary"} 
        label={label}
        variant="outlined" 
        onChange = {onChange} 
        placeholder={placeholder}
        rows={4}
      className = "custom-text-field">
    </TextField>
    <p class = 'helper-text'>{helperText}</p>
    </ThemeProvider>
    </div>
  )
}

export default TF;