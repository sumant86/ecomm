import { Action } from "@ngrx/store";
import { Iproduct } from "../models/models";
export enum EProducts {
  SetProducts = "[Products] SetProducts",
  RemoveProducts = "[Products] RemoveProducts",
}

export class SetProducts implements Action {
  readonly type = EProducts.SetProducts;
  constructor(public payload: Iproduct[]) {}
}

export class RemoveProducts implements Action {
  readonly type = EProducts.RemoveProducts;
  constructor(public payload: string[]) {}
}

export type ProductActions = SetProducts | RemoveProducts;
