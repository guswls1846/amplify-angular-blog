import { AuthStateModel } from "./auth.model";
import { State, Selector, Action, StateContext, Store } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { ImmutableSelector, ImmutableContext } from "@ngxs-labs/immer-adapter";
import { Login, Logout, SocialLogin, SetUser, CreateUser } from "./auth.action";
import { tap } from "rxjs/operators";
import Amplify, { Auth } from "aws-amplify";
import { Hub, ICredentials } from "@aws-amplify/core";
import { APIService, GetUserQuery } from "src/app/API.service";
import { from } from "rxjs";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";
@State<AuthStateModel>({
  name: "auth",
  defaults: {
    token: null,
    username: null,
    group: null,
    userInfo: null
  }
})
@Injectable()
export class AuthState {
  @Selector()
  @ImmutableSelector()
  static username(state: AuthStateModel): string | null {
    return state.username;
  }

  @Selector()
  @ImmutableSelector()
  static userInfo(state: AuthStateModel): GetUserQuery {
    return state.userInfo;
  }

  @Selector()
  @ImmutableSelector()
  static token(state: AuthStateModel): string | null {
    return state.token;
  }

  @Selector()
  @ImmutableSelector()
  static isAuthenticated(state: AuthStateModel): boolean {
    return !!state.token;
  }

  @Selector()
  @ImmutableSelector()
  static isGuest(state: AuthStateModel): boolean {
    if (state.group == "guest") {
      return true;
    } else {
      return false;
    }
  }

  @Selector()
  @ImmutableSelector()
  static isAdmin(state: AuthStateModel): boolean {
    if (state.group == "admin") {
      return true;
    } else {
      return false;
    }
  }

  constructor(private store: Store, private apiService: APIService) {}
  authModeHandler(authMode) {
    return new Promise((resolve, reject) => {
      resolve(
        Amplify.configure({
          aws_appsync_authenticationType: authMode
        })
      );
    });
  }
  @Action(Login)
  @ImmutableContext()
  login(ctx: StateContext<AuthStateModel>, action: Login) {
    Auth.signIn(action.payload).then(result => {
      // console.log(result);
      // const token = result.signInUserSession.accessToken.jwtToken;
      // const group = result.signInUserSession.accessToken.payload["cognito:groups"];
      // ctx.setState((state: AuthStateModel) => {
      //   state.token = token;
      //   state.username = result.username;
      //   state.group = group;
      //   return state;
      // });
    });
  }

  @Action(SocialLogin)
  @ImmutableContext()
  socialSignIn(ctx: StateContext<AuthStateModel>, action: SocialLogin) {
    Auth.federatedSignIn({
      provider: action.provider
    });
  }

  @Action(Logout)
  @ImmutableContext()
  logout(ctx: StateContext<AuthStateModel>) {
    Auth.signOut({ global: true })
      .then(() => {
        ctx.setState((state: AuthStateModel) => {
          state.token = null;
          state.username = null;
          state.group = null;
          state.userInfo = null;
          return state;
        });
      })
      .catch(err => console.log(err));
  }

  @Action(SetUser)
  @ImmutableContext()
  setUser(ctx: StateContext<AuthStateModel>, action: SetUser) {
    // console.log(action.data);

    if (!action.data) {
      ctx.setState((state: AuthStateModel) => {
        state.token = null;
        state.username = null;
        state.group = null;
        return state;
      });
    } else {
      const token = action.data.signInUserSession.accessToken.jwtToken;
      const group = action.data.signInUserSession.accessToken.payload["cognito:groups"];
      const id = action.data.signInUserSession.idToken.payload.email;
      ctx.setState((state: AuthStateModel) => {
        state.token = token;
        state.username = id;
        state.group = group;
        return state;
      });

      return from(this.apiService.GetUser(id)).pipe(
        tap(result => {
          if (!result) {
            ctx.dispatch(new CreateUser({ id: id }));
          } else {
            ctx.setState((state: AuthStateModel) => {
              state.userInfo = result;
              return state;
            });
          }
        })
      );
    }
  }

  @Action(CreateUser)
  @ImmutableContext()
  createUser(ctx: StateContext<AuthStateModel>, action: CreateUser) {
    return from(this.apiService.CreateUser(action.params)).pipe(
      tap(result => {
        // console.log(result);
      })
    );
  }
}
