import { State, Selector, Action, StateContext, Store } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { ImmutableSelector, ImmutableContext } from "@ngxs-labs/immer-adapter";

import { tap } from "rxjs/operators";
import { Auth, API, graphqlOperation } from "aws-amplify";

import { APIService, OnCreatePostPublicSubscription } from "src/app/API.service";
import { from } from "rxjs";

import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";

import { CommentStateModel } from "./comment.model";
@State<CommentStateModel>({
  name: "comment",
  defaults: {
    comments: [],
    nextToken: null
  }
})
@Injectable()
export class CommentState {
  constructor(private store: Store, private apiService: APIService) {}

  //   @Selector()
  //   @ImmutableSelector()
  //   static listPosts(state: PostsStateModel) {
  //     return state.posts.items;
  //   }

  //   @Action(ListPosts)
  //   @ImmutableContext()
  //   listPosts(ctx: StateContext<PostsStateModel>, action: ListPosts) {
  //     return from(this.apiService.ListPosts(action.params.filter, action.params.limit, action.params.nextToken)).pipe(
  //       tap(result => {
  //         console.log(result);
  //         ctx.setState((state: PostsStateModel) => {
  //           state.posts = result;
  //           state.nextToken = result.nextToken;
  //           return state;
  //         });
  //       })
  //     );
  //   }

  //   @Action(CreatPostsListener)
  //   @ImmutableContext()
  //   postsListener(ctx: StateContext<PostsStateModel>, action: CreatPostsListener) {
  //     console.log(action.authMode);

  //     return from(API.graphql({ ...graphqlOperation(subscriptions.onCreatePostPublic), authMode: action.authMode })).subscribe((result: any) => {
  //       console.log(result);

  //       ctx.setState((state: PostsStateModel) => {
  //         state.posts.items.push(result.value.data.onCreatePostPublic);
  //         return state;
  //       });
  //     });
  //   }
}
