import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Select, Store, Actions, ofActionSuccessful, ofActionDispatched } from "@ngxs/store";
import { GetPost, CreatPostsListener } from "src/ngxs/posts/posts.action";
import { PostsState } from "src/ngxs/posts/posts.state";
import { Observable, Subject } from "rxjs";
import { GetPostQuery } from "../../API.service";
import { takeUntil, debounceTime } from "rxjs/operators";
import { AuthState } from "src/ngxs/auth/auth.state";
import Amplify from "aws-amplify";

import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";
@Component({
  selector: "app-view-post",
  templateUrl: "./view-post.component.html",
  styleUrls: ["./view-post.component.css"]
})
export class ViewPostComponent implements OnInit {
  loading: boolean = true;
  post: any;
  private unSubscribe = new Subject();
  @Select(AuthState.isAuthenticated) isLogin$: Observable<boolean>;
  @Select(PostsState.getPost) post$: Observable<GetPostQuery>;
  constructor(private route: ActivatedRoute, private store: Store, private actions: Actions) {}

  ngOnInit() {
    this.getPost();
  }

  ngOnDestroy() {
    this.unSubscribe.next();
    this.unSubscribe.complete();
  }
  deletePost() {
    const id = this.route.snapshot.paramMap.get("id");
    // this.postService.deletePost(id).subscribe((res) => {
    //   console.log("Deleted Post" + id);
    //   this.router.navigate(["/home"]);
    // });
  }

  getPost(): void {
    console.log("실행");

    let postID = this.route.snapshot.params["id"];
    this.store.dispatch(new GetPost(postID));
    this.loading = false;
  }

  authModeHandler(authMode) {
    return new Promise((resolve, reject) => {
      resolve(
        Amplify.configure({
          aws_appsync_authenticationType: authMode
        })
      );
    });
  }
}
