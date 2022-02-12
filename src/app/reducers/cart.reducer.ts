import { createReducer, on, Action } from '@ngrx/store';
import { SetCart, AddToCart, UpdateCart, RemoveFromCart, ClearCart } from "../actions/cart.action";
import { ICartProduct } from "../models/models";
import * as _ from "lodash";
import { CartState } from '../app.model';

export const initialState: CartState = {
  cart: [],
};
const reducer = createReducer(
  initialState,
  on(SetCart, (state, action) => ({ ...state, cart: action.payload })),
  on(AddToCart, (state, action) =>  addProductToCart(state, action.payload)),
  on(UpdateCart, (state, action) => updateProductInCart(state, action.payload)),
  on(RemoveFromCart, (state, action) => removeProductFromCart(state, action.payload)),
  on(ClearCart, (state) => ({ ...state, cart:[] }))
);
export function CartReducer(
  state: CartState | undefined,
  action: Action
): CartState {
  return reducer(state, action);
}

function addProductToCart(state: CartState, payload: ICartProduct): CartState {
  if (state.cart.length === 0) {
    return { ...state, cart: [payload] };
  } else {
    let product = state.cart.find((product) => {
      return product.id === payload.id;
    });
    if (!product) {
      return { ...state, cart: [...state.cart, payload] };
    } else {
      let cartProduct = _.cloneDeep(state.cart);
      _.forEach(cartProduct, (product) => {
        if (product.id === payload.id) {
          product.quantity = product.quantity + 1;
        }
      });
      return { ...state, cart: [...cartProduct] };
    }
  }
}
function updateProductInCart(state: CartState, payload: ICartProduct): CartState {
  let cartProduct = _.cloneDeep(state.cart);
  _.forEach(cartProduct, (product) => {
    if (product.id === payload.id) {
      product.quantity = payload.quantity;
    }
  });
  _.remove(cartProduct, (product) => product.quantity === 0);
  return { ...state, cart: [...cartProduct] };
}

function removeProductFromCart(state: CartState, payload: string): CartState {
  return {
    ...state,
    cart: _.filter(state.cart, (p) => !_.includes(payload, p.id)),
  };
}
export const getCartState = (state: CartState) => state;
export const selectcart = (state: CartState) => state.cart;
export const getCartSize = (state: CartState) => state.cart.length;
