import { createAction } from '@ngrx/store';

export const ShowSpinner = createAction('[SPINNER] Show loading spinner');
export const HideSpinner = createAction('[SPINNER] Hide loading spinner');
