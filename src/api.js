import utils from './utils'
import base64 from 'base-64'

const baseUrl = 'https://api.mysportsfeeds.com/v1.1/pull/nba'

let headers = new Headers()
headers.append("Authorization", "Basic " + base64.encode('sysrock18:19027920'))

const api = {
  season: {
    async getCurrent(date = new Date()) {
      date = utils.getFormatDate(date)
      const response = await fetch(`${baseUrl}/current_season.json?fordate=${date}`, {
        headers
      })
      .then(response => response.json())
      .then(data => data.currentseason.season[0].details)
      .catch(err => false)

      return response
    }
  },
  scoreboards: {
    async getList(date = new Date(), seasonName) {
      date = utils.getFormatDate(date)
      const response = await fetch(`${baseUrl}/${seasonName}/scoreboard.json?fordate=${date}`, {
        headers
      })
      .then(response => response.json())
      .then(data => data.scoreboard.gameScore)
      .catch(err => false)

      return response
    }
  },
  conferenceStandings: {
    async getList(seasonName) {
      const response = await fetch(`${baseUrl}/${seasonName}/conference_team_standings.json?teamstats=W,L`, {
        headers
      })
      .then(response => response.json())
      .then(data => data.conferenceteamstandings.conference)
      .catch(err => false)
      
      return response
    }
  }
}

export default api
