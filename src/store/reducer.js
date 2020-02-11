import {actionTypes} from './actions'

export const defaultState = {
  error: null,
  user: null,
  tasks: null,
  isLoading: false
}

function reducer(state = defaultState, action = null) {
  switch (action.type) {
    case actionTypes.FAILURE:
      return {
        ...state,
        ...{error: action.error}
      }

    case actionTypes.LOAD_USER_DATA:
      return {
        ...state,
        ...{user: action.data}
      }

    case actionTypes.UNLOAD_USER_DATA:
      return {
        ...state,
        ...{user: null}
      }

    case actionTypes.LOAD_USER_TASKS:
      return {
        ...state,
        ...{tasks: action.data}
      }

    case actionTypes.UNLOAD_USER_TASKS:
      return {
        ...state,
        ...{tasks: null}
      }

    case actionTypes.UPDATE_TASK:
      return {
        ...state,
        ...{tasks: state.tasks.map(task => {
          if (task.id === action.task.id) {
            return action.task
          }

          return task
        })}
      }

    case actionTypes.START_LOADING:
      return {
        ...state,
        ...{isLoading: true}
      }

    case actionTypes.STOP_LOADING:
      return {
        ...state,
        ...{isLoading: false}
      }

    default:
      return state
  }
}

export default reducer
