import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

// export default class LessonFlex extends React.Component{
//   render(){
//     return (
//       <View style={styles.container}>
//         <View style={styles.child1}></View>
//         <View style={styles.child2}></View>
//       </View>
//     );
//   }
// }

// var styles = StyleSheet.create({
//   container:{
//     margin:30,
//     width:300,
//     height:500,
//     backgroundColor:'yellow',
//     flexDirection:'row',
//     justifyContent:'center',
//     alignItems:'center'
//   },
//   child1:{
//     width:100,
//     height:100,
//     backgroundColor:'green'
//   },
//   child2:{
//     width:100,
//     height:100,
//     backgroundColor:'blue'
//   }
// });

/*
flex
可以给组件设定flex，flex：1表示组件可以撑满父组件所有的剩余空间
*/
// var styles = StyleSheet.create({
//   container:{
//     marginTop:30,
//     flex:1,
//     backgroundColor:'yellow'
//   },
//   child1:{
//     flex:1,
//     margin:10,
//     backgroundColor:'green'
//   },
//   child2:{
//     flex:2,
//     backgroundColor:'blue'
//   }
// });

export default class LessonFlex extends React.Component{
  render(){
    return (
      <View style={[styles.container,styles.flex]}>
        <View style={styles.item}>
          <View style={[styles.flex,styles.center]}>
            <Text>酒店</Text>
          </View>
          <View style={[styles.flex,styles.lineLeftRight]}>
            <View style={[styles.flex,styles.center,styles.lineCenter]}>
              <Text>海外酒店</Text>
            </View>
            <View style={[styles.flex,styles.center]}>
              <Text>特价酒店</Text>
            </View>
          </View>
          <View style={[styles.flex,styles.lineLeftRight]}>
            <View style={[styles.flex,styles.center,styles.lineCenter]}>
              <Text>团购</Text>
            </View>
            <View style={[styles.flex,styles.center]}>
              <Text>民宿</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container:{
    marginTop:35,
    backgroundColor:'#f2f2f2'
  },
  flex:{
    flex:1
  },
  center:{
    justifyContent:'center',
    alignItems:'center'
  },
  item:{
    flexDirection:'row',
    backgroundColor:'#ff607c',
    marginTop:5,
    marginLeft:5,
    marginRight:5,
    height:80,
    borderRadius:5
  },
  lineLeftRight:{
    borderLeftWidth:1,
    // borderRightWidth:1,
    borderColor:'white'
  },
  lineCenter:{
    borderBottomWidth:1,
    borderColor:'white'
  }
});

AppRegistry.registerComponent('LessonFlex',() => LessonFlex);
