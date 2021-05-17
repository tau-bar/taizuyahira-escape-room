import React, { useState } from 'react';
import Paragraph from '../../components/paragraph.component';
import PageTitle from '../../components/page-title.component';
import Sudoku from '../../components/sudoku/sudoku';
import '../template.styles.scss';
import CustomButton from '../../components/button/button.component';

const SudokuPage = () => {
    const [passed, setPassed] = useState(false);

    const handlePass = (bool) => {
        setPassed(bool);
    }

    return(
        <div className = 'template-div'>
        <PageTitle>a clue?</PageTitle>
        <Paragraph content = "Taizuyahira’s ghost gestured for you to follow him. You stumbled upon something. Upon further inspection, you realised that you found a piece of old scroll on the floor with boxes on it. Some were filled with letters, some empty. You wonder whether this is important..."></Paragraph>
        <Sudoku handlePass = {handlePass} passed = {passed} ></Sudoku>
        <CustomButton 
            passed = {passed} 
            failPara = "you're not intelligent enough to pass through..."
            successPara = "taizuyahira's ghost has acknowledged your intelligence..."
            />
        </div>
    )
}

export default SudokuPage;