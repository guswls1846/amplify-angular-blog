import { Component } from "@angular/core";
import { Actions, ofActionDispatched, Store, Select } from "@ngxs/store";
import { Router } from "@angular/router";
import { Logout } from "src/ngxs/auth/auth.action";
import { AuthState } from "src/ngxs/auth/auth.state";
import { Observable, Subscription, from } from "rxjs";

import Amplify, { API, graphqlOperation } from "aws-amplify";

import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";
import { CreatPostsListener } from "src/ngxs/posts/posts.action";
import { debounce, debounceTime } from "rxjs/operators";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angular-blog-new";
  loginSubsription: Subscription;
  @Select(AuthState.isAuthenticated) isLogin$: Observable<boolean>;
  constructor(private actions: Actions, private router: Router, private store: Store) {}

  ngOnInit() {
    this.actions.pipe(ofActionDispatched(Logout)).subscribe(() => {
      this.router.navigate(["/home"]);
    });
    this.loginSubsription = this.isLogin$.pipe(debounceTime(500)).subscribe(logined => {
      console.log(logined);
      if (logined === true) {
        this.authModeHandler(GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS).then(() => {
          this.store.dispatch(new CreatPostsListener(GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS));
        });
      } else if (logined === false) {
        this.authModeHandler(GRAPHQL_AUTH_MODE.AWS_IAM).then(() => {
          this.store.dispatch(new CreatPostsListener(GRAPHQL_AUTH_MODE.AWS_IAM));
        });
      }
    });

    this.isLogin$.pipe();
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
  ngOnDestroy() {
    if (this.loginSubsription) {
      this.loginSubsription.unsubscribe();
    }
  }
}
