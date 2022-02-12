import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { Store } from "@ngrx/store";
import * as fromReducer from "./../../app.reducer";
import { AppError } from "src/app/interfaces/app-error";
import { Iproduct } from "src/app/models/models";
import { CartActions, ProductActions } from "src/app/actions";

@Component({
  selector: "ecomm-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  constructor(
    private _productService: ProductService,
    private store: Store<fromReducer.AppState>
  ) {}

  ngOnInit() {
    this._productService.getProducts()
    .subscribe(
      (response: any) => {
        this.store.dispatch(ProductActions.SetProducts({payload:response["products"]}));
      }
    );
    this._productService.getCart().subscribe(
      (response: any) => {
        this.store.dispatch(CartActions.SetCart({payload:response["products"]}));
      }
    );
  }
}
