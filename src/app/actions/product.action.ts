import { createAction, props } from '@ngrx/store';
import { Iproduct } from '../models/models';

export const SetProducts = createAction('[Products] SetProducts', props<{payload: Iproduct[]}>());
export const RemoveProducts = createAction('[Products] RemoveProducts', props<{payload: string}>());
