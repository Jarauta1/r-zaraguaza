import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './app/components/header/header';
import Classification from './app/components/classification/classification.component';
import Players from './app/components/jugadores/jugadores.component';
import Config from './app/components/admin-configuration/configuration';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <div className='screen'>
          <Route exact path="/">
            <Config />
          </Route>
          <Route exact path="/classification">
            <Classification />
          </Route>
          <Route exact path="/players">
            <Players />
          </Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
