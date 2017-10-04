
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPackageDetails} from '../actions/index'

class InQueue extends Component {

  componentDidMount() {
     this.props.fetchPackageDetails();
   }
  render() {
    return (
      <div>
        <div>Table-2</div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Pack-id </th>
                <th>Est_pickup-time </th>
                <th>Est_delivery-time</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
      </div>

    )
  }
}
function mapDispatchToProps(dispatch){
return bindActionCreators({fetchPackageDetails}, dispatch)
}
export default connect((state) => state, { fetchPackageDetails })(InQueue);
