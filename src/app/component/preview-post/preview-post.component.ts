import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

import { Store } from "@ngxs/store";
import { Navigate } from "@ngxs/router-plugin";
import { GetPostQuery } from "src/app/API.service";

// export interface testInterface {
//   test1: string;
// }
@Component({
  selector: "app-preview-post",
  templateUrl: "./preview-post.component.html",
  styleUrls: ["./preview-post.component.css"]
})
export class PreviewPostComponent implements OnInit {
  @Input() post: GetPostQuery;

  constructor(private store: Store, private router: Router) {}
  ngOnInit() {}

  onMovePostDetail(): void {
    // console.log(this.post.id);
    this.store.dispatch(new Navigate(["post", this.post.id]));
    // this.router.navigateByUrl("/post/" + this.post.id);
  }
}
