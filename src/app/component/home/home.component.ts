import { Component, OnInit } from "@angular/core";
import { ListPostsQuery } from "../../API.service";

import { Store, Select, Actions, ofActionSuccessful } from "@ngxs/store";

import { Observable, Subject } from "rxjs";

import { ListPosts } from "src/ngxs/posts/posts.action";
import { PostsState } from "src/ngxs/posts/posts.state";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  loading: boolean = true;

  private unSubscribe = new Subject();

  constructor(private actions: Actions, private store: Store) {}

  @Select(PostsState.listPosts) posts$: Observable<ListPostsQuery["items"]>;
  ngOnInit() {
    this.getPosts();
    this.actions.pipe(ofActionSuccessful(ListPosts), takeUntil(this.unSubscribe)).subscribe(result => {
      this.loading = false;
    });
  }

  ngOnDestroy() {
    this.unSubscribe.next();
    this.unSubscribe.complete();
  }

  getPosts() {
    let params = { filter: null, limit: null, nextToken: null };
    this.store.dispatch(new ListPosts(params));
  }
}
