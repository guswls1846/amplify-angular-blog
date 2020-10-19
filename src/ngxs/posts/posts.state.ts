import { State, Selector, Action, StateContext, Store } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { ImmutableSelector, ImmutableContext } from "@ngxs-labs/immer-adapter";

import { tap, takeUntil, distinct, debounceTime, throttleTime, delay } from "rxjs/operators";
import { API, graphqlOperation, Auth } from "aws-amplify";

import { APIService, OnCreatePostSubscription } from "src/app/API.service";
import { from, Subject } from "rxjs";
import { ListPosts, CreatPostsListener, GetPost } from "./posts.action";
import { PostsStateModel } from "./posts.model";

import * as subscriptions from "../../graphql/subscriptions";
import { onCreatePost } from "../../graphql/subscriptions";
@State<PostsStateModel>({
  name: "posts",
  defaults: {
    posts: null,
    post: null,
    nextToken: null
  }
})
@Injectable()
export class PostsState {
  private unSubscribe = new Subject();

  constructor(private apiService: APIService) {}

  @Selector()
  @ImmutableSelector()
  static listPosts(state: PostsStateModel) {
    return state.posts.items;
  }

  @Selector()
  @ImmutableSelector()
  static getPost(state: PostsStateModel) {
    return state.post;
  }

  @Action(ListPosts)
  @ImmutableContext()
  listPosts(ctx: StateContext<PostsStateModel>, action: ListPosts) {
    return from(this.apiService.ListPosts(action.params.filter, action.params.limit, action.params.nextToken)).pipe(
      tap(result => {
        // console.log(result);
        ctx.setState((state: PostsStateModel) => {
          state.posts = result;
          state.nextToken = result.nextToken;
          return state;
        });
      })
    );
  }

  @Action(GetPost)
  @ImmutableContext()
  getPost(ctx: StateContext<PostsStateModel>, action: GetPost) {
    return from(this.apiService.GetPost(action.postID)).pipe(
      tap(result => {
        // console.log(result);
        ctx.setState((state: PostsStateModel) => {
          state.post = result;
          return state;
        });
      })
    );
  }

  @Action(CreatPostsListener)
  @ImmutableContext()
  postsListener(ctx: StateContext<PostsStateModel>, action: CreatPostsListener) {
    // console.log("tlfgod");

    from(API.graphql({ ...graphqlOperation(onCreatePost), authMode: action.authMode })).subscribe((result: any) => {
      console.log(result);

      ctx.setState((state: PostsStateModel) => {
        state.posts.items.push(result.value.data.onCreatePost);
        return state;
      });
    });
  }
}
