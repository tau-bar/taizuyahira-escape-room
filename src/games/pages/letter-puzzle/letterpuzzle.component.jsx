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
        <Paragraph content = "You walked past what seems to be a familiar plank full of unknown runes. The walls suddenly shine 2 rows runes as if they were trying to tell you something."></Paragraph>
        <Paragraph content ="ᛏᚻᛖ ᛋᛏᚩᚾᛖ ᚻᚪᛋ ᛒᛖᛖᚾ ᛋᛏᚩᛚᛖᚾ."></Paragraph>
        <Paragraph content = " ᚠᛁᚾᛞ ᛏᚻᛖ ᛏᚻᛁᛖᚠ."></Paragraph>
        <Paragraph content = "Something here"></Paragraph>
        <img alt = "code" src = {coded} style={{width:"70vw", borderRadius:"10px"}} ></img>
        <CustomTextField 
        successPara = "you have been chosen. complete this mission."
        failPara = "improve thy reading of runes."
        multiline = {true}
        answer = "the stone has been stolen. find the thief."
        helperText = "Put a space between the two sentences, and end each row with a fullstop. Capitalization does not matter."
        nextRoute = "unforgiving-soul"
        label = "decrypted message"/>
    </div>
)

export default withRouter(LetterPuzzlePage);