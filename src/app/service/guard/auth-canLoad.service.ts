import { Injectable } from "@angular/core";
import { CanLoad, Route } from "@angular/router";
import { Store } from "@ngxs/store";
import { Observable } from "rxjs";
import Amplify, { Hub, Auth } from "aws-amplify";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";
import { CreatPostsListener } from "src/ngxs/posts/posts.action";
import { SetUser } from "src/ngxs/auth/auth.action";
@Injectable({
  providedIn: "root"
})
export class AuthCanLoad implements CanLoad {
  constructor(private store: Store) {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          console.log(data);
          this.authModeHandler(GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS);
          this.store.dispatch(new SetUser(data));
          break;
        case "oAuthSignOut":
        case "signOut":
          this.store.dispatch(new SetUser(null));
          break;
        case "signIn_failure":
        case "cognitoHostedUI_failure":
          console.log("Sign in failure", data);
          break;
      }
    });
  }
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
    Auth.currentAuthenticatedUser()
      .then(result => {
        console.log(result);
        this.authModeHandler(GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS).then(() => {
          this.store.dispatch(new CreatPostsListener(GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS));
        });
      })
      .catch(err => {
        console.log(err);

        if (err === "not authenticated") {
          this.authModeHandler(GRAPHQL_AUTH_MODE.AWS_IAM).then(() => {
            this.store.dispatch(new CreatPostsListener(GRAPHQL_AUTH_MODE.AWS_IAM));
          });
        }
      });

    return true;
  }
}
