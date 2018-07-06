/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

//练习1：实现scrollview基本功能
var LessonScrollView = require('./myScrollView');

//练习2：电影列表

var MovieList = require('./movieList');

export default class LessonFlex extends React.Component {
  render() {
    return (
      <View style={styles.flex}>
        {/* <LessonScrollView></LessonScrollView> */}
        <MovieList></MovieList>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  flex:{
    flex:1
  }
});

AppRegistry.registerComponent('LessonScrollView',() => LessonScrollView);
