import * as types from "./actionType";

const initialState = {
  users: [],
  user: {},
  loading: true,
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case types.DELETE_USERS:
      return {
        ...state,
        loading: false,
      };
    case types.ADD_USERS:
      return {
        ...state,
        loading: false,
      };
      case types.UPDATE_USERS:
      return {
        ...state,
        loading: false,
      };
    case types.GET_SINGLE_USERS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducers;
