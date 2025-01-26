import { useState } from 'react';
import Histories, { IHistory } from './Histories';
import Squares from './Squares';

export function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [turnCount, setTurnCount] = useState(0);
  const [historys, setHistorys] = useState<Array<IHistory>>(Array(9).fill(null));

  function handleClick(i: number) {

    if (squares[i] != null) return;
    const nextSquares = squares.slice();
    nextSquares[i] = getUser(turnCount);

    const nextHistorys = historys.slice();
    nextHistorys[turnCount] = {
      user: getUser(turnCount),
      position: i,
      turnCount: turnCount
    };

    setHistorys(nextHistorys);
    setTurnCount(turnCount + 1);
    setSquares(nextSquares);
  }

  function getUser(turnCount: number) {
    return turnCount % 2 == 0 ? 'X' : 'O';
  }

  return (
    <>
      <Squares squares={squares} handleClick={handleClick}/>
      <div className="col">
        <Histories histories={historys} />
      </div>
    </>
  );

  
}
