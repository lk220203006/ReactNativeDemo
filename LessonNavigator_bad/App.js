import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

var LessonNavigator = require('./navigation');

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <LessonNavigator></LessonNavigator>
      </View>
    );
  }
}
