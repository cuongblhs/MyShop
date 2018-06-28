/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { createStackNavigator } from "react-navigation";
import { YellowBox } from "react-native";
YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);

class HomeScreen extends React.Component{
  static navigationOptions = {
    title : 'Home'
  }

  render(){
    const navigate = this.props.navigation;
    return (
      <Button
        title = 'Profile'
        onPress = {
          () => {
            navigate.navigate("Profile", { name: "Profile" });
          }
        }
      />
    );
  }
}

class ProfileScreen extends React.Component{
  static navigationOptions = {
    title : 'Profile'
  }

  render(){
    const navigate = this.props.navigation;
    return <View>
        <Button title="Home" onPress={() => {
            navigate.navigate("Home", { name: "Home" });
          }} />
        <Text>{ navigate.getParam('name') }</Text>
      </View>;
  }
}

const NavigatorApp = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen }
},
{
  initialRouteName : 'Home'
});
export default class App extends Component{
  render() {
    return (
      <NavigatorApp />
    );
  }
}

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
