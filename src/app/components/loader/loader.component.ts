import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { Store } from "@ngrx/store";
import * as fromReducer from "./../../app.reducer";

@Component({
  selector: "ecomm-loader",
  templateUrl: "./loader.component.html",
  styleUrls: ["./loader.component.scss"]
})
export class LoaderComponent implements OnInit {
  constructor(
    public loaderDialogRef: MatDialogRef<LoaderComponent>,
    private store: Store<{ loader: fromReducer.AppState }>
  ) {}

  ngOnInit() {
    this.store.select(fromReducer.getLoader).subscribe(response => {
      if (response === false) {
        this.loaderDialogRef.close();
      }
    });
  }
}
