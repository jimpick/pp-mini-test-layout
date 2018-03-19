import React, { Component } from 'react';
import MainView from './MainView';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doc: {
        x0y0: 'r',
        x0y1: 'b',
        x1y0: 'g',
        x1y1: 'r',
      },
    };
  }

  setPixelColor(x, y, color) {
    const doc = {...this.state.doc}
    doc[`x${x}y${y}`] = color
    this.setState({doc})
  }

  render() {
    return <MainView doc={this.state.doc} setPixelColor={this.setPixelColor.bind(this)} />;
  }
}
