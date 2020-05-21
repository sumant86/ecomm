import { Action } from "@ngrx/store";

export interface IAuth {
  id: string;
  name: string;
  img: string;
  email: string;
  givenname: string;
  familyname: string;
}
export enum EAuthActions {
  SIGN_IN = "[AUTH] Sign in",
  SIGN_OUT = "[AUTH] Sign Out",
  IS_SIGN_IN = "[AUTH] IsSignIn",
}

export class SignIn implements Action {
  readonly type = EAuthActions.SIGN_IN;
  constructor(public payload: IAuth) {}
}
export class SignOut implements Action {
  readonly type = EAuthActions.SIGN_OUT;
}

export class IsSignIn implements Action {
  readonly type = EAuthActions.IS_SIGN_IN;
  constructor(public payload: boolean) {}
}
export type AuthActions = SignIn | SignOut | IsSignIn;
