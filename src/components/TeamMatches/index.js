// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {teamMatchesData: {}, isLoading: true}

  componentDidMount() {
    this.getTeamMatchesData()
  }

  getTeamMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch('https://apis.ccbp.in/ipl/:id')
    const data = await response.json()

    const updatedData = data.recent_matches.map(each => ({
      id: each.id,
      date: each.date,
      venue: each.venue,
      result: each.result,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      umpires: each.umpires,
      manOfTheMatch: each.man_of_the_match,
      firstInnings: each.first_innings,
      secondInnings: each.secondInnings,
      status: each.match_status,
      latestMatches: each.latest_matches_details,
      teamBannerUrl: each.team_banner_url,
    }))
    this.setState({teamMatchesData: updatedData, isLoading: false})
  }

  render() {
    const {teamMatchesData, isLoading} = this.state
    const {teamBannerUrl} = teamMatchesData
    return (
         <div className="bg-container">
         {isLoading ? (
             <div data-testid="loader">
                 <Loader type="Oval" height={50} width={50}/>
             </div>) : (
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
        <div className="latest-matches">
          <ul>
            {teamMatchesData.map(each => (
              <LatestMatch key={each.id} latestMatchData={each} />
            ))}
          </ul>
        </div>
        <div className="match-card-details">
          <ul>
            {teamMatchesData.map(each => (
              <MatchCard key={each.id} matchDetails={each} />
            ))}
          </ul>
        </div>
         )}
      </div>
    )
  }
}

export default TeamMatches
