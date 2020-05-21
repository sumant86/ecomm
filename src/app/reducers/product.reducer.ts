import { Action, createFeatureSelector } from "@ngrx/store";
import { EProducts, ProductActions } from "../actions/product.action";
import { Iproduct } from "../models/models";
import * as _ from "lodash";

export interface ProductState {
  products: Iproduct[];
}

export const initialState: ProductState = {
  products: [],
};

export function reducer(
  state = initialState,
  action: ProductActions
): ProductState {
  switch (action.type) {
    case EProducts.SetProducts:
      return { ...state, products: action.payload };
    case EProducts.RemoveProducts:
      return {
        ...state,
        products: state.products.filter(
          (p) => !_.includes(action.payload, p["guid"])
        ),
      };
    default:
      return state;
  }
}

export const selectProducts = (state: ProductState) => state.products;
