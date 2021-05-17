import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './text-field.styles.scss';
import TextField from '@material-ui/core/TextField';
import green from '@material-ui/core/colors/green';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CustomButton from '../button/button.component';

const CustomTextField = ({ successPara, failPara, nextRoute, history, answer, multiline, label, placeholder, helperText }) => {
  const [correct, setCorrect] = useState(false);
  const onChange = (event) => {
    if (event.target.value.toLowerCase() === answer) {
        setCorrect(true);
    } else {
        setCorrect(false);
    }
  }
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
    <CustomButton
          passed = {correct}
          failPara = {failPara}
          successPara = {successPara}
          onClick = {() => history.push('/' + nextRoute)}/>
    </div>
  )
}

export default withRouter(CustomTextField);