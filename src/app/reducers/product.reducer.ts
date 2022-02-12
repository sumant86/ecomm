import { createReducer, on, Action } from '@ngrx/store';
import { SetProducts, RemoveProducts } from "../actions/product.action";
import { Iproduct } from "../models/models";
import * as _ from "lodash";
import { ProductState } from '../app.model';



export const initialState: ProductState = {
  products: [],
};

const reducer = createReducer(
  initialState,
  on(SetProducts, (state, action) => (initProductStore(state, action.payload))),
  on(RemoveProducts, (state, action) => (removeProductFromStore(state, action.payload as any)))
);
export function ProductReducer(
  state: ProductState | undefined,
  action: Action
): ProductState {
  return reducer(state, action);
}

export const getProductState = (state: ProductState) => state;

export const selectProducts = (state: ProductState) => state.products;


function initProductStore(state: ProductState, payload: Iproduct[]): ProductState {
  return { ...state, products: payload }
}
function removeProductFromStore(state: ProductState, payload: Iproduct[]): ProductState {
  return { ...state, products: state.products.filter(
    (p:Iproduct) => !_.includes(payload, p.guid as any))
  }
}
