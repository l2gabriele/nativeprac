import React from 'react';
import { StyleSheet, Text, View, Image, Animated, Easing, Button, TouchableHighlight } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super()
    this.RotateValueHolder = new Animated.Value(0);
    this.state = {
      alwayBe: "You Should",
      isRotate: true,
    }
  }

StartImageRotateFunction() {
  this.RotateValueHolder.setValue(0);

  Animated.timing(
    this.RotateValueHolder,
    {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
    }
  ).start(() => this.StartImageRotateFunction())
}

componentDidMount() {
  this.StartImageRotateFunction();
}

  clickBat(e) {
  e.preventDefault();
  console.log("hello");
  this.setState({
     alwaysBe: "Always"
  })
}

  render() {
    const rotateData = this.RotateValueHolder.interpolate({
      inputRange: [0,1],
      outputRange: ["0 deg", "360 deg"]
    })

    return (
      <View style={styles.container}>
        <Text style={styles.baseText}>Always be Yourself..</Text>
        <TouchableHighlight onPress={(e) => this.clickBat(e)}>
          <Animated.Image
             style={{ transform: [{ rotate: rotateData }],
             width: 400, height: 400 }}
             source={require('./img/batsym.png')}
           />
          </TouchableHighlight>
          <Text style={styles.baseText}>Unless You can be</Text>
          <Text style={styles.baseText}>Batman, then</Text>
        <Text onPress={(e) => this.clickBat(e)}
          style={styles.alwaysText}>{this.state.alwaysBe}
        </Text>
        <Text style={styles.baseText}>be Batman!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    color: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '900',
    fontSize: 35,
  },
   alwaysText: {
     color: '#faff00',
     textDecorationLine: 'underline',
     fontFamily: 'Cochin',
     fontWeight: '900',
     fontStyle: 'italic',
     fontSize: 55,
   },
});
