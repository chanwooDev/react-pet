import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css'
import { Board } from './component/tic-tac-to/Board';
import Home from './component/Home';

function App() {

  return (
    <>
    <div className="container">
      <BrowserRouter>
        <div className="sidebar">
          <h2>Games</h2>
          <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tic-tac-to">Play Tic Tac To</Link></li>
            <li><Link to="/product">Product</Link></li>
          </ul>
        </nav>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tic-tac-to" element={<Board />} />
            <Route path="/product" element={<Board />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App