// Write your code here

import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchData
  return (
    <li className="latest-match-data-container">
      <h1 className="heading">Latest Matches</h1>
      <div className="latest-match-details-card">
        <div className="latest-match-details">
          <p className="team-name">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="team-name">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team-logo"
        />
        <div className="innings-details">
          <p className="first-inning">First Innings</p>
          <p className="first-inning-team">{firstInnings}</p>
          <p className="second-inning">Second Innings</p>
          <p className="second-inning-team">{secondInnings}</p>
          <p className="award">Man Of The Match</p>
          <p className="award-winner">{manOfTheMatch}</p>
          <p className="umpires">Umpires</p>
          <p className="umpire-names">{umpires}</p>
        </div>
      </div>
    </li>
  )
}

export default LatestMatch
