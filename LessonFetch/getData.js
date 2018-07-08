import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

/*

*/

class GetData extends React.Component{
  _getRequest(url){
    var opts = {
      method:'GET'
    }

    fetch(url,opts)
    .then((response) => {
      return response.text();
    })
    .then((responseText) => {
      alert(responseText);
    })
    .catch((error) => {
      alert(error);
    })
  }
  _postRequest(url){
    let formData = new FormData();
    formData.append('username','reactnative');
    formData.append('password','456');

    var opts = {
      method:'POST',
      body:formData
    }

    fetch(url.opts)
    .then((response) => {
      return response.text();
    })
    .then((responseText) => {
      alert(responseText);
    })
    .catch((error) => {
      alert(error);
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this._getRequest("http://project.lanou3g.com/projects/bj/reactnative/login.php?username=lanou&password=123")}>
          <View style={styles.btn}>
            <Text>GET</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._postRequest("http://project.lanou3g.com/projects/bj/reactnative/login.php")}>
          <View style={styles.btn}>
            <Text>POST</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:35,
    backgroundColor:'cyan',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  btn:{
    width:60,
    height:30,
    borderWidth:1,
    borderRadius:3,
    borderColor:'black',
    backgroundColor:'yellow',
    justifyContent:'center',
    alignItems:'center'
  }
});

module.exports = GetData;
