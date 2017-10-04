import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchDroneDetails} from '../actions/index'
class InTransit extends Component {

  render() {
    return (
      <div>
        <div>Table-1</div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Drone-id</th>
                <th>Pack-id </th>
                <th>Est_delivery-time </th>
                <th>Current-location</th>
              </tr>
            </thead>
            <tbody>
              </tbody>
          </table>
      </div>

    )
  }
}


export default InTransit;
