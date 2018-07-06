import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ListView} from 'react-native';

//原始数据：数组
var contents = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
];

class MyListView extends React.Component{
  constructor(props){
    super(props);
    var ds = new ListView.DataSource({
      //通过判断决定渲染哪些行组件，避免全部渲染，提高渲染效率
      rowHasChanged:(oldRow,newRow) => {oldRow !== newRow}
    });
    this.state = {
      dataSource:ds.cloneWithRows(contents),
    };
  }
  //渲染行组件
  _renderRow(rowData){
    return(
      <View style={styles.row}>
        <Text style={styles.content}>{rowData}</Text>
      </View>
    );
  }
  render(){
    return(
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => this._renderRow(rowData)}
        ></ListView>
    );
  }
};

var styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:35
  },
  row:{
    justifyContent:'center',
    alignItems:'center',
    padding:5,
    height:100,
    borderBottomWidth:1,
    borderColor:'#cccccc'
  },
  content:{
    flex:1,
    fontSize:20,
    color:'blue',
    lineHeight:100
  }
});

module.exports = MyListView;
