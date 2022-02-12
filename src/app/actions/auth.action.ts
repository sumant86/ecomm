import { createAction, props } from '@ngrx/store';
import { IAuth } from '../app.model';

export const SignIn = createAction('[AUTH] Sign in', props<{payload: IAuth}>());
export const SignOut = createAction('[AUTH] Sign Out');
export const IsSignIn = createAction('[AUTH] IsSignIn', props<{payload: boolean}>());
