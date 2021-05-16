import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PageTitle from '../../components/page-title.component';
import Paragraph from '../../components/paragraph.component';
import './riddles.styles.scss'
import CustomTextField from '../../components/custom-text-field/text-field.component';
import CustomButton from '../../components/button/button.component';

const RiddlesPage = ({ history }) => {
    const [correct, setCorrect] = useState(false);
    const handleAns = (event) => {
        if (event.target.value == "honour") {
            setCorrect(true);
        } else {
            setCorrect(false);
        }
    }
    return (
    <div className = 'unscramble'>
        <PageTitle>unscramble</PageTitle>
        <Paragraph content='some story here about why need to unscramble'></Paragraph>
        <p className = 'code'>유,ਓ,ρ,ಒ,Ն, ح</p>
        <CustomTextField 
        correct = {correct}
        onChange = {handleAns}
        label="???"
        helperText = "sometimes, the RIGHT answer is not immediately HIGHLIGHTED..."
        ></CustomTextField>
        <CustomButton
        passed = {correct}
        failPara ="you cannot proceed"
        successPara = "you may proceed"
        onClick = {() => history.push('/c3')}></CustomButton>
        // insert hints here

    </div>
)}

export default withRouter(RiddlesPage);