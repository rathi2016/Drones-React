import FETCH_DRONE_DETAILS from '../actions/index';

export default function (state= [], action){
  switch (action.type) {
    case 'FETCH_DRONE_DETAILS':
     return [action.payload.data, ...state]
  }
  return state;
}
