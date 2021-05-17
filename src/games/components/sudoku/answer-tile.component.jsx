import React from 'react';
import './answer-tile.styles.scss';

const AnswerTile = ({ func, answer, index }) => {
    return (
        <input onChange = {event => func(event, answer, index)} maxLength = "1" className = 'answer-tile'></input>
    )
}

export default AnswerTile;