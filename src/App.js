import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './app/components/header/header';
import Jugadores from './app/components/jugadores/jugadores.component';
import Statistics from './app/components/statistics/players/players-statistic.component';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <div className='screen'>
          <Route exact path="/">

          </Route>
          <Route exact path="/statistic">
            <Statistics />
          </Route>
        </div>
        <Jugadores/>
      </BrowserRouter>
    </div>
  );
}

export default App;
