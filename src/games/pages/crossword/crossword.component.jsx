import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Crossword from '@jaredreisinger/react-crossword';
import PageTitle from '../../components/page-title.component';
import Paragraph from '../../components/paragraph.component';
import './crossword.styles.scss';
import CustomButton from '../../components/button/button.component';
import { ThemeProvider } from 'styled-components'
import { Button } from '@material-ui/core';
import cave from '../../../stuff/cave2.jpg';
 
const data = {
    across: {
        1: {
          clue: 'Earth. Fire. Air. Water. Only the Avatar can master all four elements and bring _ _ _ _ _ _ _ to the world.',
          answer: 'BALANCE',
          row: 3,
          col: 9,
        },
        2: {
          clue: 'Treat others how you want to be treated. This saying is also known as The G_ _ _ _ _ _    _ _ _ _.',
          answer: 'GOLDEN-RULE',
          row: 4,
          col: 3,
        },
        3: {
          clue: 'A question',
          answer: 'INQUIRY',
          row: 5,
          col: 10,
        },
        4: {
          clue: 'The process of transformation from an immature form to an adult form in two or more distinct stages.',
          answer: 'METAMORPHOSIS',
          row: 6,
          col: 2,
        },
        5: {
          clue: 'Relating to the moon',
          answer: 'LUNAR',
          row: 7,
          col: 7,
        },
        6: {
          clue: 'Eternal life',
          answer: 'IMMORTALITY',
          row: 8,
          col: 0,
        },
        7: {
          clue: 'FOC camp theme',
          answer: 'LEGENDEUS',
          row: 9,
          col: 3,
        },
        8: {
          clue: 'The line where the sky meets the sea.',
          answer: 'HORIZON',
          row: 10,
          col: 6,
        },
        9: {
          clue: 'Costs an arm and a leg',
          answer: 'EXPENSIVE',
          row: 11,
          col: 4,
        },
        10: {
          clue: 'Already seen before',
          answer: 'DEJA-VU',
          row: 12,
          col: 7,
        },
        11: {
          clue: 'Dusk ',
          answer: 'TWILIGHT',
          row: 13,
          col: 10,
        },
        
      },
      down: {
        12: {
          clue: 'the name of the cave flipped',
          answer: 'ARIHAYUZIAT',
          row: 3,
          col: 10,
        },
      }
  }

// Crossword documentation 
// https://www.npmjs.com/package/@jaredreisinger/react-crossword

const CrosswordPage = ({ history }) => {
    const [solved, setSolved] = useState(false);
    const crosswordRef = React.useRef(null);
    const handleSolve = () => {
        setTimeout(() => {
            setSolved(crosswordRef.current.isCrosswordCorrect());
        }, 200);
    }
    const toNext = () => {
        history.push('/c2');
    }
    
    const theme = {
        gridBackground : 'black'
    }
    return (
        <div className = "crossword">
            <PageTitle>crossroads</PageTitle>
            <img src = {cave} style={{width:"70vw", borderRadius:"10px"}}/>
            <Paragraph content="You enter the cave and a stone door shuts close. *how eerie…* .There is a map on the floor. On the map are tiles representing the inner structure of the cave, as well as some hints. Beside the map, there was also a big stick (presumably for drawing on the ground). At the end of the cave, there are stone doors which are sealed shut. You rack your brain as you try to figure out what to do..."></Paragraph>
            <div className = 'puzzle'>
            <ThemeProvider theme = {theme}>
            <Crossword 
            ref ={crosswordRef} 
            className='puzzle' 
            onCellChange = {handleSolve} 
            data = {data}/>
            </ThemeProvider>
            </div>
            <Button onClick = {() => crosswordRef.current.reset()} variant="contained" color="secondary">
              reset
            </Button>
            <CustomButton onClick = {toNext} passed = {solved} failPara = "the stone doors are closed shut" successPara = "the stone doors open..."/>
        </div>
    )
}

export default withRouter(CrosswordPage);