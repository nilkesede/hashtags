export const actionTypes = {
  FAILURE: 'FAILURE',
  MAKE_LOGIN: 'MAKE_LOGIN',
  MAKE_LOGOUT: 'MAKE_LOGOUT',
  LOAD_USER_DATA: 'LOAD_USER_DATA',
  UNLOAD_USER_DATA: 'UNLOAD_USER_DATA',
  LISTEN_TAGS_ON: 'LISTEN_TAGS_ON',
  LISTEN_TAGS_OFF: 'LISTEN_TAGS_OFF',
  LOAD_USER_TAGS: 'LOAD_USER_TAGS',
  UNLOAD_USER_TAGS: 'UNLOAD_USER_TAGS',
  SAVE_TAG: 'SAVE_TAG',
  UPDATE_TAG: 'UPDATE_TAG',
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING'
}

export function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error
  }
}

export function makeLogin(email, password) {
  return {
    type: actionTypes.MAKE_LOGIN,
    email,
    password
  }
}

export function makeLogout() {
  return {
    type: actionTypes.MAKE_LOGOUT
  }
}

export function loadUserData(data) {
  return {
    type: actionTypes.LOAD_USER_DATA,
    data
  }
}

export function unloadUserData() {
  return {
    type: actionTypes.UNLOAD_USER_DATA
  }
}

export function listenTagsON() {
  return {
    type: actionTypes.LISTEN_TAGS_ON
  }
}

export function listenTagsOFF() {
  return {
    type: actionTypes.LISTEN_TAGS_OFF
  }
}

export function loadUserTags(data) {
  return {
    type: actionTypes.LOAD_USER_TAGS,
    data
  }
}

export function unloadUserTags() {
  return {
    type: actionTypes.UNLOAD_USER_TAGS
  }
}

export function saveTag(tag) {
  return {
    type: actionTypes.SAVE_TAG,
    tag
  }
}

export function updateTag(tag) {
  return {
    type: actionTypes.UPDATE_TAG,
    tag
  }
}

export function startLoading() {
  return {
    type: actionTypes.START_LOADING
  }
}

export function stopLoading() {
  return {
    type: actionTypes.STOP_LOADING
  }
}
