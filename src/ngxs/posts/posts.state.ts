import { State, Selector, Action, StateContext, Store } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { ImmutableSelector, ImmutableContext } from "@ngxs-labs/immer-adapter";

import { tap, takeUntil, distinct, debounceTime, throttleTime, delay, distinctUntilChanged } from "rxjs/operators";
import { API, graphqlOperation, Auth } from "aws-amplify";

import { APIService, OnCreatePostSubscription, GetPostQuery, ListPostLikesQuery, ListPostReportsQuery } from "src/app/API.service";
import { from, Subject, of } from "rxjs";
import {
  ListPosts,
  CreatPostsListener,
  GetPost,
  DeletePost,
  UpdatePost,
  CreateLikePost,
  ListPostLike,
  DeleteLikePost,
  CreateReportPost,
  ListPostReport,
  ChangePostShow,
  SearchPosts
} from "./posts.action";
import { PostsStateModel } from "./posts.model";

import * as subscriptions from "../../graphql/subscriptions";
import { onCreatePost } from "../../graphql/subscriptions";
@State<PostsStateModel>({
  name: "posts",
  defaults: {
    posts: null,
    post: null,
    postLike: null,
    reports: null,
    searchPost: null,
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
    return state.posts?.items;
  }

  @Selector()
  @ImmutableSelector()
  static searchPosts(state: PostsStateModel) {
    return state.searchPost?.items;
  }

  @Selector()
  @ImmutableSelector()
  static getPost(state: PostsStateModel): GetPostQuery {
    return state.post;
  }

  @Selector()
  @ImmutableSelector()
  static listPostLike(state: PostsStateModel): ListPostLikesQuery {
    return state.postLike;
  }
  @Selector()
  @ImmutableSelector()
  static listPostReport(state: PostsStateModel) {
    return state.reports?.items;
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

  @Action(SearchPosts)
  @ImmutableContext()
  searchPosts(ctx: StateContext<PostsStateModel>, action: SearchPosts) {
    return from(this.apiService.ListPosts(action.params.filter, action.params.limit, action.params.nextToken)).pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(result => {
        console.log(result);
        ctx.setState((state: PostsStateModel) => {
          state.searchPost = result;
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
    from(API.graphql({ ...graphqlOperation(onCreatePost), authMode: action.authMode })).subscribe((result: any) => {
      ctx.setState((state: PostsStateModel) => {
        state.posts.items.push(result.value.data.onCreatePost);
        return state;
      });
    });
  }

  @Action(DeletePost)
  @ImmutableContext()
  deltePost(ctx: StateContext<PostsStateModel>, action: DeletePost) {
    return from(this.apiService.DeletePost(action.parmas)).pipe(
      tap(result => {
        ctx.setState((state: PostsStateModel) => {
          return state;
        });
      })
    );
  }

  @Action(UpdatePost)
  @ImmutableContext()
  updatePost(ctx: StateContext<PostsStateModel>, action: UpdatePost) {
    return from(this.apiService.UpdatePost(action.parmas)).pipe(
      tap(result => {
        console.log(result);
      })
    );
  }

  @Action(ChangePostShow)
  @ImmutableContext()
  changePostShow(ctx: StateContext<PostsStateModel>, action: ChangePostShow) {
    return from(this.apiService.UpdatePost(action.parmas)).pipe(
      tap(result => {
        ctx.setState((state: PostsStateModel) => {
          for (const report of state.reports.items) {
            if (report.postID === action.parmas.id) {
              report.post.show = action.parmas.show;
            }
          }
          return state;
        });
      })
    );
  }

  @Action(CreateLikePost)
  @ImmutableContext()
  likePost(ctx: StateContext<PostsStateModel>, action: CreateLikePost) {
    let likePost = ctx.getState().postLike;
    const index = likePost.items.findIndex(like => {
      return like.userID === action.parmas.userID;
    });

    if (index > -1) {
      ctx.dispatch(new DeleteLikePost({ id: likePost.items[index].id }, index));
    } else {
      return from(this.apiService.CreatePostLike(action.parmas)).pipe(
        tap(result => {
          ctx.setState((state: PostsStateModel) => {
            state.postLike.items.push(result);
            return state;
          });
        })
      );
    }
  }

  @Action(DeleteLikePost)
  @ImmutableContext()
  DeletePostLkie(ctx: StateContext<PostsStateModel>, action: DeleteLikePost) {
    return from(this.apiService.DeletePostLike(action.parmas)).pipe(
      tap(result => {
        // console.log(result);
        ctx.setState((state: PostsStateModel) => {
          state.postLike.items.splice(action.index, 1);
          return state;
        });
      })
    );
  }

  @Action(ListPostLike)
  @ImmutableContext()
  listPostLkie(ctx: StateContext<PostsStateModel>, action: ListPostLike) {
    return from(this.apiService.ListPostLikes(action.filter)).pipe(
      tap(result => {
        // console.log(result);
        ctx.setState((state: PostsStateModel) => {
          state.postLike = result;
          return state;
        });
      })
    );
  }

  @Action(CreateReportPost)
  @ImmutableContext()
  reportPost(ctx: StateContext<PostsStateModel>, action: CreateReportPost) {
    let reportPost = ctx.getState().post.reports.items;

    const index = reportPost.findIndex(report => {
      return report.userID === action.parmas.userID;
    });

    if (index > -1) {
      alert("신고한 글 입니다.");
    } else {
      return from(this.apiService.CreatePostReport(action.parmas)).pipe(
        tap(result => {
          ctx.setState((state: PostsStateModel) => {
            state.post.reports.items.push(result);
            return state;
          });
          alert("신고되었습니다.");
        })
      );
    }
  }

  @Action(ListPostReport)
  @ImmutableContext()
  listPostReport(ctx: StateContext<PostsStateModel>, action: ListPostReport) {
    return from(this.apiService.ListPostReports(action.filter)).pipe(
      tap(result => {
        console.log(result);
        ctx.setState((state: PostsStateModel) => {
          state.reports = result;
          return state;
        });
      })
    );
  }
}
