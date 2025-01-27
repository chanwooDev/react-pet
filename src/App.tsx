import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css'
import { Board } from './component/Board';
import Empty from './component/Empty';

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
          </ul>
        </nav>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Empty />} />
            <Route path="/tic-tac-to" element={<Board />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App