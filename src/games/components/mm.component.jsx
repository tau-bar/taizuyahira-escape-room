import React from 'react';
import './mm.styles.scss';

const MmComponent = ({ componentInput, handleAns ,ansInput, numPassed, handleNumAns, passed, img, currentLevel, handler }) => (
    <div>
        <div className = 'mm-text'>
            find out who is the murderer scum.
        </div>

        <div className = 'mm-section'>
            <img className = 'photo' src = {img}></img>
            <div className = 'mm-answer'>
                <label>Who is the murderer?</label>
                <input value = {ansInput} onChange = {handleNumAns} className = 'answer' placeholder="Enter number here"></input>
                
                <label>Why?</label>
                <textarea onChange = {handleAns} value = {componentInput} className = 'answer-big' placeholder="Enter reason here"></textarea>
                {numPassed && passed && <button onClick = {handler}>proceed...</button>}
                
            </div>
        </div>
        

    </div>
)

export default MmComponent;