// Write your code here

import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {teamData} = this.props
    const {name, teamImageUrl, id} = teamData
    return (
      <Link to={`/team-matches/${id}`} className="link">
        <li className="team-card">
          <img src={teamImageUrl} alt={`${name}`} className="team-logo" />
          <p className="team-name">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
