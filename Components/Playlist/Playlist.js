import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import axios from 'axios'


class Playlist extends Component {

  state={
    currentPlaylist: [],
    prevPlayed: [],
    nowPlaying: []
  }

  async componentDidMount(){
    let data = await axios.post('http://104.248.216.64:7777/api/playlist', {group_id: this.props.navigation.state.params.groupDetails.group_id})
    this.setState({
      currentPlaylist: data.data.currentPlaylist,
      prevPlayed: data.data.prevList,
      nowPlaying: data.data.nowPlaying[0]
    })
    console.log(data.data)
  }

  render() {

    console.log(this.props.navigation.state.params)
    return (
      <View>
      </View>
    )
  }
}
export default Playlist

const styles = StyleSheet.create({

})