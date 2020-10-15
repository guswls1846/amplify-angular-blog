import { Component, OnInit, Type } from "@angular/core";

@Component({
  selector: "app-loading",
  templateUrl: "./loading.component.html",
  styleUrls: ["./loading.component.css"]
})
export class LoadingComponent implements OnInit {
  static PreviewPostComponent: any[] | Type<any>;

  constructor() {}

  ngOnInit() {}
}
