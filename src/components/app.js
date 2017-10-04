import React, { Component } from 'react';
import InTransit from '../containers/in_transit';
import InQueue from '../containers/in_queue';

export default class App extends Component {
  render() {
    return (
      <div>
        <InTransit/>
        <InQueue/>
      </div>
    );
  }
}
