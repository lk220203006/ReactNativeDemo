import React from 'react';
import {AppRegisty, StyleSheet, Text, View ,TabBarIOS} from 'react-native';

var LessonTextInput = require('./textinput');
var LessonImage = require('./image');
var MovieList = require('./movieList');

export default class App extends React.Component {
  state = {
    tab:"LessonTextInput"
  }

  select(tabName){
    this.setState({
      tab:tabName
    });
  }
  render() {
    return (
      <View style={{flex:1}}>
        <TabBarIOS style={{flex:1}}>
          <TabBarIOS.Item
            title = 'LessonTextInput'
            icon = {require('./img/envelope.png')}
            onPress = {this.select.bind(this,'LessonTextInput')}
            selected={this.state.tab === 'LessonTextInput'}>
            <LessonTextInput></LessonTextInput>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title='LessonImage'
            icon={require('./img/settings.png')}
            onPress = {this.select.bind(this,'LessonImage')}
            selected={this.state.tab === 'LessonImage'}>
            <LessonImage></LessonImage>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title='MovieList'
            icon={require('./img/user-shape.png')}
            onPress = {this.select.bind(this,'MovieList')}
            selected={this.state.tab === 'MovieList'}>
            <MovieList></MovieList>
          </TabBarIOS.Item>
        </TabBarIOS>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
