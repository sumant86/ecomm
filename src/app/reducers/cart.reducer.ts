import { Action, createFeatureSelector } from "@ngrx/store";
import { ECart, CartActions } from "../actions/cart.action";
import { ICartProduct } from "../models/models";
import * as _ from "lodash";

export interface State {
  cart: ICartProduct[];
}

export const initialState: State = {
  cart: [],
};

export function reducer(state = initialState, action: CartActions): State {
  switch (action.type) {
    case ECart.SET_CART:
      return { ...state, cart: action.payload };
    case ECart.ADD_TO_CART:
      if (state.cart.length === 0) {
        return { ...state, cart: action.payload };
      } else {
        let product = state.cart.find((product) => {
          return product.id === action.payload[0]["id"];
        });
        if (!product) {
          return { ...state, cart: [...state.cart, ...action.payload] };
        } else {
          let cartProduct = _.cloneDeep(state.cart);
          _.forEach(cartProduct, (product) => {
            if (product.id === action.payload[0]["id"]) {
              product.quantity = product.quantity + 1;
            }
          });
          return { ...state, cart: [...cartProduct] };
        }
      }
    case ECart.UPDATE_CART:
      let cartProduct = _.cloneDeep(state.cart);
      _.forEach(cartProduct, (product) => {
        if (product.id === action.payload[0]["id"]) {
          product.quantity = action.payload[0]["quantity"];
        }
      });
      _.remove(cartProduct, (product) => product.quantity === 0);
      return { ...state, cart: [...cartProduct] };
    case ECart.REMOVE_FROM_CART:
      return {
        ...state,
        cart: _.filter(state.cart, (p) => !_.includes(action.payload, p["id"])),
      };
    case ECart.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
}

export const selectcart = (state: State) => state.cart;
export const getCartSize = (state: State) => state.cart.length;
