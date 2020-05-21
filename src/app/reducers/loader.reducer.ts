import { Action } from "@ngrx/store";
import { ESpinnerActions, SpinnerActions } from "../actions/loader.action";

export interface State {
  loading: boolean;
}
const INITIAL_STATE: State = {
  loading: false
};

export function LoadingReducer(state = INITIAL_STATE, action: SpinnerActions) {
  switch (action.type) {
    case ESpinnerActions.SHOW_SPINNER:
      return { ...state, loading: true };
    case ESpinnerActions.HIDE_SPINNER:
      return { ...state, loading: false };
    default:
      return state;
  }
}

export const getLoaderStatus = (state: State) => state.loading;
