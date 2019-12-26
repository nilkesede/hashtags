import {actionTypes} from './actions';

export const defaultState = {
  error: null,
  user: null,
  tasks: []
};

function reducer(state = defaultState, action = null) {
  switch (action.type) {
    case actionTypes.FAILURE:
      return {
        ...state,
        ...{error: action.error}
      };

    case actionTypes.LOAD_USER_DATA:
      return {
        ...state,
        ...{user: action.data}
      };

    case actionTypes.UNLOAD_USER_DATA:
      return {
        ...state,
        ...{user: null}
      };

    default:
      return state;
  }
}

export default reducer;
