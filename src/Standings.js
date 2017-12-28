import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator
} from 'react-native'
import api from './api'
import logos from './logos'

export default class Standings extends React.Component {
  state = {
    standings: [],
    loading: true
  }

  async componentDidMount() {
    const todayDate = new Date()
    const yesterdayDate = new Date(todayDate.setDate(todayDate.getDate() - 2))
    const currentSeason = await api.season.getCurrent(yesterdayDate)
    let standings = []
    if (currentSeason) {
      const seasonName = currentSeason.slug
      const standingsResp = await api.conferenceStandings.getList(seasonName)
      standings = standingsResp ? standingsResp : []
    }

    this.setState({
      standings,
      loading: false
    })
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        { this.state.loading && <ActivityIndicator style={styles.loader} size="large" /> }

        { this.state.standings.map(standing => 
          <View key={standing['@name']}>
            <View style={styles.conference}>
              <Image source={logos[standing['@name'].toLowerCase()]} style={styles.conferenceImage} />
              <Text style={styles.conferenceName}>{standing['@name']}</Text>
            </View>
            {
              standing.teamentry.map((item) => 
                <View key={item.team.ID} style={styles.teamCard}>
                  <Text style={styles.rank}>{item.rank}</Text>
                  <Image source={logos[item.team.Abbreviation.toLowerCase()]} style={styles.teamAvatar} />
                  <View style={styles.dataTeam}>
                    <Text style={styles.teamName}>{item.team.City} {item.team.Name}</Text>
                    <View style={styles.stats}>
                      <Text style={styles.singleStat}>
                        <Text style={styles.label}>G:</Text> {item.stats.GamesPlayed['#text']}
                      </Text>
                      <Text style={styles.singleStat}>
                        <Text style={styles.label}>W:</Text> {item.stats.Wins['#text']}
                      </Text>
                      <Text style={styles.singleStat}>
                        <Text style={styles.label}>L:</Text> {item.stats.Losses['#text']}
                      </Text>
                    </View>
                  </View>
                </View>
              )
            }
          </View>
        )}

        { !this.state.standings.length && !this.state.loading && 
          <View style={styles.noResults}>
            <Text style={styles.textNoResults}>We cant load standings now, try later :(</Text>
          </View>
        }
      </ScrollView>
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
  },
  conference: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15
  },
  conferenceName: {
    fontSize: 24,
    color: '#323232'
  },
  conferenceImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 50
  },
  teamCard: {
    padding: 5,
    paddingHorizontal: 10,
    shadowColor: 'black',
    backgroundColor: 'white',
    shadowOpacity: .2,
    shadowOffset: {
      height: 1,
      width: -2
    },
    elevation: 4,
    marginVertical: 5,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  teamAvatar: {
    borderRadius: 50,
    width: 30,
    height: 30
  },
  rank: {
    width: 20,
    color: '#323232'
  },
  dataTeam: {
    marginLeft: 10
  },
  label: {
    fontWeight: '600',
    width: 20
  },
  stats: {
    flexDirection: 'row',
  },
  singleStat: {
    marginRight: 10,
    color: '#323232'
  },
  teamName: {
    color: '#323232',
    fontSize: 15,
    marginBottom: 5
  }
})
