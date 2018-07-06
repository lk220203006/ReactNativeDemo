/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

//练习1：listview基本练习
var MyListView = require('./myListView');

//练习2：电影列表
var MovieList = require('./movieList');

export default class App extends Component {
  render() {
    return (
      <View style={styles.flex}>
        {/* <MyListView></MyListView> */}
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
