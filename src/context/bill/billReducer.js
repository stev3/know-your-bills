import { SEARCH_BILLS, GET_BILL, SET_LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_BILLS:
      return {
        ...state,
        bills: action.payload,
        loading: false,
      };
    case GET_BILL:
      return {
        ...state,
        bill: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
