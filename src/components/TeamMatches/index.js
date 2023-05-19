// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css' 

class TeamMatches extends Component {
    state = {matchesData:{}, isLoading: true}

        componentDidMount() {
            this.getTeamMatches()
        }

        getTeamMatches = async () => {
            const {match} = this.props 
            const {params} = match 
            const {id} = params 

            const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
            const fetchedData = await response.json()

            const updatedData = {
                teamBannerUrl: fetchedData.team_banner_url
                latestMatchDetails: {
                    id: fetchedData.latest_match_details.id,
                    competingTeam: fetchedData.latest_match_details.competing_team.Component,
                    competingTeamLogo: fetchedData.latest_match_details.competing_team_logo,
                    date: fetchedData.latest_match_details.date,
                    firstInnings: fetchedData.latest_match_details.first_innings,
                    manOfTheMatch: fetchedData.latest_match_details.man_of_the_match,
                    matchStatus: fetchedData.latest_match_details.match_status,
                    result: fetchedData.latest_match_details.result,
                    secondInnings: fetchedData.latest_match_details.second_innings,
                    umpires: fetchedData.latest_match_details.umpires,
                    venue: fetchedData.latest_match_details.venue,
                },
                recentMatches: fetchedData.recent_matches.map(recentMatch => ({
                    id: recentMatch.id,
                    competingTeam: recentMatch.competing_team.Component,
                    competingTeamLogo: recentMatch.competing_team_logo,
                    date: recentMatch.date,
                    firstInnings: recentMatch.first_innings,
                    manOfTheMatch: recentMatch.man_of_the_match,
                    matchStatus: recentMatch.match_status,
                    result: recentMatch.result,
                    secondInnings: recentMatch.second_innings,
                    umpires: recentMatch.umpires,
                    venue: recentMatch.venue,
                }))
                this.setState({matchesData: updatedData, isLoading: false})
            }

            renderTeamMatches = () => {
                const {matchesData} = this.state
                const {teamBannerUrl, latestMatchDetails} = matchesData
                return(
                    <div className="team-matches-container">
                    <img src={teamBannerUrl} alt={competingTeam} className="team-banner"/>
                    <LatestMatch latestMatchInformation={latestMatchDetails} />
                    {this.renderRecentMatchesList()}
                    </div>
                )
            }

            renderRecentMatchesList = () => {
                const {matchesData} = this.state 
                const {recentMatches} = matchesData 
                return (
                    <ul className="recent-match-details">
                        {recentMatches.map(eachTeam => (
                            <MatchCard key={eachTeam.id} matchDetails={eachTeam} />
                        ))}
                    </ul>
                )
            }

            renderLoader = () => (
                <div data-testid="loader" className="loader">
                    <Loader type="Oval" color="#00BFFF" height={50} width={50} />
                </div>
            )
        }
    render(){
        const {isLoading} = this.state
        return(
          <div className={`team-match-container ${id}`}>
              {isLoading ? this.renderLoader() : this.renderTeamMatches()}
          </div>
        )
    }
}

export default TeamMatches