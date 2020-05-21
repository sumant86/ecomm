import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
@Component({
  selector: "ecomm-generic-dialog",
  templateUrl: "./generic-dialog.component.html",
  styleUrls: ["./generic-dialog.component.scss"]
})
export class GenericDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<GenericDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit() {
    if (this.data.dialogType === "alert") {
      setTimeout(() => {
        this.dialogRef.close();
      }, 2000);
    }
  }
  onCancelClick(): void {
    this.dialogRef.close();
  }
}
