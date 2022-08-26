import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from './actionTypes';
const initialState = {
  data: {
    isAuth: false,
    token: '',
  },
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: payload,

        isAuth: true,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        token: '',
        isError: true,
        isAuth: false,
      };
    default:
      return state;
  }
};
