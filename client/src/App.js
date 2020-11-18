import './App.css';
import Races from './components/races/Races';
import Classes from './components/classes/Classes';
import DndHeader from './components/DndHeader/DndHeader';
import HomePage from './components/HomePage/HomePage';
import { Route, Switch } from 'react-router-dom';
import FinishingTouches from './components/FinishingTouches/FinishingTouches';

function App() {
  return (
    <div className="App">
      <DndHeader />
      <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/races' component={Races} />
      <Route path='/classes' component={Classes} />
      <Route path='/stats' component={FinishingTouches} />
      </Switch>
    </div>
  );
}

export default App;
