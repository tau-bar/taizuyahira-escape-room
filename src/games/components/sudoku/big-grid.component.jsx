import React from 'react';
import './big-grid.styles.scss';
import SmallGrid from './small-grid.component';

const BigGrid = ({ children, func }) => {
    return ( 
    <div className = 'big-grid'>
        {children.map((value, index) => {
            return (<SmallGrid func = {func} index = {index} key = {index} >{value}</SmallGrid>)
        })}
    </div>)
}

export default BigGrid;