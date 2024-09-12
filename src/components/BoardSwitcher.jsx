import React, {useState} from "react";


function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}


function BoardSwitcher(props) {
  const [selectedBoard, setSelectedBoard] = useState(0);

  let boards = [];

  for(let ii = 0; ii < props.numBoards; ii++){
    let isSelected = ii === selectedBoard;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />); 
  }

  const toggleHandler = () => {
    setSelectedBoard((previouslySelected) => (previouslySelected + 1) % props.numBoards);
  };

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={toggleHandler}>Toggle</button>
    </div>
  );
}

/*
function BoardSwitcher(props) {
  let boards = [];
  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === 0;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button>Toggle</button>
    </div>
  );
}*/

export default BoardSwitcher;
