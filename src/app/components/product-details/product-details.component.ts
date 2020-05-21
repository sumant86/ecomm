import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";
import { ProductService } from "../../services/product.service";
import { switchMap } from "rxjs/operators";
import { Iproduct, IColumnDefinition } from "../../models/models";
import { Store } from "@ngrx/store";
import * as fromReducer from "./../../app.reducer";
import * as _ from "lodash";

@Component({
  selector: "ecomm-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"],
})
export class ProductDetailsComponent implements OnInit {
  // product$: Observable<Iproduct>;
  product: Iproduct;
  breadcrumbs: any;
  constructor(
    private _productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromReducer.AppState>
  ) {}

  ngOnInit() {
    this.breadcrumbs = [
      {
        label: "Home",
        url: "/",
      },
      {
        label: "Details",
        url: "",
      },
    ];
    this.store.select(fromReducer.getAllProducts).subscribe((products) => {
      this.route.paramMap.subscribe((params) => {
        let productId = params.get("id");
        this.product = _.find(products, { id: parseInt(productId) });
      });
    });
  }
}
