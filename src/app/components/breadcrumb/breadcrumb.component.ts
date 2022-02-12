import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "ecomm-breadcrumb",
  templateUrl: "./breadcrumb.component.html",
  styleUrls: ["./breadcrumb.component.scss"]
})
export class BreadcrumbComponent implements OnInit {
  @Input() breadcrumbs: any;
  constructor() {}

  ngOnInit() {}
}
