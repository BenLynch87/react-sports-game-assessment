import React from "react";
import Team from "../Team/Team";
import shootSfx from "../../shoot.mp3";
import scoreSfx from "../../score.mp3";

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      venue: this.props.venue,
      homeTeam: this.props.homeTeam,
      awayTeam: this.props.awayTeam,
      homeLogo: this.props.homeLogo,
      awayLogo: this.props.awayLogo,
      homeScore: 0,
      awayScore: 0,
      homeShots: 0,
      awayShots: 0,
      homePercent: 0,
      awayPercent: 0,
      resets: 0,
    };
  }

  shootHome = (event) => {
    let shootSound = new Audio(shootSfx);
    let scoreSound = new Audio(scoreSfx);

    shootSound.play();

    if (Math.random() > 0.75) {
      this.handleHomeScoreChange(this.state.homeScore + 1);
      scoreSound.play();
    }

    this.handleHomeShotsChange(this.state.homeShots + 1);
  };

  shootAway = (event) => {
    let shootSound = new Audio(shootSfx);
    let scoreSound = new Audio(scoreSfx);

    shootSound.play();

    if (Math.random() > 0.75) {
      this.handleAwayScoreChange(this.state.awayScore + 1);
      scoreSound.play();
    }

    this.handleAwayShotsChange(this.state.awayShots + 1);
  };

  handleHomeScoreChange(score) {
    this.setState({ homeScore: score });
  }

  handleAwayScoreChange(score) {
    this.setState({ awayScore: score });
  }

  handleHomeShotsChange(shots) {
    this.setState({ homeShots: shots }, this.handleHomePercentChange);
  }

  handleAwayShotsChange(shots) {
    this.setState({ awayShots: shots }, this.handleAwayPercentChange);
  }

  handleHomePercentChange() {
    this.setState({
      homePercent: Math.round(
        (this.state.homeScore / this.state.homeShots) * 100
      ),
    });
  }

  handleAwayPercentChange() {
    this.setState({
      awayPercent: Math.round(
        (this.state.awayScore / this.state.awayShots) * 100
      ),
    });
  }

  reset = (event) => {
    this.setState({
      homeScore: 0,
      awayScore: 0,
      homeShots: 0,
      awayShots: 0,
      homePercent: 0,
      awayPercent: 0,
      resets: this.state.resets + 1,
    });
  };

  render() {
    return (
      <div className="game">
        <h1>Welcome to {this.state.venue}</h1>
        <div className="teamsDisplay">
          <Team
            name={this.state.homeTeam}
            logo={this.state.homeLogo}
            score={this.state.homeScore}
            shots={this.state.homeShots}
            percent={this.state.homePercent}
            shoot={this.shootHome}
          />
          <em>
            <h2>VS</h2>
          </em>
          <Team
            name={this.state.awayTeam}
            logo={this.state.awayLogo}
            score={this.state.awayScore}
            shots={this.state.awayShots}
            percent={this.state.awayPercent}
            shoot={this.shootAway}
          />
        </div>
        <button onClick={this.reset}>Reset</button>
        <h5>Resets: {this.state.resets}</h5>
      </div>
    );
  }
}

export default Game;
