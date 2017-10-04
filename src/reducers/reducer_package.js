import FETCH_PACKAGE_DETAILS from '../actions/index';

export default function (state= null, action){
  switch (action.type) {
    case 'FETCH_PACKAGE_DETAILS':
    //  return [action.payload.data, ]
    console.log(action.payload)
  }
  return state;
}
