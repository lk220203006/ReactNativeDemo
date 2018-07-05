import React from 'react';
import {AppRegistry, StyleSheet, Text, View } from 'react-native';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }

var Header = require("./header");
var News = require("./news");

export default class LessonFlex extends React.Component {
  render() {
    var news = [
      "1.今年三款齐放消息早已为人们所熟悉：5.8英寸OLED屏幕版本；6.1英寸屏幕版，采用LCD屏幕，分辨率比较低，但价格也比较实惠",
      "2.关于6.1寸新iPhone所有细节：“低价”机型为啥便宜",
      "3.苹果的合作伙伴台积电（TSMC）最近开始大规模生产7纳米处理器，该处理器将用于今年的iPhone系列，可能会被苹果公司命名为A12。",
      "4.通过放弃双摄像头、3D Touch和OLED显示屏，这款6.1寸版本的iPhone售价将在600至700美元之间（也就是4000多人民币左右）"
    ];
    return (
      <View style={[styles.flex,{marginTop:25}]}>
        <Header></Header>
      <News news={news}></News>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  flex:{
    flex:1
  }
});

AppRegistry.registerComponent('LessonFlex',() => LessonFlex);
