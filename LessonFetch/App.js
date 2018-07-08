import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

//在ReactNative中，使用fetch实现网络请求

//练习1：使用get和post方式获取数据
var GetData = require('./getData');
var MovieList = require('./movieList');

//练习2：电影列表（网络请求数据）

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <GetData></GetData> */}
        <MovieList></MovieList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
