import { RouterSelectors } from "./router/router.state";
import { AuthState } from "./auth/auth.state";
import { PostsState } from "./posts/posts.state";
import { CommentState } from "./comment/comment.state";

const modules = [AuthState, PostsState, CommentState];

export class StateModule {
  static Modules = modules;
}
