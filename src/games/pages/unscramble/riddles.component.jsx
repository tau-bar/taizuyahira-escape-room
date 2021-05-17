import React from 'react';
import PageTitle from '../../components/page-title.component';
import Paragraph from '../../components/paragraph.component';
import './riddles.styles.scss'
import CustomTextField from '../../components/custom-text-field/text-field.component';

const RiddlesPage = () => {

    return (
    <div className = 'unscramble'>
        <PageTitle>unscramble</PageTitle>
        <Paragraph content='some story here about why need to unscramble'></Paragraph>
        <p className = 'code'>유,ਓ,ρ,ಒ,Ն, ح</p>
        <CustomTextField 
        multiline = {false}
        label="???"
        answer = 'honour'
        helperText = "sometimes, the RIGHT answer is not immediately HIGHLIGHTED..."
        nextRoute = "c3"
        ></CustomTextField>
    </div>
)}

export default RiddlesPage;