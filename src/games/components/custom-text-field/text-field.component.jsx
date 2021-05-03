import React from 'react';
import './text-field.styles.scss';

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'green',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'red',
        },
        '&:hover fieldset': {
          borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'green',
        },
      },
    },
  })(TextField);

const TextField = ({ correct, onChange, label, placeholder }) => (

    <TextField 
    label = {label} 
    variant="outlined" 
    onChange = {onChange} 
    placeholder= {placeholder}
    className = "custom-text-field"
    ></TextField>
)

export default TextField;