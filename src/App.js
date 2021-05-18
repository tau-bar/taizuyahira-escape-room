import './App.css';
import React from 'react';
import Header from './games/components/header/header.component';
import IntroPage from './games/pages/intro-page/introduction.component';
import CrosswordPage from './games/pages/crossword/crossword.component';
import RiddlesPage from './games/pages/unscramble/riddles.component';
import LetterPuzzlePage from './games/pages/letter-puzzle/letterpuzzle.component';
import FindMurdererPage from './games/pages/find-murderer/findmurderer.component';
import SudokuPage from './games/pages/sudoku/sudoku.component';
import { Route, Switch } from 'react-router-dom';
import QuestionsPage from './games/pages/questions/questions.component';
import Finished from './games/pages/finished/finished.component';


function App() {
  return (
    <div className = {`page-body`}>
    <Header/>
      <Switch>
        <Route exact path = '/' component={IntroPage} />
        <Route exact path = '/crossroads' component={CrosswordPage} />
        <Route exact path = '/mix-up' component={RiddlesPage} />
        <Route exact path = '/a-message' component={LetterPuzzlePage} />
        <Route exact path = '/unforgiving-soul' component={FindMurdererPage} />
        <Route exact path = '/attachment-to-the-past' component={SudokuPage} />
        <Route exact path = '/quizaster' component={QuestionsPage} />
        <Route exact path = '/a-scroll' component={Finished} />
      </Switch>
    </div>
  );
}

export default App;
