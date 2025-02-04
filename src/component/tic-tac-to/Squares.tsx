import { Square } from "./Square";

interface SquaresProps {
  squares: string[];
  handleClick: (i: number) => void 
}

export default function Squares({squares, handleClick}: SquaresProps) {
  return <>
  <div style={{display:"flex", flexDirection:"column"}}>
  <div className="board-row">
  <Square value={squares[0]} handleClick={() => handleClick(0)} />
  <Square value={squares[1]} handleClick={() => handleClick(1)} />
  <Square value={squares[2]} handleClick={() => handleClick(2)} />
  </div>
  <div className="board-row">
  <Square value={squares[3]} handleClick={() => handleClick(3)} />
  <Square value={squares[4]} handleClick={() => handleClick(4)} />
  <Square value={squares[5]} handleClick={() => handleClick(5)} />
  </div>
  <div className="board-row">
  <Square value={squares[6]} handleClick={() => handleClick(6)} />
  <Square value={squares[7]} handleClick={() => handleClick(7)} />
  <Square value={squares[8]} handleClick={() => handleClick(8)} />
  </div>
  </div>
  
  </>
}