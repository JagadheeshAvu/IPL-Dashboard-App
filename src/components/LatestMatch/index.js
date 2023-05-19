// Write your code here

import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatchInformation} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      secondInnings,
      manOfTheMatch,
      umpires,
      venue,
      result,
    } = latestMatchInformation
    return (
      <div className="latest-match-details-card-container">
        <h1 className="latest-match-heading">Latest Matches</h1>
        <div className="latest-match-card">
          <div className="team-details">
            <h1 className="team-name">{competingTeam}</h1>
            <p className="date">{date}</p>
            <p className="venue">{venue}</p>
            <p className="match-result">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={competingTeam}
            className="latest-match-logo"
          />
          <div className="innings-details">
            <p className="first-innings-label">First Innings</p>
            <p className="first-inning-team-name">{firstInnings}</p>
            <p className="second-innings-label">Second Innings</p>
            <p className="second-inning-team-name">{secondInnings}</p>
            <p className="man-of-the-match-label">Man Of The Match</p>
            <p className="man-of-the-match-member-name">{manOfTheMatch}</p>
            <p className="umpires-label">Umpires</p>
            <p className="umpires">{umpires}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch
