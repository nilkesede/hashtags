export const actionTypes = {
  FAILURE: 'FAILURE',
  MAKE_LOGIN: 'MAKE_LOGIN',
  MAKE_LOGOUT: 'MAKE_LOGOUT',
  LOAD_USER_DATA: 'LOAD_USER_DATA',
  UNLOAD_USER_DATA: 'UNLOAD_USER_DATA',
  LISTEN_TASKS_ON: 'LISTEN_TASKS_ON',
  LISTEN_TASKS_OFF: 'LISTEN_TASKS_OFF',
  LOAD_USER_TASKS: 'LOAD_USER_TASKS',
  UNLOAD_USER_TASKS: 'UNLOAD_USER_TASKS',
  SAVE_TASK: 'SAVE_TASK',
  UPDATE_TASK: 'UPDATE_TASK',
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING'
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

export function listenTasksON() {
  return {
    type: actionTypes.LISTEN_TASKS_ON
  };
}

export function listenTasksOFF() {
  return {
    type: actionTypes.LISTEN_TASKS_OFF
  };
}

export function loadUserTasks(data) {
  return {
    type: actionTypes.LOAD_USER_TASKS,
    data
  };
}

export function unloadUserTasks() {
  return {
    type: actionTypes.UNLOAD_USER_TASKS
  };
}

export function saveTask(task) {
  return {
    type: actionTypes.SAVE_TASK,
    task
  };
}

export function updateTask(task) {
  return {
    type: actionTypes.UPDATE_TASK,
    task
  };
}

export function startLoading() {
  return {
    type: actionTypes.START_LOADING
  };
}

export function stopLoading() {
  return {
    type: actionTypes.STOP_LOADING
  };
}
