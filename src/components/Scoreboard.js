import React, { useMemo } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'
import logos from '../logos'
import utils from '../utils'

function Scoreboard({ scoreboard, teams }) {
  const startTime = useMemo(() => utils.getGameTime(new Date(scoreboard.startTimeUTC)), [scoreboard.startTimeUTC])
  const gameDate = useMemo(() => utils.getGameDate(new Date(scoreboard.startTimeUTC)), [scoreboard.startTimeUTC])
  const hTeamCode = scoreboard.hTeam.triCode.toLowerCase()
  const vTeamCode = scoreboard.vTeam.triCode.toLowerCase()

  return (
    <View style={styles.scoreboardBox}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.dataText}>
          <Text style={styles.label}>Arena:</Text> {scoreboard.arena?.name}
        </Text>
        <Text style={styles.dataText}>
          <Text style={styles.label}>Date:</Text> {gameDate}
        </Text>
      </View>

      <View style={styles.scoreTeams}>
        <Image source={logos[vTeamCode]} />
        
        <View style={styles.scoreTime}>
          <View style={styles.score}>
            <Text style={styles.scoreText}>{scoreboard.vTeam?.score}</Text>
            <Text style={styles.scoreText}>-</Text>
            <Text style={styles.scoreText}>{scoreboard.hTeam?.score}</Text>
          </View>
          <Text style={styles.dataText}>
            <Text style={styles.label}>Time:</Text> {startTime}
          </Text>
        </View>

        <Image source={logos[hTeamCode]} />
      </View>

      <View style={styles.nameTeams}>
        <View style={{alignItems: 'flex-start'}}>
        <Text style={styles.nameText}>{teams[vTeamCode]?.city}</Text>
          <Text style={styles.nameText}>{teams[vTeamCode]?.nickname}</Text>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Text style={styles.nameText}>{teams[hTeamCode]?.city}</Text>
          <Text style={styles.nameText}>{teams[hTeamCode]?.nickname}</Text>
        </View>
      </View>

    </View>
  )
}

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
