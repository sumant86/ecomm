import { Action } from "@ngrx/store";

export enum ESpinnerActions {
  SHOW_SPINNER = "[SPINNER] Show loading spinner",
  HIDE_SPINNER = "[SPINNER] Hide loading spinner"
}

export class ShowSpinner implements Action {
  readonly type = ESpinnerActions.SHOW_SPINNER;
}

export class HideSpinner implements Action {
  readonly type = ESpinnerActions.HIDE_SPINNER;
}
export type SpinnerActions = ShowSpinner | HideSpinner;
