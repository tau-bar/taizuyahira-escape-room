import React from 'react';
import { withRouter } from 'react-router-dom';

const CrosswordPage = ({ history }) => (
    <div className = 'welcome'>
        <h1 className = 'title'>
            Crossword Puzzle goes here
        </h1>
    </div>
)

export default withRouter(CrosswordPage);