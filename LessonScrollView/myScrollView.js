import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView,RefreshControl} from 'react-native';

/*
ScrollView 的简单实现
实现监测拖拽、滑动的相关方法
添加几个子组件
*/

class MyScrollView extends React.Component{
  _onScrollBeginDrag(){
    console.log('开始拖拽');
  }
  _onScrollEndDrag(){
    console.log('结束拖拽');
  }
  _onMomentumScrollBegin(){
    console.log('开始滑动');
  }
  _onMomentumScrollEnd(){
    console.log('滑动结束');
  }
  _onRefresh(){
    // this.setState({isRefreshing:true});
    console.log('刷新');
    // this.setState({isRefreshing:false});
  }
  state = {
    isRefreshing:false
  }
  render(){
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}
          showsVerticalScrollIndicator={true}
          onScrollBeginDrag={this._onScrollBeginDrag}
          onScrollEndDrag={this._onScrollEndDrag}
          onMomentumScrollBegin = {this._onMomentumScrollBegin}
          onMomentumScrollEnd={this._onMomentumScrollEnd}
          refreshControl={
            <RefreshControl
              refreshing={false}
              tintColor='red'
              title='正在刷新。。。。。。'
              onRefresh={this._onRefresh}
            />
          }
          >
          <View style={styles.view_1}></View>
          <View style={styles.view_2}></View>
          <View style={styles.view_3}></View>
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
  view_1:{
    margin:15,
    flex:1,
    height:300,
    backgroundColor:'yellow'
  },
  view_2:{
    margin:15,
    flex:1,
    height:300,
    backgroundColor:'blue'
  },
  view_3:{
    margin:15,
    flex:1,
    height:300,
    backgroundColor:'green'
  },
});

module.exports = MyScrollView;
