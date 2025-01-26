interface props {
  end: boolean;
  user: string;
  nextUser: string;
}

export default function TurnHead(props: props) {
  let head = ""

  if (props.end == true) {
      head = "Winner is " + props.user
  } else {
      head = "Next user is " + props.nextUser
  }

  return <h3>{head}</h3>
}