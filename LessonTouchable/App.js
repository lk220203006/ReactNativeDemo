import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';

/*
React Native 提供3个组件用于给其他没有触摸事件的组件绑定触摸事件
TouchableOpacity 透明触摸，点击时，组件会出现透明过滤效果
TouchableHighlight 高亮触摸，点击时，组件会出现高亮效果
TouchableWithoutFeedback 无反馈性触摸，点击时，组件无视觉变化
*/

export default class App extends React.Component {
  clickBtn(){
    alert("点击搜索按钮");
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flex}>
          <View style={styles.input}></View>
        </View>
        <TouchableOpacity style={styles.btn} onPress={this.clickBtn.bind()}>
          <Text style={styles.search}>搜索</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    height:45,
    marginTop:35
  },
  flex:{
    flex:1
  },
  input:{
    height:45,
    borderWidth:1,
    marginLeft:5,
    paddingLeft:5,
    borderColor:'#ccc',
    borderRadius:4
  },
  btn:{
    width:55,
    marginLeft:5,
    marginRight:5,
    backgroundColor:'#23beff',
    height:45,
    justifyContent:'center',
    alignItems:'center'
  },
  search:{
    color:'#fff',
    fontSize:15,
    fontWeight:'bold',
  }
});
