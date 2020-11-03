import { Component } from "@angular/core";
import { Actions, ofActionDispatched, Store } from "@ngxs/store";
import { Router } from "@angular/router";
import { Logout, SetUser } from "src/ngxs/auth/auth.action";
import Amplify, { Hub } from "aws-amplify";
import { CreatPostsListener } from "src/ngxs/posts/posts.action";
import { AuthState } from "src/ngxs/auth/auth.state";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angular-blog-new";

  constructor(private actions: Actions, private router: Router) {}

  ngOnInit() {
    this.actions.pipe(ofActionDispatched(Logout)).subscribe(() => {
      this.router.navigate(["/home"]);
    });
  }
}
