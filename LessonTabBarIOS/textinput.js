import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';

class LessonTextInput extends React.Component {
  state = {
    inputText : ""
  }

  getContent(inputData){
    console.log("输入的内容",inputData.text);
    this.setState({inputText : inputData.text});
  }

  clickBtn(){
    alert(this.state.inputText);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flex}>
          <TextInput
            style={styles.input}
            returnKeyType='search'
            placeholder='请输入内容'
            onChangeText={(text) => this.getContent({text})}
            ></TextInput>
        </View>
        <TouchableOpacity style={styles.btn}
          onPress={() => this.clickBtn()}>
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

module.exports = LessonTextInput;
