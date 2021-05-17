import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Paragraph from '../../components/paragraph.component';
import PageTitle from '../../components/page-title.component';
import Sudoku from '../../components/sudoku/sudoku';
import '../template.styles.scss';
import CustomButton from '../../components/button/button.component';

const SudokuPage = ({ history }) => {
    const [passed, setPassed] = useState(false);

    const handlePass = (bool) => {
        setPassed(bool);
    }

    return(
        <div className = 'template-div'>
        <PageTitle>an attachment to the past</PageTitle>
        <Paragraph content = "Taizuyahira’s ghost gestured for you to follow him. You stumbled upon something. Upon further inspection, you realised that you found a piece of old scroll on the floor with boxes on it. Some were filled with letters, some empty. You wonder whether this is important..."></Paragraph>
        <Paragraph content = "'Traveller, after I left this world, I gave an important object away... finding it is crucial to your journey...'" ></Paragraph>
        <Sudoku handlePass = {handlePass} passed = {passed} ></Sudoku>
        <CustomButton 
            onClick = {() => {history.push('/quizaster')}}
            passed = {passed} 
            failPara = "Taizuyahira's spirit shakes its head... that is not what it was looking for."
            successPara = "Taizuyahira's spirit holds his neck and looks up... as if to symbolise something."
            />
        </div>
    )
}

export default withRouter(SudokuPage);