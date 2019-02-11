import { updateUserConst } from '../actions/UserActions';

export const userReducer = (state = '', { type, payload }) => {
  switch(type) {
    case updateUserConst:
          return payload.user;
    default: return state;
  }
}
