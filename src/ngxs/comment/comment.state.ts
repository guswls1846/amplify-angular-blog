import { State, Action, StateContext, Store, Selector } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { ImmutableContext, ImmutableSelector } from "@ngxs-labs/immer-adapter";
import { tap } from "rxjs/operators";
import { APIService } from "src/app/API.service";
import { from } from "rxjs";
import { CommentStateModel } from "./comment.model";
import { WriteComment, ListComment, RemoveComment } from "./comment.action";
@State<CommentStateModel>({
  name: "comment",
  defaults: {
    comments: [],
    nextToken: null
  }
})
@Injectable()
export class CommentState {
  constructor(private apiService: APIService) {}

  @Selector()
  @ImmutableSelector()
  static listComment(state: CommentStateModel) {
    return state.comments;
  }

  @Action(WriteComment)
  @ImmutableContext()
  postsListener(ctx: StateContext<CommentStateModel>, action: WriteComment) {
    return from(this.apiService.CreateComment(action.params)).pipe(
      tap(result => {
        console.log(result);
        ctx.setState((state: CommentStateModel) => {
          state.comments.push(result);
          return state;
        });
      })
    );
  }

  @Action(ListComment)
  @ImmutableContext()
  listComment(ctx: StateContext<CommentStateModel>, action: ListComment) {
    return from(this.apiService.ListComments(action.params)).pipe(
      tap(result => {
        ctx.setState((state: CommentStateModel) => {
          state.comments = result.items;
          state.nextToken = result.nextToken;
          return state;
        });
      })
    );
  }

  @Action(RemoveComment)
  @ImmutableContext()
  removeComment(ctx: StateContext<CommentStateModel>, action: RemoveComment) {
    return from(this.apiService.DeleteComment(action.params)).pipe(
      tap(result => {
        console.log(result);
        ctx.setState((state: CommentStateModel) => {
          const index = state.comments.findIndex(comment => {
            return comment.id === action.params.id;
          });
          state.comments.splice(index, 1);
          return state;
        });
      })
    );
  }
}
