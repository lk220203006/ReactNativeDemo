import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView,Image} from 'react-native';

/*
  使用本地数据
*/

//从文件中读取数据。执行json。parse方法，将json格式的字符串转换为json格式对象
var movieData = require('./data.json')
//获取所有movies数据
var movies=movieData.movies;

class MovieList extends React.Component{
  render(){
    //创建电影列表组件 根据movies中元素的个数，创建对应的组件
    var moviesRows = [];
    //遍历数组
    for (var i in movies) {
      var movie = movies[i];
      var row = (
        <View key={i} style={styles.row}>
          <Image source={{url:movie.images.small}} style={styles.thumbnail}></Image>
        <View style={styles.rightContainer}>
            <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
          </View>
        </View>
      );
      moviesRows.push(row);
    }
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {
            //数组(所有子组件)
            moviesRows
          }
        </ScrollView>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'cyan'
  },
  scrollView:{
    marginTop:35,
    backgroundColor:'#cccccc'
  },
  row:{
    flexDirection:'row',
    padding:5,
    alignItems:'center',
    backgroundColor:'#f5fcff'
  },
  thumbnail:{
    width:53,
    height:81,
    backgroundColor:'gray'
  },
  rightContainer:{
    marginLeft:10,
    flex:1
  },
  title:{
    fontSize:18,
    marginTop:3,
    marginBottom:3,
    textAlign:'center'
  },
  year:{
    marginBottom:3,
    textAlign:'center'
  }
});

module.exports = MovieList;
