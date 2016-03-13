var React = require('react-native');

// var View = React.View;
// var Text = React.Text;
// var AppRegistry = React.AppRegistry;
// var StyleSheet = React.StyleSheet;

var {
  View,
  Text,
  AppRegistry,
  StyleSheet,
  Component,
  TouchableHighlight
} = React;

// class Timer extends Component {
//   render() {
//     return <View>
//             <Text>My Time App!</Text>
//            </View>
//   }
// }


var Timer = React.createClass({
  onPressButton: function(){
    alert("Hello!");
  },
  render: function() {
    return <View style={styles.container}>
              <Text>My Time App!</Text>
              <TouchableHighlight underlayColor="red"
                                  onPress={this.onPressButton}>
                <Text>Start</Text>
              </TouchableHighlight>
           </View>
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('timer', () => Timer);
// AppRegistry.registerComponent('timer', function(){
//   return Timer;
// });

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  */
// 'use strict';
// import React, {
//   AppRegistry,
//   Component,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
//
// class timer extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
//
// AppRegistry.registerComponent('timer', () => timer);
