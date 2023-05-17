// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamList: [], isLoading: true}

  componentDidMount() {
    this.getIplTeamList()
  }

  getIplTeamList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formattedData = data.teams.map(each => ({
      id: each.id,
      teamImageUrl: each.team_image_url,
      name: each.name,
    }))
    console.log(formattedData)
    this.setState({teamList: formattedData, isLoading: false})
  }

  render() {
    const {teamList, isLoading} = this.state
    return isLoading ? (
      <div data-testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      <div className="bg-container">
        <div className="app-container">
          <div className="logo-title-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />
            <p className="heading">IPL Dashboard</p>
          </div>
          <div className="team-container">
            <ul className="team-list">
              {teamList.map(eachTeam => (
                <TeamCard key={eachTeam.id} TeamDetails={eachTeam} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
