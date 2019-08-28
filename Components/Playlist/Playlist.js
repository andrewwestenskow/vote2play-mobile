import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import axios from 'axios'
import {ListItem} from 'react-native-elements'



class Playlist extends Component {

  state = {
    currentPlaylist: [],
    prevPlayed: [],
    nowPlaying: {},
    ready: false,
    player: {}
  }

  async componentDidMount() {
    let data = await axios.post('http://104.248.216.64:7777/api/playlist', { group_id: this.props.navigation.state.params.groupDetails.group_id })
    this.setState({
      currentPlaylist: data.data.currentPlaylist,
      prevPlayed: data.data.prevList,
      nowPlaying: data.data.nowPlaying[0],
      ready: true
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.navigation.state.params.groupDetails.name}</Text>
        {this.state.ready && <>
        <FlatList 
        data={this.state.currentPlaylist}
        renderItem={((item, index)=>{
          console.log(item.item)
          return(
            <Text>Andrew</Text>
          )
        })}
        />
        </>}
      </View>
    )
  }
}
export default Playlist

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d3253',
    alignItems: 'center'
  },
})