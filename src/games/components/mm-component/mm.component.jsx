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
                <TextField color = {correctNum ? "primary" : "secondary"} helperText="who did it?" id = {id} label="number here" variant="outlined" onChange = {e => handleNumAns(e, id)} placeholder="enter number here"></TextField>
                <TextField color = {correctAns ? "primary" : "secondary"} helperText="how did you deduce who did it? (two words)" id = {id} label="reason" variant="outlined" onChange = {e => handleAns(e, id)} placeholder="enter reason here"></TextField>
            </ThemeProvider>
            </div>
        </div>
        

    </div>
)}

export default MmComponent;