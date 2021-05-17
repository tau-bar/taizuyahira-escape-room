import React from 'react';
import TextField from '@material-ui/core/TextField';
import green from '@material-ui/core/colors/green';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const TF = ({ onChange, correct, helperText }) => {
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
        inputProps={{style: {fontFamily: 'Itim'}}} 
        InputLabelProps={{style: {fontFamily: 'Itim'}}}
        FormHelperTextProps = {{style: {fontFamily: 'Itim'}}}
        helperText = "Capitalization is not important."
        color = {correct ? "primary" : "secondary"} 
        variant="outlined" 
        onChange = {onChange} 
        label="Answer the question."
        rows={4}
      className = "custom-text-field">
    </TextField>
    <p className = 'helper-text'>{helperText}</p>
    </ThemeProvider>
    </div>
  )
}

export default TF;