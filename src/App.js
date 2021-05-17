import './App.css';
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
    <div className = 'page-body'>
    <Header/>
      <Switch>
        <Route exact path = '/' component={IntroPage} />
        <Route exact path = '/crossroads' component={CrosswordPage} />
        <Route exact path = '/c2' component={RiddlesPage} />
        <Route exact path = '/c3' component={LetterPuzzlePage} />
        <Route exact path = '/unforgiving-soul' component={FindMurdererPage} />
        <Route exact path = '/c5' component={SudokuPage} />
        <Route exact path = '/c6' component={QuestionsPage} />
        <Route exact path = '/finished' component={Finished} />
      </Switch>
    </div>
  );
}

export default App;
