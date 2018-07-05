import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.net}>
          <Image
            style={styles.netImage}
            source={{url:'http://c.hiphotos.baidu.com/image/pic/item/fd039245d688d43ffdcaed06711ed21b0ff43be6.jpg'}}/>
        </View>
        <View style={styles.local}>
          <Image style={styles.localImage}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  net:{
    marginTop:30,
    width:300,
    height:240,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'cyan'
  },
  netImage:{
    width:200,
    height:200,
    backgroundColor:'gray'
  },
  local:{
    marginTop:30,
    width:300,
    height:200,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'yellow'
  },
  localImage:{
    width:180,
    height:180,
    backgroundColor:'gray'
  },
});
