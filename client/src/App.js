import './App.css';
import Races from './components/races/Races';
import Classes from './components/classes/Classes';
import DndHeader from './components/DndHeader/DndHeader';
import HomePage from './components/HomePage/HomePage';
import { Route, Switch } from 'react-router-dom';
import FinishingTouches from './components/FinishingTouches/FinishingTouches';
import Characters from './components/Characters/Characters';
import CharacterSheet from './components/CharacterSheet/CharacterSheet';

function App() {
  return (
    <div className="App">
      <DndHeader />
      <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/races' component={Races} />
      <Route path='/classes' component={Classes} />
      <Route path='/stats' component={FinishingTouches} />
      <Route path='/characters' exact component={Characters} />
      <Route path='/characters/:id'  component={CharacterSheet} />
      </Switch>
    </div>
  );
}

export default App;
