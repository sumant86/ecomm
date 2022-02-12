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
import { LoaderState, AuthState, ProductState, CartState } from "./app.model";

export interface AppState {
  loader: LoaderState;
  allProducts: ProductState;
  auth: AuthState;
  productCart: CartState;
}

export const reducers: ActionReducerMap<AppState> = {
  loader: fromLoader.LoadingReducer,
  allProducts: fromProducts.ProductReducer,
  auth: fromAuth.AuthReducer,
  productCart: fromCart.CartReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];

export const getAllProductState = createFeatureSelector<ProductState>("allProducts");
export const getAllProducts = createSelector(
  getAllProductState,
  fromProducts.selectProducts
);

export const getLoaderState = createFeatureSelector<LoaderState>("loader");
export const getLoader = createSelector(
  getLoaderState,
  fromLoader.getLoader
);

export const getAuthState = createFeatureSelector<AuthState>("auth");
export const getUser = createSelector(getAuthState, fromAuth.getUSer);
export const getIsSignIn = createSelector(getAuthState, fromAuth.getIsSignIn);

export const getCartState = createFeatureSelector<CartState>(
  "productCart"
);
export const getCart = createSelector(getCartState, fromCart.selectcart);
export const getCartSize = createSelector(getCartState, fromCart.getCartSize);
