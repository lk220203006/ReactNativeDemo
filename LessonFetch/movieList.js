import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ListView, Image } from 'react-native';

var REQUEST_URL = 'https://api.douban.com/v2/movie/in_theaters'

class MovieList extends React.Component{
  constructor(props){
    super(props);
    var ds = new ListView.DataSource({
      //通过判断决定渲染哪些行组件，避免全部渲染，提高渲染效率
      rowHasChanged:(oldRow,newRow) => {oldRow !== newRow}
    });
    this.state = {
      loaded:false,
      dataSource:ds,
    };
  }

  componentDidMount(){
    this.getData();
  }

  renderLoadingView(){
    return(
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading movies......</Text>
      </View>
    );
  }

  getData(){
    fetch(REQUEST_URL)
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      this.setState({
        loaded:true,
        dataSource:this.state.dataSource.cloneWithRows(responseData.subjects)
      });
    })
    .catch((error) => {
      alert(error);
    })
  }

  //渲染行组件
  _renderRow(rowData){
    return(
      <View style={styles.row}>
        <Image source={{url:rowData.images.small}} style={styles.thumbnail}></Image>
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{rowData.title}</Text>
          <Text style={styles.year}>{rowData.year}</Text>
        </View>
      </View>
    );
  }
  //渲染头部
  _renderHeader(){
    return(
      <View style={styles.header}>
        <Text style={styles.header_text}>Movies List</Text>
        <View style={styles.separator}></View>
      </View>
    );
  }
  //渲染分割线
  _renderSeparator(sectionID, rowID){
    return(
      <View style={styles.separator} key={sectionID+rowID}></View>
    );
  }

  render(){
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => this._renderRow(rowData)}
        renderHeader={() => this._renderHeader()}
        renderSeparator={(sectionID, rowID) => this._renderSeparator(sectionID, rowID)}
        initialListSize={5}
        ></ListView>
      );
    }
}

var styles = StyleSheet.create({
  loadingContainer:{
    flex:1,
    marginTop:35,
    backgroundColor:'cyan',
    justifyContent:'center',
    alignItems:'center'
  },
  loadingText:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
    marginLeft:10,
    marginRight:10
  },
  container:{
    flex:1,
    marginTop:35,
    backgroundColor:'white'
  },
  row:{
    flexDirection:'row',
    padding:5,
    alignItems:'center',
    backgroundColor:'#f5fcff'
  },
  thumbnail:{
    width:103,
    height:145,
    backgroundColor:'gray'
  },
  rightContainer:{
    marginLeft:10,
    flex:1
  },
  title:{
    fontSize:25,
    marginTop:3,
    marginBottom:3,
    textAlign:'center'
  },
  year:{
    fontSize:20,
    marginBottom:3,
    textAlign:'center'
  },
  header:{
    justifyContent:'center',
    // alignItems:'center',
    height:44,
    borderColor:'#f5fcff'
  },
  header_text:{
    flex:1,
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    lineHeight:44
  },
  separator:{
    height:1,
    backgroundColor:'#cccccc'
  }
});

module.exports = MovieList;
