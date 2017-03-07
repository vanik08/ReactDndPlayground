import React, { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import ControlPanel from './ControlPanel';

class Studio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color1: 'magenta',
      color2: 'blue',
      color3: 'orange',
      color4: 'yellow',
      color5: '#343502',
      color6: '#AD3F3B',
    };

    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(destination, color) {
    this.setState({
      [destination]: color,
    });
  }

  render() {
    return (
      <div>
        <ControlPanel id="color1" color={this.state.color1} changeColor={this.changeColor} />
        <ControlPanel id="color2" color={this.state.color2} changeColor={this.changeColor} />
        <ControlPanel id="color3" color={this.state.color3} changeColor={this.changeColor} />
        <ControlPanel id="color4" color={this.state.color4} changeColor={this.changeColor} />
        <ControlPanel id="color5" color={this.state.color5} changeColor={this.changeColor} />
        <ControlPanel id="color6" color={this.state.color6} changeColor={this.changeColor} />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Studio);
