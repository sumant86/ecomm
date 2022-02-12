import { createAction, props } from '@ngrx/store';
import { ICartProduct } from '../models/models';

export const SetCart = createAction('[Cart] set cart', props<{payload: ICartProduct[]}>());
export const AddToCart = createAction('[Cart] add to cart', props<{payload: ICartProduct}>());
export const UpdateCart = createAction('[Cart] update cart', props<{payload: ICartProduct}>());
export const RemoveFromCart = createAction('[Cart] remove from cart', props<{payload: string}>());
export const ClearCart = createAction('[Cart] clear cart');
