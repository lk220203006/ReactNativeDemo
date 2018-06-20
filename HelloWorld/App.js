import React,{Component} from 'react';
import { AppRegistry,StyleSheet, Text, View } from 'react-native';

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

export default class LotsOfStyles extends Component{
  render(){
    return(
      <View>
        <Text style={styles.red}>just red</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue:{
    color:'blue',
    fontWeight:'bold',
    'fontSize':30,
  },
  red:{
    color:'red',
  },
});
