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
    const [correct5, setCorrect5] = useState(false);
    return (
        <div className = 'template-div'>
            <PageTitle>a quizaster</PageTitle>
            <Paragraph content = "After you completed the puzzle, you felt confident of your intelligence. But just when things seemed great, a troll appears." ></Paragraph>
            <img alt = "troll" src = {troll} style={{height:"50vh", borderRadius:"10px"}}></img>
            <Paragraph content = "'You think you’re so smart? Answer these questions and you can pass. My FIRST and only advice is: you must pay close attention.'" ></Paragraph>
            <Paragraph content = "What is the largest cat species?" ></Paragraph>
            <TF correct = {correct1} onChange = {e => {setCorrect1(e.target.value.toLowerCase() === "tiger")}} ></TF>
            <Paragraph content = "A cold country with red, white and blue?" ></Paragraph>
            <TF correct = {correct2} onChange = {e => {setCorrect2(e.target.value.toLowerCase() === "russia")}} ></TF>
            <Paragraph content = "What does the Avatar control?" ></Paragraph>
            <TF correct = {correct4} onChange = {e => {setCorrect4(e.target.value.toLowerCase() === "elements")}} ></TF>
            <Paragraph content = "Which pandemic virus originated from West Africa?" ></Paragraph>
            <TF correct = {correct3} onChange = {e => {setCorrect3(e.target.value.toLowerCase() === "ebola")}} ></TF>
            <Paragraph content = "You answer the questions confidently, but something seems off... those questions were just TOO easy! The troll smirks and begins mocking you:"/>
            <Paragraph content = "'Ha! You seriously think those easy questions were the test? Think again. What's the secret code?'"/>
            <Paragraph content = "You think to yourself ... what could the secret code be?"/>
            <Paragraph content = "What is the secret code?"></Paragraph>
            <TF correct = {correct5} onChange = {e => {setCorrect5(e.target.value.toLowerCase() === "tree")}} ></TF>
            <CustomButton
            passed = {correct1 && correct2 && correct3 && correct4 && correct5}
            successPara = "The troll acknowledges your intelligence."
            failPara = "The troll mocks and laughs your intelligence, or rather the lack of it! ... *sigh*"
            onClick = {() => history.push("/a-scroll")} ></CustomButton>
        </div>
    )
}

export default withRouter(QuestionsPage);