import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './app/components/header/header';
import Jugadores from './app/components/jugadores/jugadores.component';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Jugadores/>
      </BrowserRouter>
    </div>
  );
}

export default App;
