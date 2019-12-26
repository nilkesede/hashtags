export const actionTypes = {
  FAILURE: 'FAILURE',
  MAKE_LOGIN: 'MAKE_LOGIN',
  MAKE_LOGOUT: 'MAKE_LOGOUT',
  LOAD_USER_DATA: 'LOAD_USER_DATA',
  UNLOAD_USER_DATA: 'UNLOAD_USER_DATA'
};

export function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error
  };
}

export function makeLogin(email, password) {
  return {
    type: actionTypes.MAKE_LOGIN,
    email,
    password
  };
}

export function makeLogout() {
  return {
    type: actionTypes.MAKE_LOGOUT
  };
}

export function loadUserData(data) {
  return {
    type: actionTypes.LOAD_USER_DATA,
    data
  };
}

export function unloadUserData() {
  return {
    type: actionTypes.UNLOAD_USER_DATA
  };
}
