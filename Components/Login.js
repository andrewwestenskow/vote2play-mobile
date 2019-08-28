import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Button, AsyncStorage } from 'react-native'
import axios from 'axios'
import {withNavigation} from 'react-navigation'

class Login extends Component {

  state = {
    email: '',
    password: '',
    error: false
  }

  handleLogin = async () => {
    let res = await axios.post('http://104.248.216.64:7777/auth/login', {email: this.state.email, password: this.state.password})

    console.log(res.data)
    
    if(res.data.isAuthenticated){
      console.log(res.data)
      AsyncStorage.setItem('login_id', res.data.login_id)
      this.props.navigation.navigate('Dashboard', {login_id: res.data.login_id, userDetails: res.data.userDetails, isAuthenticated: res.data.isAuthenticated})
    } else {
      this.setState({
        email: '',
        password: '',
        error: true
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Vote2Play</Text>
        <TextInput value={this.state.email} placeholder='email' onChangeText={(email)=>this.setState({email})} />
        <TextInput value={this.state.password} placeholder='password' onChangeText={(password)=>this.setState({password})} />
        <Button title='login' onPress={this.handleLogin} />
        {this.state.error && <Text>Incorrect email or password</Text>}
      </View>
    )
  }
}
export default withNavigation(Login)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d3253',
    justifyContent: 'center',
    alignItems: 'center'
  }
})