import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { Store } from "@ngrx/store";
import * as fromReducer from "./../../app.reducer";
import { SetCart } from "../../actions/cart.action";
import * as _ from "lodash";
import { Observable } from "rxjs";
import { ICartProduct } from "../../models/models";
import { AppError } from "src/app/interfaces/app-error";
import { CartActions } from "src/app/actions";

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
  products$: Observable<ICartProduct[]> | undefined;
  productList: any[] | undefined;
  filteredProductList: any[] | undefined;
  searchableList: string[] | undefined;
  ngOnInit(): void {
    this._productService.getCart().subscribe(
      (response: any) => {
        this.store.dispatch(CartActions.SetCart({payload:response["products"]}));
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
