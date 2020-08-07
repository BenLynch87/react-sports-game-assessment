import React from "react";
import Scoreboard from "../Scoreboard/Scoreboard";

const Team = (props) => {
  let unhide = "hidden";
  if (props.shots > 0) {
    unhide = "scoreText";
  }
  return (
    <div className="team">
      <h3>Team {props.name}</h3>
      <img src={props.logo} alt="team logo" />
      <Scoreboard
        shots={props.shots}
        score={props.score}
        percent={props.percent}
        unhide={unhide}
      />
      <button onClick={props.shoot}>Shoot</button>
    </div>
  );
};

export default Team;
