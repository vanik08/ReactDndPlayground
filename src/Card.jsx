// Let's make <Card text='Write the docs' /> draggable!

import React, { PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import { ItemTypes } from './Constants';

/**
 * Implements the drag source contract.
 */
const source = {
  beginDrag(props) {
    return {
      text: props.text,
      same: 'test drag payload'
    };
  },
  endDrag(props, monitor) {
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      console.log(`You dropped`, dropResult);
    }
  }
};

/**
 * Specifies the props to inject into your component.
 */
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const propTypes = {
  text: PropTypes.string.isRequired,

  // Injected by React DnD:
  isDragging: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired
};

const Card = ({ isDragging, connectDragSource, text }) => {
  return connectDragSource(
    <div style={{ width: 300, height: 300, backgroundColor: 'blue', opacity: isDragging ? 0.5 : 1 }}>
      {text}
    </div>
  );
}

Card.propTypes = propTypes;

// Export the wrapped component:
export default DragSource(ItemTypes.CARD, source, collect)(Card);