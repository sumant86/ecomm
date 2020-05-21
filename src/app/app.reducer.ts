import {
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector,
  createSelector,
} from "@ngrx/store";

import { environment } from "../environments/environment";
import * as fromAuth from "./reducers/auth.reducer";
import * as fromLoader from "./reducers/loader.reducer";
import * as fromProducts from "./reducers/product.reducer";
import * as fromCart from "./reducers/cart.reducer";

export interface AppState {
  loader: fromLoader.State;
  allProducts: fromProducts.ProductState;
  auth: fromAuth.State;
  productCart: fromCart.State;
}

export const reducers: ActionReducerMap<AppState> = {
  loader: fromLoader.LoadingReducer,
  allProducts: fromProducts.reducer,
  auth: fromAuth.AuthReducer,
  productCart: fromCart.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];

export const getAllProductState = createFeatureSelector<
  fromProducts.ProductState
>("allProducts");
export const getAllProducts = createSelector(
  getAllProductState,
  fromProducts.selectProducts
);

export const getLoaderState = createFeatureSelector<fromLoader.State>("loader");
export const getLoader = createSelector(
  getLoaderState,
  fromLoader.getLoaderStatus
);

export const getAuthState = createFeatureSelector<fromAuth.State>("auth");
export const getUser = createSelector(getAuthState, fromAuth.getUser);
export const getIsSignIn = createSelector(getAuthState, fromAuth.getIsSignIn);

export const getCartState = createFeatureSelector<fromCart.State>(
  "productCart"
);
export const getCart = createSelector(getCartState, fromCart.selectcart);
export const getCartSize = createSelector(getCartState, fromCart.getCartSize);
