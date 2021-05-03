import React from 'react';
import { withRouter } from 'react-router-dom';

const RiddlesPage = ({ history }) => (
    <div className = 'welcome'>
        <h1 className = 'title'>
            Riddles goes here
        </h1>
    </div>
)

export default withRouter(RiddlesPage);