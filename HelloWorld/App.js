import React,{Component} from 'react';
import { AppRegistry,StyleSheet, Text,TextInput, View,ScrollView,Image,FlatList,SectionList } from 'react-native';

class Greeting extends React.Component{
  render(){
    return(
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

// export default class LosOfGreetings extends React.Component{
//   render(){
//     return (
//       <View style={{alignItems:'center'}}>
//         <Greeting name='Rexxar' />
//         <Greeting name='Jaina' />
//         <Greeting name='Valeera' />
//       </View>
//     );
//   }
// }

class Blink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showText:true};

    setInterval(() => {
      this.setState(previousState => {
        return {showText:!previousState.showText};
      });
    },1000);
  }

  render(){
    let display = this.state.showText ? this.props.text:' ';
    return(
      <Text>{display}</Text>
    );
  }
}

// export default class BlinkApp extends React.Component{
//   render(){
//     return(
//       <View>
//         <Blink text='I love to blink' />
//         <Blink text='Yes blinking is so great' />
//         <Blink text='Why did they ever take this out of HTML' />
//         <Blink text='Look at me look at me look at me' />
//       </View>
//     );
//   }
// }

// export default class LotsOfStyles extends Component{
//   render(){
//     return(
//       <View>
//         <Text style={styles.red}>just red</Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   bigblue:{
//     color:'blue',
//     fontWeight:'bold',
//     'fontSize':30,
//   },
//   red:{
//     color:'red',
//   },
// });

// export default class FixedDimensionsBasics extends Component{
//   render(){
//     return (
//       <View>
//         <View style={{width:50,height:50,backgroundColor:'powderblue'}}></View>
//         <View style={{width:100,height:100,backgroundColor:'skyblue'}}></View>
//         <View style={{width:150,height:150,backgroundColor:'steelblue'}}></View>
//       </View>
//     );
//   }
// }

class FixedDimensionsBasics extends Component{
  render(){
    return (
      <View style={{flex:1}}>
        <View style={{flex:1,backgroundColor:'powderblue'}}></View>
        <View style={{flex:2,backgroundColor:'skyblue'}}></View>
        <View style={{flex:3,backgroundColor:'steelblue'}}></View>
      </View>
    );
  }
}

class FlexDirectionBasics extends Component{
  render(){
    return(
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

class JustifyContentBasics extends Component{
  render(){
    return (
      <View style={{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-evenly',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

class AlignItemsBasics extends Component{
  render(){
    return (
      <View style={{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'stretch',
      }}>
        <View style={{ height: 50, backgroundColor: 'powderblue'}} />
        <View style={{ height: 50, backgroundColor: 'skyblue'}} />
        <View style={{ height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

class PizzaTranslator extends Component{
  constructor(props){
    super(props);
    this.state = {text:''};
  }
  render(){
    return(
      <View style={{padding:10}}>
        <TextInput
          style={{height:40,borderWidth:1}}
          placeholder="Type here to translate"
          onChangeText={(text) => this.setState({text})}>
          </TextInput>
          <Text style={{padding:10,fontSize:42,height:50}}>
            {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
          </Text>
      </View>
    );
  }
}

class IScrolledDownAndWhatHappenedNextShockedMe extends Component{
  render(){
    return(
      <ScrollView>
        <Text style={{fontSize:40}}>Scroll me plz</Text>
        <Image source={require('./img/a.png')}></Image>
        <Image source={require('./img/b.png')}></Image>
        <Image source={require('./img/c.png')}></Image>
        <Image source={require('./img/d.png')}></Image>
        <Image source={require('./img/e.png')}></Image>
        <Text style={{fontSize:40}}>If you like</Text>
        <Image source={require('./img/a.png')}></Image>
        <Image source={require('./img/b.png')}></Image>
        <Image source={require('./img/c.png')}></Image>
        <Image source={require('./img/d.png')}></Image>
        <Image source={require('./img/e.png')}></Image>
        <Text style={{fontSize:40}}>Scrolling down</Text>
        <Image source={require('./img/a.png')}></Image>
        <Image source={require('./img/b.png')}></Image>
        <Image source={require('./img/c.png')}></Image>
        <Image source={require('./img/d.png')}></Image>
        <Image source={require('./img/e.png')}></Image>
        <Text style={{fontSize:40}}>What's the best</Text>
        <Image source={require('./img/a.png')}></Image>
        <Image source={require('./img/b.png')}></Image>
        <Image source={require('./img/c.png')}></Image>
        <Image source={require('./img/d.png')}></Image>
        <Image source={require('./img/e.png')}></Image>
        <Text style={{fontSize:40}}>Framework around?</Text>
        <Image source={require('./img/a.png')}></Image>
        <Image source={require('./img/b.png')}></Image>
        <Image source={require('./img/c.png')}></Image>
        <Image source={require('./img/d.png')}></Image>
        <Image source={require('./img/e.png')}></Image>
        <Text style={{fontSize:40}}>React Native</Text>
      </ScrollView>
    );
  }
}

class FlatListBasics extends Component{
  render(){
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key:'Devin'},
            {key:'Jackson'},
            {key:'James'},
            {key:'Joel'},
            {key:'John'},
            {key:'Jillian'},
            {key:'Jimmy'},
            {key:'Julie'}
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          ></FlatList>
      </View>
    );
  }
}

export default class SectionListBasics extends Component{
  _extraUniqueKey(item,index){
    return "index"+index+item;
  }
  render(){
    return(
      <View style={styles.container}>
        <SectionList
          sections={[
            {title:'D',data:['Devin']},
            {title:'J',data:['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']}
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={this._extraUniqueKey}
        />
      </View>
    );
  }
}

// async getMoviewsFromApiAsync(){
//   try{
//     let response = await fetch('https://facebook.github.io/react-native/movies.json');
//     let responseJson = await response.jaon();
//     return responseJson.movies;
//   }
//   catch(error){
//     console.error(error);
//   }
// }

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:22
  },
  sectionHeader:{
    paddingTop:2,
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:2,
    fontSize:14,
    fontWeight:'bold',
    backgroundColor:'rgba(247,247,247,1.0)'
  },
  item:{
    padding:10,
    fontSize:18,
    height:44
  }
})

AppRegistry.registerComponent('HelloWorld',() => SectionListBasics);
