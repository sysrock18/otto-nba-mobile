import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'
import logos from '../logos'

const Scoreboard = (props) =>
  <View style={styles.scoreboardBox}>
    <View style={{alignItems: 'center'}}>
      <Text style={styles.dataText}>
        <Text style={styles.label}>Arena:</Text> {props.scoreboard.game.location}
      </Text>
      <Text style={styles.dataText}>
        <Text style={styles.label}>Date:</Text> {props.scoreboard.game.date}
      </Text>
    </View>

    <View style={styles.scoreTeams}>
      <Image source={logos[props.scoreboard.game.awayTeam.Abbreviation.toLowerCase()]} />
      
      <View style={styles.scoreTime}>
        <View style={styles.score}>
          <Text style={styles.scoreText}>{props.scoreboard.awayScore}</Text>
          <Text style={styles.scoreText}>-</Text>
          <Text style={styles.scoreText}>{props.scoreboard.homeScore}</Text>
        </View>
        <Text style={styles.dataText}>
          <Text style={styles.label}>Time:</Text> {props.scoreboard.game.time}
        </Text>
      </View>

      <Image source={logos[props.scoreboard.game.homeTeam.Abbreviation.toLowerCase()]} />
    </View>

    <View style={styles.nameTeams}>
      <View style={{alignItems: 'flex-start'}}>
        <Text style={styles.nameText}>{props.scoreboard.game.awayTeam.City}</Text>
        <Text style={styles.nameText}>{props.scoreboard.game.awayTeam.Name}</Text>
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <Text style={styles.nameText}>{props.scoreboard.game.homeTeam.City}</Text>
        <Text style={styles.nameText}>{props.scoreboard.game.homeTeam.Name}</Text>
      </View>
    </View>

  </View>

const styles = StyleSheet.create({
  scoreboardBox: {
    padding: 5,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height: 1,
      width: -2
    },
    elevation: 4,
    alignItems: 'stretch',
    alignContent: 'space-between',
    justifyContent: 'space-between',
    marginVertical: 5,
    marginHorizontal: 10
  },
  scoreTeams: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center'
  },
  scoreTime: {
    alignItems: 'center',
    margin: 5
  },
  score: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20
  },
  scoreText: {
    fontSize: 30,
    color: '#323232',
    marginHorizontal: 5
  },
  nameTeams: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20
  },
  nameText: {
    fontSize: 18,
    color: '#323232'
  },
  dataText: {
    color: '#323232'
  },
  label: {
    fontWeight: '800'
  }
})

export default Scoreboard
