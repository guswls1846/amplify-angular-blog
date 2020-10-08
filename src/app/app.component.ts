import { Component } from "@angular/core";
import { Actions, ofActionDispatched, Store, Select } from "@ngxs/store";
import { Router } from "@angular/router";
import { Logout, Login } from "src/ngxs/auth/auth.action";
import { AuthState } from "src/ngxs/auth/auth.state";
import { Observable, Subscription, from } from "rxjs";

import Amplify, { API, graphqlOperation } from "aws-amplify";

import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";
import * as subscriptions from "../graphql/subscriptions";
import { PostsListener } from "src/ngxs/posts/posts.action";
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
    this.loginSubsription = this.isLogin$.subscribe(logined => {
      console.log(logined);
      if (!logined) {
        let myFirstPromise = new Promise((resolve, reject) => {
          resolve(
            Amplify.configure({
              aws_appsync_authenticationType: "AWS_IAM"
            })
          );
        });

        myFirstPromise.then((result: any) => {
          console.log(result);
          // if (result.aws_appsync_authenticationType == GRAPHQL_AUTH_MODE.AWS_IAM) {
          this.store.dispatch(new PostsListener(GRAPHQL_AUTH_MODE.AWS_IAM));
          // }
        });
      } else {
        let myFirstPromise = new Promise((resolve, reject) => {
          resolve(
            Amplify.configure({
              aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS"
            })
          );
        });

        myFirstPromise.then((result: any) => {
          console.log(result);

          this.store.dispatch(new PostsListener(GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS));
        });
      }
    });
  }

  ngOnDestroy() {
    if (this.loginSubsription) {
      this.loginSubsription.unsubscribe();
    }
  }
}
