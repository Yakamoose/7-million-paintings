import history from './history';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';


// export const loginSuccess = (user) => {
//   type: LOGIN_SUCCESS,
//   user
// };

export function loginError(user) {
  console.log('in actions, loginError func');
  console.log(user);
  alert('Log In Failed | Error Message: ' + user.message);

  return {
    type: LOGIN_ERROR,
    user,
    loggedIn: false
  }
}


export function loginSuccess(user) {
  console.log('in actions, login func');
  console.log(user);
  alert('Log In Successfull! CLick OK to view art.');


  return {
    type: LOGIN_SUCCESS,
    firstName: user.firstName,
    fullName: user.fullName,
    id: user.id,
    email: user.email,
    username: user.userName,
    loggedIn: true
  }
}

export function registerError(user) {
  console.log('in actions. registerError func');
  console.log(user);
  alert('Registration Error | ' + user.message);

  return {
    type: REGISTER_ERROR,
    user,
    loggedIn: false
  }
}

export function registerSuccess(user) {
  console.log('in actions. registerSuccess func');
  console.log(user);
  alert('User registered successfully. Click OK to view art.');

  return {
    type: REGISTER_SUCCESS,
    firstName: user.firstName,
    fullName: user.fullName,
    id: user.id,
    email: user.email,
    username: user.userName,
    loggedIn: true
  }
}






// export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
// export const registerUserSuccess = newUser => ({
//   type: REGISTER_USER_SUCCESS,
//   newUser
// });
//
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// export const loginSuccess = user => ({
//   type: LOGIN_SUCCESS,
//   user
// });




// function register(user) {
//   console.log('in actions');
//     return userService.register(user)
//             .then(
//                 user => {
//                   console.log('in action .then');
//                   console.log(user);
//                 },
//                 error => {
//                 }
//             );
//
//
//     function request(user) { return { type: 'REGISTER_REQUEST', user } }
//     function success(user) { return { type: 'REGISTER_SUCCESS', user } }
//     function failure(error) { return { type: 'REGISTER_FAILURE', error } }
// }


// export const login = (user) => {
//   console.log('in login actions');
//   fetch(`http://localhost:8080/user/${user.username}/${user.password}`)
//     .then(res => {
//         // console.log(res.body);
//         if (!res.ok) {
//             if (
//                 res.headers.has('content-type') &&
//                 res.headers
//                     .get('content-type')
//                     .startsWith('application/json')
//             ) {
//                 // It's a nice JSON error returned by us, so decode it
//                 return res.json().then(err => Promise.reject(err));
//             }
//             // It's a less informative error returned by express
//             return Promise.reject({
//                 code: res.status,
//                 message: res.statusText
//             });
//         }
//         return res.json();
//     })
//     .then(user => {
//       // console.log('All users', user);
//       if(user.userName != null) {
//         return dispatch => {
//           dispatch(loginSuccess(user));
//         };
//         console.log(user);
//       }
//       else {
//         alert('User not found');
//       }
//     })
//     .catch(err => {
//         const {reason, message, location} = err;
//
//         return Promise.reject();
//     });
// }
//
//
//
// export const postNewUser = (newUser) => {
//   // return function (dispatch) {
//   //   return fetch(`http://localhost:8080/user/${newUser.username}/${newUser.password}`)
//   //   .then(res => {
//   //       // console.log(res.body);
//   //       if (!res.ok) {
//   //           if (
//   //               res.headers.has('content-type') &&
//   //               res.headers
//   //                   .get('content-type')
//   //                   .startsWith('application/json')
//   //           ) {
//   //               // It's a nice JSON error returned by us, so decode it
//   //               return res.json().then(err => Promise.reject(err));
//   //           }
//   //           // It's a less informative error returned by express
//   //           return Promise.reject({
//   //               code: res.status,
//   //               message: res.statusText
//   //           });
//   //       }
//   //       return res.json();
//   //   })
//   //   .then(user => {
//   //     // console.log('All users', user);
//   //     if(user.userName != null) {
//   //       alert('User already exists');
//   //     }
//   //     else {
//   //       fetch('http://localhost:8080/new-user', {
//   //           headers: new Headers({
//   //               'Accept': 'application/json',
//   //               'Content-Type': 'application/json'
//   //           }),
//   //             method: 'POST',
//   //             body: JSON.stringify(newUser)
//   //         })
//   //         .then(res => {
//   //             // console.log(res.body);
//   //             if (!res.ok) {
//   //                 if (
//   //                     res.headers.has('content-type') &&
//   //                     res.headers
//   //                         .get('content-type')
//   //                         .startsWith('application/json')
//   //                 ) {
//   //                     // It's a nice JSON error returned by us, so decode it
//   //                     return res.json().then(err => Promise.reject(err));
//   //                 }
//   //                 // It's a less informative error returned by express
//   //                 return Promise.reject({
//   //                     code: res.status,
//   //                     message: res.statusText
//   //                 });
//   //             }
//   //             return res.json();
//   //         })
//   //         .then(newUser => {
//   //           console.log('Returned sereialized new user', newUser);
//   //           dispatch(registerUserSuccess(newUser));
//   //         })
//   //         .catch(err => {
//   //             const {reason, message, location} = err;
//   //
//   //             return Promise.reject();
//   //         });
//   //     }
//   //     // dispatch(registerUserSuccess(newUser));
//   //   })
//   //   .catch(err => {
//   //       const {reason, message, location} = err;
//   //
//   //       return Promise.reject();
//   //   });
//   // }
// }
//
//
//
//
//
// // export const postNewUser = newUser => {
// //   console.log('in postNewUser in actions');
// //   console.log(newUser);
// //
// //   fetch('http://localhost:8080/users')
// //   .then(res => {
// //       console.log(res.body);
// //       if (!res.ok) {
// //           if (
// //               res.headers.has('content-type') &&
// //               res.headers
// //                   .get('content-type')
// //                   .startsWith('application/json')
// //           ) {
// //               // It's a nice JSON error returned by us, so decode it
// //               return res.json().then(err => Promise.reject(err));
// //           }
// //           // It's a less informative error returned by express
// //           return Promise.reject({
// //               code: res.status,
// //               message: res.statusText
// //           });
// //       }
// //       return res.json();
// //   })
// //   .then(Users => {
// //     console.log('All users', Users);
// //     // dispatch(registerUserSuccess(newUser));
// //   })
// //   .catch(err => {
// //       const {reason, message, location} = err;
// //
// //       return Promise.reject();
// //   });
// // }
