import { createReducer, on, Action } from '@ngrx/store';
import { SignIn, SignOut, IsSignIn } from "../actions/auth.action";
import { AuthState, IAuth } from "../app.model";

export const noUser: IAuth= {
  id: "",
  name: "",
  img: "",
  email: "",
  givenname: "",  
  familyname: ""
}
const initialState: AuthState = {
  user: noUser,
  isSignIn: false,
};

const reducer = createReducer(
  initialState,
  on(SignIn, (state, action) => ({ ...state, user: action.payload })),
  on(SignOut, (state) => ({ ...state, user: noUser})),
  on(IsSignIn, (state, action) => ({ ...state, isSignIn: action.payload }))
);
export function AuthReducer(
  state: AuthState | undefined,
  action: Action
): AuthState {
  return reducer(state, action);
}

export const getAuthState = (state: AuthState) => state;

export const getUSer = (state: AuthState) => state.user;
export const getIsSignIn = (state: AuthState) => state.isSignIn;
