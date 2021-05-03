import './App.css';
import IntroPage from './games/introduction.component';
import CrosswordPage from './games/crossword.component';
import RiddlesPage from './games/riddles.component';
import LetterPuzzlePage from './games/letterpuzzle.component';
import FindMurdererPage from './games/findmurderer.component';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path = '/' component={IntroPage} />
        <Route exact path = '/challenge1' component={CrosswordPage} />
        <Route exact path = '/challenge2' component={RiddlesPage} />
        <Route exact path = '/challenge3' component={LetterPuzzlePage} />
        <Route exact path = '/challenge4' component={LetterPuzzlePage} />
        <Route exact path = '/challenge5' component={LetterPuzzlePage} />
        <Route exact path = '/challenge6' component={LetterPuzzlePage} />
        <Route exact path = '/challenge7' component={LetterPuzzlePage} />
        <Route exact path = '/challenge8' component={FindMurdererPage} />
        <Route exact path = '/challenge9' component={LetterPuzzlePage} />
        <Route exact path = '/challenge10' component={LetterPuzzlePage} />
        <Route exact path = '/finished' component={LetterPuzzlePage} />
      </Switch>
    </div>
  );
}

export default App;
