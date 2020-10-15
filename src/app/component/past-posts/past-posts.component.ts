import { Component, OnInit } from "@angular/core";
import { APIService, ListPostsQuery } from "../../API.service";
import { Select, Actions, Store, ofActionSuccessful } from "@ngxs/store";
import { PostsState } from "src/ngxs/posts/posts.state";
import { Observable, Subject } from "rxjs";
import { ListPosts } from "src/ngxs/posts/posts.action";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-past-posts",
  templateUrl: "./past-posts.component.html",
  styleUrls: ["./past-posts.component.css"]
})
export class PastPostsComponent implements OnInit {
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
