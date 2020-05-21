import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { Store } from "@ngrx/store";
import * as fromReducer from "./../../app.reducer";
import { ProductActions, SetProducts } from "../../actions/product.action";
import { SetCart } from "../../actions/cart.action";

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
    this._productService.getProducts().subscribe(
      (response) => {
        this.store.dispatch(new SetProducts(response["products"]));
      },
      (error) => {
        console.log("error");
      }
    );
    this._productService.getCart().subscribe(
      (response) => {
        this.store.dispatch(new SetCart(response["products"]));
      },
      (error) => {
        console.log("error");
      }
    );
  }
}
