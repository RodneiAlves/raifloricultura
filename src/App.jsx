import './App.css';
import Header from './componentes/Header';
import Nave from './componentes/Nave';
import Home from './pagina/Home';
import Sobre from './pagina/Sobre';
import Vazos from './pagina/Vazos';
import { HashRouter, Routes, Route } from 'react-router-dom'; // trocado BrowserRouter por HashRouter


function App() {
      return (
        <div className="App">
          <HashRouter>
            <Header />
            <Nave />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/vazos' element={<Vazos />} />
              <Route path='/sobre' element={<Sobre />} />
            </Routes>
          </HashRouter>
        </div>
      );
    }
    
  


export default App
