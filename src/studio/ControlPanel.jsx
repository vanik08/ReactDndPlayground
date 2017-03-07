// @flow

import React, { PropTypes } from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import ItemTypes from 'global/ItemTypes';

type dragProps = {
  id: string,
  changeColor: () => void,
  color: string
};

const sourceSpec = {
  beginDrag() {
    return {
      someData: '123',
    };
  },
  endDrag(props: dragProps, monitor: { getDropResult(): () => string }) {
    props.changeColor(monitor.getDropResult().id, props.color);
  },
};

const targetSpec = {
  drop(props: dragProps) {
    return { id: props.id };
  },
};

function sourceCollect(connect: () => void, monitor: () => void) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

function targetCollect(connect: () => void, monitor: () => void) {
  return {
    connectDropTarget: connect.dropTarget(),
    item: monitor.getItem(),
  };
}

type Props = {
  isDragging: string,
  connectDragSource: () => void,
  connectDropTarget: () => void,
  color: string,
  someData: string
};

const ControlPanel = (props: Props) => props.connectDragSource(props.connectDropTarget(
  <div style={{ float: 'left', width: 300, height: 300, backgroundColor: props.isDragging ? 'green' : props.color }}>
    <h1 style={{ color: 'white' }}>{props.someData}</h1>
  </div>,
));

ControlPanel.propTypes = {
  isDragging: PropTypes.bool,
  color: PropTypes.string,
  connectDragSource: PropTypes.func,
  connectDropTarget: PropTypes.func,
};

const Source = DragSource(ItemTypes.CHART, sourceSpec, sourceCollect)(ControlPanel);
export default DropTarget(ItemTypes.CHART, targetSpec, targetCollect)(Source);
