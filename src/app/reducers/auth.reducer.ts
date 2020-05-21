import { Action } from "@ngrx/store";
import { EAuthActions, AuthActions, IAuth } from "../actions/auth.action";

export interface State {
  user: IAuth;
  isSignIn: boolean;
}
const INITIAL_STATE: State = {
  user: null,
  isSignIn: false,
};

export function AuthReducer(state = INITIAL_STATE, action: AuthActions) {
  switch (action.type) {
    case EAuthActions.SIGN_IN:
      return { ...state, user: action.payload };
    case EAuthActions.SIGN_OUT:
      return { ...state, user: null };
    case EAuthActions.IS_SIGN_IN:
      return { ...state, isSignIn: action.payload };
    default:
      return state;
  }
}

export const getUser = (state: State) => state.user;
export const getIsSignIn = (state: State) => state.isSignIn;
