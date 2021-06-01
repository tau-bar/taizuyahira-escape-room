import React from 'react';
import { withRouter } from 'react-router-dom';
import coded from '../../../stuff/morse-code.png'
import PageTitle from '../../components/page-title.component';
import Paragraph from '../../components/paragraph.component';
import CustomTextField from '../../components/custom-text-field/text-field.component';
import './letterpuzzle.styles.scss';
import '../template.styles.scss';

const LetterPuzzlePage = ({ history }) => (
    <div className = 'template-div'>
        <PageTitle>a message</PageTitle>
        <Paragraph content = "You proceed having passed the first trial. Taizuyahira's spirit tails you and proceeds to ask:"></Paragraph>
        <Paragraph content = "'Now, to understand sage knowledge you have to have a certain level of intelligence... do you possess that, traveller?'"></Paragraph>
        <Paragraph content = "You walk past what seems to be a plank full of unknown runes. The walls suddenly shine 2 rows of runes as if they were trying to tell you something."></Paragraph>
        <pre className = 'runes'>ᛏᚻᛖ  ᛋᛏᚩᚾᛖ  ᚻᚪᛋ  ᛒᛖᛖᚾ ᛋᛏᚩᛚᛖᚾ.</pre>
        <pre className = 'runes'>ᚠᛁᚾᛞ  ᛏᚻᛖ  ᛏᚻᛁᛖᚠ.</pre>
        <Paragraph content = "It seems that the plank and runes replicate something you use for your own daily tasks."></Paragraph>
        <img alt = "code" src = {coded} style={{width:"900px", borderRadius:"10px"}} ></img>
        <Paragraph content = "What do the walls tell you?"></Paragraph>
        <CustomTextField 
        successPara = "You have been chosen. Proceed with the mission."
        failPara = "Improve thy reading of runes."
        multiline = {true}
        answer = "the stone has been stolen. find the thief."
        helperText = "Put a space between the two sentences, and end each row with a fullstop."
        nextRoute = "unforgiving-soul"
        label = "Decrypt the mesage."/>
    </div>
)

export default withRouter(LetterPuzzlePage);