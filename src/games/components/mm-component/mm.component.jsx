import React from 'react';
import './mm.styles.scss';
import TextField from '@material-ui/core/TextField';
import green from '@material-ui/core/colors/green';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


const MmComponent = ({ correctNum, correctAns, handleAns, handleNumAns, img, id }) => {
    const theme = createMuiTheme({
        palette: {
          primary: {
              main: green[700],
          },
        },
      });
    return (
    <div>
        <div className = 'mm-section'>
            <img alt = "murder-mystery" className = 'photo' src = {img}></img>
            <div className = 'mm-answer'>
            <ThemeProvider theme = {theme}>
                <TextField 
                inputProps={{style: {fontFamily: 'Itim'}}} 
                InputLabelProps={{style: {fontFamily: 'Itim'}}}
                FormHelperTextProps = {{style: {fontFamily: 'Itim'}}}
                color = {correctNum ? "primary" : "secondary"} 
                helperText="Enter a single digit." 
                id = {id + 1} label="Who did it?" 
                variant="outlined" 
                onChange = {e => handleNumAns(e, id)} 
                placeholder="Number"></TextField>
                <TextField 
                inputProps={{style: {fontFamily: 'Itim'}}} 
                InputLabelProps={{style: {fontFamily: 'Itim'}}}
                FormHelperTextProps = {{style: {fontFamily: 'Itim'}}}
                color = {correctAns ? "primary" : "secondary"} helperText="Capitalization is not important. 2 word answer." 
                id = {id + 2} label="How do you know?" variant="outlined" onChange = {e => handleAns(e, id)} placeholder="Reason"></TextField>
            </ThemeProvider>
            </div>
        </div>
        

    </div>
)}

export default MmComponent;