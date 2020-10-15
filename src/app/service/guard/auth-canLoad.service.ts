import { Injectable } from "@angular/core";
import { CanLoad, Route } from "@angular/router";
import { Store } from "@ngxs/store";
import { AuthState } from "src/ngxs/auth/auth.state";
import { Observable } from "rxjs";
import Amplify from "aws-amplify";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";
import { CreatPostsListener } from "src/ngxs/posts/posts.action";
@Injectable({
  providedIn: "root"
})
export class AuthCanLoad implements CanLoad {
  constructor(private store: Store) {}
  authModeHandler(authMode) {
    return new Promise((resolve, reject) => {
      resolve(
        Amplify.configure({
          aws_appsync_authenticationType: authMode
        })
      );
    });
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    const isAuthenticated = this.store.selectSnapshot(AuthState.isAuthenticated);
    console.log(route);
    if (isAuthenticated) {
      this.authModeHandler(GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS);
      if (route.path === "home") {
        this.store.dispatch(new CreatPostsListener(GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS));
      }
    } else {
      this.authModeHandler(GRAPHQL_AUTH_MODE.AWS_IAM);
      if (route.path === "home") {
        this.store.dispatch(new CreatPostsListener(GRAPHQL_AUTH_MODE.AWS_IAM));
      }
    }
    return true;
  }
}
