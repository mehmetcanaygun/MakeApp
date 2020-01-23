import {
  SEARCH_PRODUCTS,
  SET_LOADING,
  CLEAR_PRODUCTS,
  SET_ALERT,
  TOGGLE_ALERT
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false
      };
    case CLEAR_PRODUCTS:
      return {
        ...state,
        products: []
      };
    case SET_ALERT:
      return {
        ...state,
        alertMsg: action.payload.msg,
        alertType: action.payload.type,
        loading: false
      };
    case TOGGLE_ALERT:
      return {
        ...state,
        alert: !state.alert
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
