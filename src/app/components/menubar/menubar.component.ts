import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { MatDialog } from "@angular/material/dialog";
import * as fromReducer from "./../../app.reducer";
import { GenericDialogComponent } from "./../generic-dialog/generic-dialog.component";
import { LoaderActions } from "src/app/actions";
@Component({
  selector: "ecomm-menubar",
  templateUrl: "./menubar.component.html",
  styleUrls: ["./menubar.component.scss"]
})
export class MenubarComponent implements OnInit {
  constructor(
    private store: Store<fromReducer.AppState>,
    public dialog: MatDialog
  ) {}

  ngOnInit() {}
  openLoader() {
    this.store.dispatch(LoaderActions.ShowSpinner());
    setTimeout(() => {
      this.store.dispatch(LoaderActions.HideSpinner());
    }, 5000);
  }
  confirmDialog() {
    const dialogRef = this.dialog.open(GenericDialogComponent, {
      data: {
        title: "Confirmation",
        message: `Are you sure you want to go ahead`,
        dialogType: "message",
        buttons: [
          { name: "Cancel", type: "Cancel" },
          { name: "Confirm", color: "warn", type: "ok" }
        ]
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("confirmed");
    });
  }
  htmlDialog() {
    this.dialog.open(GenericDialogComponent, {
      data: {
        title: "HTML Message",
        message: `<strong class="news-heading">HTML</strong>
        <p class="main-message">HTML Code Goes here</p>`,
        dialogType: "Htmltext",
        buttons: [{ name: "Close", type: "Cancel" }]
      }
    });
  }
  alertDialog() {
    this.dialog.open(GenericDialogComponent, {
      data: {
        title: "Alert Type",
        message: `<p class="main-message success">Alert Message</p>`,
        dialogType: "alert",
        buttons: [{ name: "Close", type: "Cancel" }]
      }
    });
  }
}
