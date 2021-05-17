import React from 'react';
import PageTitle from '../../components/page-title.component';
import Paragraph from '../../components/paragraph.component';
import './riddles.styles.scss'
import CustomTextField from '../../components/custom-text-field/text-field.component';
import cave from '../../../stuff/cave2.jpg';
import spirit from '../../../stuff/spirit.jpg'

const RiddlesPage = () => {

    return (
    <div className = 'unscramble'>
    <PageTitle>the trials of taizuyahira</PageTitle>
        <Paragraph content='As you proceed through the door, a spirit manifests in front of you! Ahead of you there are many holes in the cave, which do you enter?'></Paragraph>
        <img style={{width:"60vw", borderRadius:"10px"}} alt = "cave" src = {cave}></img>
        <Paragraph content = "'Traveller, I am Taizuyahira, the guardian of this cave. Only travellers with three qualities are allowed to discover the secrets within the cave... the right way will only be shown if you possess the first.'" ></Paragraph>
        <img style={{width:"40vw", borderRadius:"10px"}} alt = "cave" src = {spirit}></img>
        <Paragraph content = "'Now, before you travel further, tell me... do you possess the first value?'" ></Paragraph>
        <Paragraph content = "You realise that you are now chained to the infamous Trials of Taizuyahira, that many of your friends and allies have attempted to obtain sage knowledge but have failed and gone missing... can you do it?"></Paragraph>
        <Paragraph content = "You start to look around the cave for even a slightest hint..." ></Paragraph>
        <p className = 'code'>유,ਓ,ρ,ಒ,Ն, ح</p>
        <CustomTextField 
        successPara = "You possess the value. Proceed."
        failPara = "You do not have it."
        multiline = {false}
        label="What is the value?"
        answer = 'honour'
        helperText = "sometimes, the RIGHT answer is not immediately HIGHLIGHTED..."
        nextRoute = "a-message"
        ></CustomTextField>
    </div>
)}

export default RiddlesPage;