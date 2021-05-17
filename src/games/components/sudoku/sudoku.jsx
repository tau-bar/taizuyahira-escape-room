import React from 'react';
import BigGrid from './big-grid.component';
import '../../pages/template.styles.scss';
import './sudoku.styles.scss';


const test = [["L", "H", "C", "N", "A", "M", ["K", 1000], "E", "B"],
["N", ["E", 1001], "M", "L","B", "K", "A","H","C"],
["B", "K", "A", "E", ["C", 1002], "H", "M","L","N"],
["M", "C", ["A", 1003], "B","K", "E", "H","N","L"],
["B", "K", "N", "H","A", ["L", 1004], "C","M","E"],
["H", "E", "L", "N","M", ["C", 1005], "A","B","K"],
["C", "M", "K", "E","B", ["N", 1006], "A","L","H"],
["E", "N", "A", "K","L", "H", "M","C","B"],
["L", "H", "B", "C","A", "M", "K","N",["E", 1007]]]


const Sudoku = ({ handlePass }) => {
    var answers = [false, false, false, false, false, false, false, false];
    const handleChange = (event, answer, index) => { 
        console.log(answers);
        if (event.target.value === answer) {
            answers[index - 1000] = true;
        } else {
            answers[index - 1000] = false;
        }
        handlePass(answers.filter(v => v).length === 8)
    }

    return (
        <div className = 'template-div'>
            <div className = 'sudoku-game'>
            <BigGrid func = {handleChange} >{test}</BigGrid>
            </div>
            
        </div>
    )
}

export default Sudoku;