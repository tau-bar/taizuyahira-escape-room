import React from 'react';
import { withRouter } from 'react-router-dom';

const IntroPage = ({ history }) => (
    <div className = 'welcome'>
        <h1 className = 'title'>
            TAIZUYAHIRA'S CAVE
            <button onClick = {() => history.push('/challenge1')}>enter...</button>
        </h1>
    </div>
)

export default withRouter(IntroPage);