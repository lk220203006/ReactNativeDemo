import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components'


//定义第一个页面
//firstPage 一个button，点击进入下一级页面
class FirstPage extends React.Component{
  pressPush(){

  }

  render(){
    return (
      <View style={[styles.flex,{backgroundColor:'yellow'}]}>
        <TouchableOpacity style={styles.btn}
          onPress={this.pressPush()}>
          <Text>点击推出下一级页面</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

//定义第二个页面
//secondPage 一个button，点击返回上一级页面
class SecondPage extends React.Component{
  pressPop(){

  }

  render(){
    return (
      <View style={[styles.flex,{backgroundColor:'yellow'}]}>
        <TouchableOpacity style={styles.btn}
          onPress={this.pressPop()}>
          <Text>点击返回上一级页面</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


class LessonNavigator extends React.Component{
  render(){
    var rootRoute = {
      component:FirstPage
    };
    return(
      <Navigator
      /*
      第一步
      initiaRoute
      这个指定了默认的页面，也就是启动app之后会看到界面的第一屏
      */
      initiaRoute={rootRoute}
      /*
      第二步
      configurescene
      场景渲染的配置
      */
      configureScene = {(route) => {
        return Navigator.SceneConfigs.PushFromRight;
      }}
      /*
      第三步
      renderscene
      渲染场景
      */
      renderScene={(route,navigator) => {
        var Component = route.component;
        return(
          <Component
            navigator={navigator}
            route={route}
          />
        );
      }}
    />
    );
  }
}

var styles = StyleSheet.create({
  flex:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  btn:{
    width:150,
    height:30,
    borderWidth:1,
    borderRadius:3,
    justifyContent:'center',
    alignItems:'center'
  }
});

module.exports = LessonNavigator;
