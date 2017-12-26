import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ActivityIndicator,
  FlatList
} from 'react-native'
import api from './api'
import Scoreboard from './components/Scoreboard'

export default class Scoreboards extends React.Component {
  state = {
    scoreboards: null,
    loading: true
  }

  async componentDidMount() {
    const todayDate = new Date()
    const yesterdayDate = new Date(todayDate.setDate(todayDate.getDate() - 1))
    const currentSeason = await api.season.getCurrent(yesterdayDate)
    let scoreboards = null
    if (currentSeason) {
      const seasonName = currentSeason.slug
      scoreboards = await api.scoreboards.getList(yesterdayDate, seasonName)
    }

    this.setState({
      scoreboards,
      loading: false
    })
  }

  render() {
    return (
      <View style={styles.container}>
        { this.state.loading && <ActivityIndicator style={styles.loader} size="large" /> }

        { this.state.scoreboards && 
          <FlatList
            data={this.state.scoreboards}
            renderItem={({item}) => {
              return (
                <Scoreboard scoreboard={item} />
              )
            }}
          />
        }

        { !this.state.scoreboards && !this.state.loading && 
          <View style={styles.noResults}>
            <Text style={styles.textNoResults}>We can't load scoreboards now, try later :(</Text>
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
    marginTop: 10
  },
  noResults: {
    marginTop: 10,
    alignItems: 'center'
  },
  textNoResults: {
    fontSize: 16
  }
})
