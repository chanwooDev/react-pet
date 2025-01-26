export interface IHistory {
  user: string;
  position: number;
  turnCount: number;
}

interface HistoriesProps {
  histories: IHistory[];
}
export default function Histories({ histories }: HistoriesProps) {
  return (<div className="col">
    {histories.filter(Boolean).map((history) => {
      console.log(history.user);
      console.log(history.position);
      return <h3 key={history.turnCount}>{history.user + ' ' + history.position.toString()}</h3>;
    })}
  </div>);
}
interface HistoryProps {
  histories: IHistory;
}
function History({ history }: HistoryProps) {
  return <h3 key={history.turnCount}>{history.user + ' ' + history.position.toString()}</h3>;
}
