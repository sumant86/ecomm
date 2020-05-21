import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { Iproduct, ICartProduct } from "../models/models";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private _productsURL = "./assets/data/products.json";
  private _cartURL = "./assets/data/cart.json";
  private _orderURL = "./assets/data/orders.json";
  constructor(private _http: HttpClient) {}

  getProducts(): Observable<Iproduct[]> {
    return this._http
      .get<Iproduct[]>(this._productsURL)
      .pipe(catchError(this.handleError));
  }
  getCart(): Observable<ICartProduct[]> {
    return this._http
      .get<ICartProduct[]>(this._cartURL)
      .pipe(catchError(this.handleError));
  }
  getOrders(): Observable<Iproduct[]> {
    return this._http
      .get<Iproduct[]>(this._orderURL)
      .pipe(catchError(this.handleError));
  }
  private handleError(err) {
    return Observable.throw(err.message);
  }
}
