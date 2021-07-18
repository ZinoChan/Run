import { SIGNOUT_SUCCESS, SIGNIN_SUCCESS } from '../constants/constants';

const initState = {};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGNIN_SUCCESS:
      return {
        id: action.payload.id,
        type: action.payload.type
      }
    case SIGNOUT_SUCCESS:
      return {};
    default:
      return state;
  }
};

export default authReducer;
