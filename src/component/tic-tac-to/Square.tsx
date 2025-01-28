interface SquareProps {
  value: string;
  handleClick: () => void;
}
export function Square({ value, handleClick }: SquareProps) {
  return (
    <>
      <button
        className="square"
        onClick={handleClick}
      >
        {value}
      </button>
    </>
  );
}
