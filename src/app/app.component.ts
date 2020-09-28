import { Component } from "@angular/core";
import { Actions, ofActionDispatched, Store, Select } from "@ngxs/store";
import { Router } from "@angular/router";
import { Logout, Login } from "src/ngxs/auth/auth.action";
import { AuthState } from "src/ngxs/auth/auth.state";
import { Observable, Subscription } from "rxjs";
import { environment } from "../environments/environment.prod";
import Amplify from "aws-amplify";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
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
  }

  ngOnDestroy() {
    if (this.loginSubsription) {
      this.loginSubsription.unsubscribe();
    }
  }
}
