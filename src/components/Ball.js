import React,{Component} from 'react';
import {Text, View, Animated} from 'react-native';

class Ball extends Component {

  componentWillMount(){
    this.position = new Animated.ValueXY(0,0);
      Animated.spring(this.position, {
        toValue: {x:200, y: 500}
      }).start();
  }

  render(){
    return(
        <Animated.View style={this.position.getLayout()}>
          <View style={styles.ballStyle}>
          </View>
        </Animated.View>
    )
  }
}

styles = {
  ballStyle : {
    borderRadius: 20,
    backgroundColor : "black",
    height: 30,
    width: 30,

  }
}

export default Ball;
