import {actionTypes} from './actions'

export const defaultState = {
  error: null,
  user: null,
  tags: [],
  tweets: [],
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
        ...{user: defaultState.user}
      }

    case actionTypes.LOAD_USER_TAGS:
      return {
        ...state,
        ...{tags: action.data}
      }

    case actionTypes.UNLOAD_USER_TAGS:
      return {
        ...state,
        ...{tags: defaultState.tags}
      }

    case actionTypes.LOAD_TWEETS:
      return {
        ...state,
        ...{tweets: action.data}
      }

    case actionTypes.UNLOAD_TWEETS:
      return {
        ...state,
        ...{tags: defaultState.tweets}
      }

    case actionTypes.UPDATE_TAG:
      return {
        ...state,
        ...{tags: state.tags.map(tag => {
          if (tag.id === action.tag.id) {
            return action.tag
          }

          return tag
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
