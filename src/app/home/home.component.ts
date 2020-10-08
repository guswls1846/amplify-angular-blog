import { Component, OnInit } from "@angular/core";
import { APIService, ListPostsQuery } from "../API.service";

import { Store, Select, Actions, ofActionCompleted, ofActionSuccessful } from "@ngxs/store";
import { AuthState } from "src/ngxs/auth/auth.state";

import { Observable, Subscription, Subject, from } from "rxjs";
import { Login } from "src/ngxs/auth/auth.action";

import { ListPosts, PostsListener } from "src/ngxs/posts/posts.action";
import { PostsState } from "src/ngxs/posts/posts.state";
import { takeUntil } from "rxjs/operators";
import Amplify, { API, graphqlOperation, Auth } from "aws-amplify";
import awsconfig from "../../aws-exports";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";
// import { listPosts } from "../../graphql/queries";

import * as subscriptions from "../../graphql/subscriptions";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  loading: boolean = true;
  loginSubsription: Subscription;
  private unSubscribe = new Subject();
  test;
  constructor(private actions: Actions, private store: Store, private apiService: APIService) {}
  @Select(AuthState.isAuthenticated) isLogin$: Observable<boolean>;
  @Select(PostsState.listPosts) posts$: Observable<ListPostsQuery["items"]>;
  ngOnInit() {
    this.actions.pipe(ofActionSuccessful(ListPosts), takeUntil(this.unSubscribe)).subscribe((result) => {
      this.loading = false;
    });
    this.getPosts();

    this.createPostsListener();
  }

  ngOnDestroy() {
    this.unSubscribe.next();
    this.unSubscribe.complete();
    // this.test.unsubscribe();
  }

  getPosts() {
    let params = { filter: null, limit: null, nextToken: null };
    this.store.dispatch(new ListPosts(params));
  }

  createPostsListener() {
    // this.isLogin$.subscribe((logined) => {
    //   // console.log(logined);
    //   if (!logined) {
    //     this.store.dispatch(new PostsListener(GRAPHQL_AUTH_MODE.AWS_IAM));
    //   } else {
    //     this.store.dispatch(new PostsListener(GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS));
    //   }
    // });
  }
}
