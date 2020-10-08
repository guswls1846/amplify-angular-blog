import { RouterSelectors } from "./router/router.state";
import { AuthState } from "./auth/auth.state";
import { PostsState } from "./posts/posts.state";

const modules = [AuthState, PostsState];

export class StateModule {
  static Modules = modules;
}
