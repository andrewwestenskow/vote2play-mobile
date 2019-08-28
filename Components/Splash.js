import React, { Component } from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'
import v2ptext from './Assets/v2ptext.png'


class Splash extends Component {

  
  render() {

    let fadeAnim = new Animated.Value(0)
    let sizeAnim = new Animated.Value(0.2)

    Animated.parallel(
      [Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 1500
        }
      ),
      Animated.spring(
        sizeAnim,
        {
          toValue: 1
        }
      )]
    ).start()


    return (
      <View style={styles.container}>
          <Animated.Image style={{opacity: fadeAnim, transform: [{ scaleX: sizeAnim }, { scaleY: sizeAnim }]}} source={v2ptext} />
      </View>
    )
  }
}
export default Splash

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d3253',
    alignItems: 'center',
    justifyContent: 'center'
  }
})