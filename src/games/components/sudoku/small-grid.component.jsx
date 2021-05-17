import React from 'react';
import AnswerTile from './answer-tile.component';
import './small-grid.styles.scss';
import Tile from './tile.component';

const SmallGrid = ({ children, func, index }) => {
    return (
        <div className = 'small-grid'>
        {
            children.map((value, i) => {
                if (Array.isArray(value)) {
                    return <AnswerTile func = {func} answer = {value[0]} key = {value[1]} index = {value[1]}></AnswerTile>
                }
                return (<Tile key = {(index + 1) * 10 + i}>{value}</Tile>)
            })
    }
        </div>
    )
}

export default SmallGrid