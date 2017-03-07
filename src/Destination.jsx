import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import { ItemTypes } from './Constants';

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    resProp: monitor.getItem()
  };
}

const target = {
  drop(props, monitor) {
    return {
      res: monitor.getItem()
    }
  }
};

class Destination extends Component {
  render() {
    const props = this.props;

    return props.connectDropTarget(
      <div style={{ width: 300, height: 300, backgroundColor: 'red'}}>
        You can drop here!
        {props.isOver ? <h3>is Over</h3> : null}
        <h2>{props.resProp ? props.resProp.same : null}</h2>
      </div>
    );
  }
}


export default DropTarget(ItemTypes.CARD, target, collect)(Destination);