import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import axios from 'axios'
import { withNavigation } from 'react-navigation'


class Dashboard extends Component {

  state = {
    groups: []
  }

  async componentDidMount() {
    let groups = await axios.get('http://104.248.216.64:7777/api/group/getgroups', { login_id: this.props.login_id })

    groups.data.forEach(element => {
      element.key = `${element.group_id}`
    })

    this.setState({
      groups: groups.data
    })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <ScrollView contentContainerStyle={{flex: 1}}> */}
        <View style={styles.container}>
          <Text style={styles.header}>Groups: </Text>
          {this.state.groups.length > 0 && <FlatList
            style={{ width: '100%' }}
            contentContainerStyle={{ alignItems: 'center' }}
            data={this.state.groups}
            renderItem={(item) => {
              return (
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Playlist',
                    {
                      groupDetails: item.item,
                      userDetails: this.props.navigation.state.params
                    })}
                  style={styles.card}
                >
                  {/* <View style={styles.card}> */}
                  <Image source={{ uri: item.item.group_image }} style={{ width: 250, height: 250, position: 'absolute' }} />
                  <View style={styles.groupDetailHold}>
                    <Text style={styles.groupName}>{item.item.name}</Text>
                    <Text style={styles.joincode}>Joincode</Text>
                    <Text style={styles.joincode}>{item.item.joincode}</Text>
                  </View>
                  {/* </View> */}
                </TouchableOpacity>
              )
            }}
          />}
        </View>
        {/* </ScrollView> */}
      </View>
    )
  }
}
export default withNavigation(Dashboard)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d3253',
    alignItems: 'center'
  },
  header: {
    fontSize: 48
  },
  card: {
    width: 250,
    height: 250,
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  groupDetailHold: {
    height: '50%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.65)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  groupName: {
    fontSize: 24,
    textDecorationLine: 'underline',
    textAlign: 'center'
  },
  joincode: {
    fontSize: 18
  }
})