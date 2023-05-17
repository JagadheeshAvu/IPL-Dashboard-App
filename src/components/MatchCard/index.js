// Write your code here

import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, result, status} = matchDetails
  return (
    <li className="match-item">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-team-logo"
      />
      <p className="result">{result}</p>
      <p>{status}</p>
    </li>
  )
}

export default MatchCard
