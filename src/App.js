import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Designs from './components/Designs';
import Pictures from './components/Pictures';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Pictures/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Designs" element={<Designs/>}/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
