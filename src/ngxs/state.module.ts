import { RouterSelectors } from "./router/router.state";
import { AuthState } from "./auth/auth.state";

const modules = [AuthState];

export class StateModule {
  static Modules = modules;
}
