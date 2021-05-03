import React, { useState } from 'react';
import './mm.styles.scss';
import TextField from '@material-ui/core/TextField';


const MmComponent = ({ correctNum, correctAns, handleAns, handleNumAns, img, id }) => {
    return (
    <div>
        <div className = 'mm-section'>
            <img className = 'photo' src = {img}></img>
            <div className = 'mm-answer'>
                <TextField id = {id} label="Number here" variant="outlined" onChange = {e => handleNumAns(e, id)} placeholder="Enter number here"></TextField>
                <TextField id = {id} label="Reason" variant="outlined" onChange = {e => handleAns(e, id)} placeholder="Enter reason here"></TextField>
            </div>
        </div>
        

    </div>
)}

export default MmComponent;