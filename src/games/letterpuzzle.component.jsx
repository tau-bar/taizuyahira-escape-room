import React from 'react';
import { withRouter } from 'react-router-dom';

const LetterPuzzlePage = ({ history }) => (
    <div className = 'welcome'>
        <h1 className = 'title'>
            Letter Puzzle goes here
        </h1>
    </div>
)

export default withRouter(LetterPuzzlePage);