// Write your code here

import {Component} from 'react'
import './index.css'

class MatchCard extends Component {
  render() {
    const {matchDetails} = this.props
    const {competingTeamLogo, competingTeam, matchStatus, result} = matchDetails
    return (
      <li className={`match-card ${matchStatus}`}>
        <img
          src={competingTeamLogo}
          alt={competingTeam}
          className="match-card"
        />
        <h1 className="team-name">{competingTeam}</h1>
        <p className="match-status">{matchStatus}</p>
        <p className="result">{result}</p>
      </li>
    )
  }
}

export default MatchCard
