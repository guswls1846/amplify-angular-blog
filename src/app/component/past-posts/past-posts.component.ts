import { Component, OnInit } from "@angular/core";
import { APIService, ListPostsQuery, CategoryType } from "../../API.service";
import { Select, Actions, Store, ofActionSuccessful } from "@ngxs/store";
import { PostsState } from "src/ngxs/posts/posts.state";
import { Observable, Subject } from "rxjs";
import { ListPosts } from "src/ngxs/posts/posts.action";
import { takeUntil } from "rxjs/operators";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { ListPostsParams } from "src/ngxs/posts/posts.model";

@Component({
  selector: "app-past-posts",
  templateUrl: "./past-posts.component.html",
  styleUrls: ["./past-posts.component.css"]
})
export class PastPostsComponent implements OnInit {
  loading: boolean = true;
  cate: CategoryType;
  private unSubscribe = new Subject();

  constructor(private actions: Actions, private store: Store, private route: ActivatedRoute) {}

  @Select(PostsState.listPosts) posts$: Observable<ListPostsQuery["items"]>;
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let param = params.get("category");
      switch (param) {
        case "ANGULAR":
          this.cate = CategoryType.ANGULAR;
          break;
        case "REACT":
          this.cate = CategoryType.REACT;
          break;
        case "AWS":
          this.cate = CategoryType.AWS;
          break;
        case "WEB_PROGRAMING":
          this.cate = CategoryType.WEB_PROGRAMING;
          break;

        default:
          this.cate = null;
          break;
      }
      // console.log(this.cate);
      this.getPosts();
    });

    this.actions.pipe(ofActionSuccessful(ListPosts), takeUntil(this.unSubscribe)).subscribe(result => {
      this.loading = false;
    });
  }

  ngOnDestroy() {
    this.unSubscribe.next();
    this.unSubscribe.complete();
  }

  getPosts() {
    let params: ListPostsParams;
    if (this.cate != null) {
      params = { filter: { category: { eq: this.cate }, show: { eq: true } }, limit: null, nextToken: null };
    } else {
      params = { filter: { show: { eq: true } }, limit: null, nextToken: null };
    }

    this.store.dispatch(new ListPosts(params));
  }
}
