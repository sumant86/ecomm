import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { Store, select } from "@ngrx/store";
import * as fromReducer from "./app.reducer";

import { LoaderComponent } from "./components/loader/loader.component";

@Component({
  selector: 'ecomm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecomm';
  constructor(
    // private _productService: ProductService,
    public loaderDialog: MatDialog,
    private store: Store<{ loader: fromReducer.AppState }>
  ) {
    // this.count$ = this.store.pipe(select(getCount));
  }
  ngOnInit() {
    this.store.select(fromReducer.getLoader).subscribe((response) => {
      if (response === true)
        [
          this.loaderDialog.open(LoaderComponent, {
            panelClass: "transparent",
            disableClose: true,
          }),
        ];
    });
  }
}
