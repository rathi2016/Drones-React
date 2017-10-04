import axios from 'axios';
// export function fetchDroneDetails(city){
//   const url = 'https://codetest.kube.getswift.co/drones'
//   const request = axios.get(url)
//   return {
//     type: 'FETCH_DRONE_DETAILS',
//     payload: request
//   };
// }

export function fetchPackageDetails(){
  const url = 'https://codetest.kube.getswift.co/packages'
  const request = axios.get(url)

  return {
    type: 'FETCH_PACKAGE_DETAILS',
    payload: request
  };
}
