import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { Store } from "@ngrx/store";
import * as fromReducer from "./../../app.reducer";
import { SetCart } from "../../actions/cart.action";
import * as _ from "lodash";
import { Observable } from "rxjs";
import { ICartProduct } from "../../models/models";

@Component({
  selector: "ecomm-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.scss"],
})
export class ShoppingCartComponent implements OnInit {
  constructor(
    private _productService: ProductService,
    private store: Store<fromReducer.AppState>
  ) {}
  products$: Observable<ICartProduct[]>;
  productList: any[];
  filteredProductList: any[];
  searchableList: string[];
  ngOnInit(): void {
    this._productService.getCart().subscribe(
      (response) => {
        this.store.dispatch(new SetCart(response["products"]));
      },
      (error) => {
        console.log("error");
      }
    );
    this.products$ = this.store.select(fromReducer.getCart);
    this.products$.subscribe((response) => {
      if (response.length > 0) {
        this.productList = response;
        this.filteredProductList = this.productList;
      }
    });
  }
}
