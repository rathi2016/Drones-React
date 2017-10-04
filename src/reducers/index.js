import { combineReducers } from 'redux';
import DroneReducer from './reducer_drone';
import PackageReducer from './reducer_package';

const rootReducer = combineReducers({
  drone: DroneReducer,
  package: PackageReducer
});

export default rootReducer;
