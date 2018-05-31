

export const  SET_USERNAME= 'SET_USERNAME';
export const setUsername = username => ({
  type: SET_USERNAME,
  username
});

export const SET_PASSWORD = 'SET_PASSWORD';
export const setPassword= password => ({
  type: SET_PASSWORD,
  password
})

export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const registerUserSuccess = newUser => ({
  type: REGISTER_USER_SUCCESS,
  newUser
});

export const postNewUser = (newUser) => dispatch => {
  fetch('/new-user', {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
          'Content-Type': 'application/json'
      }
  })
  .then
}
