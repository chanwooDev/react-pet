export interface IHistory {
  user: string;
  position: number;
  turnCount: number;
}

interface HistoriesProps {
  histories: IHistory[];
  takebackClick: (i:number)=>void
}
export default function Histories({ histories, takebackClick}: HistoriesProps) {
  return (<div style={{ display: "flex", gap: "5px", flexDirection: "column" }}>
    {histories.filter(Boolean).map((history) => {
      return <History  key={history.turnCount} history={history} takebackClick={takebackClick}/>;
    })}
  </div>);
}
interface HistoryProps {
  history: IHistory;
  takebackClick: (i:number)=>void
}
function History({ history, takebackClick}: HistoryProps) {
  return <>
    <div style={{ display: "flex", gap: "8px" }}>
      <p>{history.user + ' ' + history.position.toString()}</p>
      <button onClick={()=>takebackClick(history.turnCount)}>Go To Move {history.turnCount}</button>
    </div>
  </>
}
