import { Component } from "@angular/core";
import { Actions, ofActionDispatched, Store } from "@ngxs/store";
import { Router, NavigationEnd } from "@angular/router";
import { Logout } from "src/ngxs/auth/auth.action";
import { APIService, CategoryType } from "./API.service";
import { AuthState } from "src/ngxs/auth/auth.state";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  isScroll = false;
  scrollTop = 0;
  title = "angular-blog-new";

  constructor(private actions: Actions, private router: Router, private apiService: APIService, private store: Store) {}

  ngOnInit() {
    this.actions.pipe(ofActionDispatched(Logout)).subscribe(() => {
      this.router.navigate(["/home"]);
    });
  }

  onScroll(event) {
    console.log(event.target.scrollTop);

    this.isScroll = this.scrollTop < event.target.scrollTop;
    this.scrollTop = event.target.scrollTop;
  }

  onTest() {
    let currentUser: string = this.store.selectSnapshot(AuthState.username);
    for (let index = 0; index < 10; index++) {
      this.apiService.CreatePost({ id: String(index), title: `test${index}`, userID: currentUser, content: "test", category: CategoryType.ANGULAR, show: "true" }).then(() => {});
    }
  }
}
