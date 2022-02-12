import { ICartProduct, Iproduct } from "./models/models";

export interface LoaderState {
    loading: boolean;
  }
  export interface IAuth {
    id: string;
    name: string;
    img: string;
    email: string;
    givenname: string;
    familyname: string;
  }
  export interface AuthState {
    user: IAuth;
    isSignIn: boolean;
  }
  export interface CartState {
    cart: ICartProduct[];
  }
  export interface ProductState {
    products: Iproduct[];
  }