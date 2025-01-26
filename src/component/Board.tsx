import { useState } from 'react';
import Histories, { IHistory } from './Histories';
import Squares from './Squares';
import TurnHead from './TurnHead';

export function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [turnCount, setTurnCount] = useState(0);
  const [historys, setHistorys] = useState<Array<IHistory>>(Array(9).fill(null));
  const [end, setEnd] = useState(false)
   
  function takebackHandler(turnIndex: number) {
    //history 해당위치로 초기화
    const nextHistories = historys.slice(0, turnIndex);
    setHistorys(nextHistories)
    console.log(nextHistories)
    
    //turn 수정
    setTurnCount(turnIndex);
    
    //square 해당 위치로 초기화
    const nextSquares = Array(9).fill(null)
    for (const history of nextHistories) {
      nextSquares[history.position] = history.user
    }
  
    setSquares(nextSquares);
    setEnd(false)
  }
  
  function handleClick(i: number) {
    //winner 가 나왔거나 null이면 무반응
    console.log("hi" + squares[i] + end)
    if (squares[i] != null || end == true) return;

    console.log("bye")

    //draw square
    const nextSquares = squares.slice();
    nextSquares[i] = getUser(turnCount);
    setSquares(nextSquares);

    //check winner 
    setEnd(checkWinner(nextSquares))

    //add History
    const nextHistorys = historys.slice();
    nextHistorys[turnCount] = {
      user: getUser(turnCount),
      position: i,
      turnCount: turnCount
    };
    setHistorys(nextHistorys);
    
    //plus turn count
    setTurnCount(turnCount + 1);
  }

  return (
    <>
      <div style={{display:"flex", gap:"30px"}}>
        <div style={{display:"flex", gap:"15px", flexDirection:"column"}}>
          <TurnHead end={end} user={getUser(turnCount-1)} nextUser={getUser(turnCount)}/>
          <Squares squares={squares} handleClick={handleClick}/>
        </div> 
        <Histories histories={historys} takebackClick={takebackHandler}/>
      </div>
    </>
  );  
}

function checkWinner(nextSquares) {
  const winnerLogics: number[][]= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ] 

  for (const logic of winnerLogics) {
    const user = nextSquares[logic[0]]

    if (user == null)
      continue

    if (nextSquares[logic[1]] == user && nextSquares[logic[2]] == user) {
      return true
    }
  }

  return false
}

function getUser(turnCount: number) {
  return turnCount % 2 == 0 ? 'X' : 'O';
}