import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { BlogPost } from "../../models/blog-post";
import { Store } from "@ngxs/store";
import { Navigate } from "@ngxs/router-plugin";

@Component({
  selector: "app-preview-post",
  templateUrl: "./preview-post.component.html",
  styleUrls: ["./preview-post.component.css"]
})
export class PreviewPostComponent implements OnInit {
  @Input() post: any;

  constructor(private store: Store, private router: Router) {}
  ngOnInit() {}

  onMovePostDetail(): void {
    console.log(this.post.id);
    this.store.dispatch(new Navigate(["post", this.post.id]));
    // this.router.navigateByUrl("/post/" + this.post.id);
  }
}
