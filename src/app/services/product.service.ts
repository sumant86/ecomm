import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Iproduct, ICartProduct } from "../models/models";
import { AppError } from "../interfaces/app-error";
import { ApiService } from "./api.service"

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private _productsURL = "./assets/data/products.json";
  private _cartURL = "./assets/data/cart.json";
  private _orderURL = "./assets/data/orders.json";
  constructor(private apiService: ApiService) {}

  getProducts(): Observable<Iproduct[] | AppError> {
    return this.apiService
      .get<Iproduct[]>(
        this._productsURL
      );
  }
  
  getCart(): Observable<ICartProduct[] | AppError> {
    return this.apiService
      .get<ICartProduct[]>(
        this._cartURL
      );
  }
  
  getOrders(): Observable<Iproduct[] | AppError> {
    return this.apiService
      .get<Iproduct[]>(
        this._orderURL
      );
  }
}
