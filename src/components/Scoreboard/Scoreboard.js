import React from "react";

const Scoreboard = (props) => {
  return (
    <div className="scoreboard">
      <h5 className="scoreText">Shots Taken: {props.shots} | </h5>
      <h5 className="scoreText">Score: {props.score}</h5>
      <h5 className={props.unhide}> | Shot Percentage: {props.percent}%</h5>
    </div>
  );
};

export default Scoreboard;
