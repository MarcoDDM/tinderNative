import React, {Component} from 'react';
import { View, Animated, PanResponder } from 'react-native';

class Deck extends Component {

  constructor(props){
    super(props);

    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder : () => true, //involve with user interaction with elem
      /*what user is doing around screens eg.dragging and
        anytime that user starts to drag their finger around the screen*/
      onPanResponderMove : (event, gesture)=> {
          position.setValue({x: gesture.dx , y: gesture.dy })
       },

      onPanResponderRelease : () => { } //what happens when release event is called
    });

    this.state = { panResponder, position };
  }

  renderCards(){
    return this.props.data.map((item , index) => {
      if(index === 0) {
        return(
            <Animated.View
              key = {item.id}
              style= {this.state.position.getLayout()}
              {...this.state.panResponder.panHandlers}
            >
              {this.props.renderCard(item)}
            </Animated.View>
        )
      }
      return this.props.renderCard(item);
    });
  }

  render(){
    return(
        <View>
          {this.renderCards()}
        </View>
    );
  }
}

export default Deck;
