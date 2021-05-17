import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import CustomButton from '../../components/button/button.component';
import PageTitle from '../../components/page-title.component';
import Paragraph from '../../components/paragraph.component';
import TF from '../../components/text-field/tf.component';
import '../template.styles.scss';
import troll from '../../../stuff/troll.jpg';

const QuestionsPage = ({ history }) => {
    const [correct1, setCorrect1] = useState(false);
    const [correct2, setCorrect2] = useState(false);
    const [correct3, setCorrect3] = useState(false);
    const [correct4, setCorrect4] = useState(false);
    return (
        <div className = 'template-div'>
            <PageTitle>question title</PageTitle>
            <Paragraph content = "After you completed the puzzle, you felt confident of your intelligence. But just when things seemed great, a troll appears." ></Paragraph>
            <img alt = "troll" src = {troll} style={{height:"50vh", borderRadius:"10px"}}></img>
            <Paragraph content = "'You think you’re so smart? Answer these questions and you can pass. My FIRST and only advice is: you must pay close attention.'" ></Paragraph>
            <Paragraph content = "What is the name of the Greek mythology creature who turns people into a stone when looked at directly into their eyes?" ></Paragraph>
            <TF correct = {correct1} onChange = {e => {setCorrect1(e.target.value.toLowerCase() === "medusa")}} ></TF>
            <Paragraph content = "What type of flower is the Singapore’s National Flower aka Vanda Miss Joaquim?" ></Paragraph>
            <TF correct = {correct2} onChange = {e => {setCorrect2(e.target.value.toLowerCase() === "orchid")}} ></TF>
            <Paragraph content = "What is a fruit and also a colour?" ></Paragraph>
            <TF correct = {correct4} onChange = {e => {setCorrect4(e.target.value.toLowerCase() === "orchid")}} ></TF>
            <Paragraph content = "What is the longest river in the world?" ></Paragraph>
            <TF correct = {correct3} onChange = {e => {setCorrect3(e.target.value.toLowerCase() === "orchid")}} ></TF>
            <CustomButton
            passed = {correct1 && correct2 && correct3 && correct4}
            successPara = "The troll says : 'you indeed are smart enough'"
            failPara = "The troll mocks your intelligence... *sigh*"
            onClick = {() => history.push("/finished")} ></CustomButton>
        </div>
    )
}

export default withRouter(QuestionsPage);