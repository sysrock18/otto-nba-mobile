import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList
} from 'react-native'
import api from './api'
import Scoreboard from './components/Scoreboard'

export default class Scoreboards extends React.Component {
  state = {
    scoreboards: [],
    loading: true,
    teams: {}
  }

  async componentDidMount() {
    const todayDate = new Date()
    const yesterdayDate = new Date(todayDate.setDate(todayDate.getDate() - 1))
    let scoreboards = []
    let teams = await api.teams.getList()
    let teamsObj = {}
    teams.forEach(team => teamsObj[team.tricode.toLowerCase()] = team)
    let yesterdayGameScores = await api.scoreboards.getList(yesterdayDate)
    let todayGameScores = await api.scoreboards.getList()

    yesterdayGameScores = yesterdayGameScores ?? []
    todayGameScores = todayGameScores ?? []
    scoreboards = [...todayGameScores, ...yesterdayGameScores]

    this.setState({
      scoreboards,
      teams: teamsObj,
      loading: false
    })
  }

  render() {
    return (
      <View style={styles.container}>
        { this.state.loading && <ActivityIndicator color={'#1976D2'} style={styles.loader} size="large" /> }

        { this.state.scoreboards && 
          <FlatList
            data={this.state.scoreboards}
            keyExtractor={(item) => item.gameId}
            renderItem={({item}) => {
              return (
                <Scoreboard scoreboard={item} teams={this.state.teams} />
              )
            }}
          />
        }

        { !this.state.scoreboards && !this.state.loading && 
          <View style={styles.noResults}>
            <Text style={styles.textNoResults}>We cant load scoreboards now, try later :(</Text>
          </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loader: {
    marginTop: 30
  },
  noResults: {
    marginTop: 10,
    alignItems: 'center'
  },
  textNoResults: {
    fontSize: 16
  }
})
