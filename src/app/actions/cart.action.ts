import { Action } from "@ngrx/store";
import { ICartProduct } from "../models/models";
export enum ECart {
  SET_CART = "[Cart] set cart",
  ADD_TO_CART = "[Cart] add to cart",
  UPDATE_CART = "[Cart] update cart",
  REMOVE_FROM_CART = "[Cart] remove from cart",
  CLEAR_CART = "[Cart] clear cart",
}

export class SetCart implements Action {
  readonly type = ECart.SET_CART;
  constructor(public payload: ICartProduct[]) {}
}
export class AddToCart implements Action {
  readonly type = ECart.ADD_TO_CART;
  constructor(public payload: ICartProduct[]) {}
}
export class UpdateCart implements Action {
  readonly type = ECart.UPDATE_CART;
  constructor(public payload: ICartProduct) {}
}
export class RemoveFromCart implements Action {
  readonly type = ECart.REMOVE_FROM_CART;
  constructor(public payload: string) {}
}
export class ClearCart implements Action {
  readonly type = ECart.CLEAR_CART;
}

export type CartActions =
  | SetCart
  | AddToCart
  | UpdateCart
  | RemoveFromCart
  | ClearCart;
