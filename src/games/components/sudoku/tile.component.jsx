import React from 'react';
import './tile.styles.scss';

const Tile = ({ children }) => {
    return (
        <div className = "tile">
        {children}
        </div>
    )
}

export default Tile;