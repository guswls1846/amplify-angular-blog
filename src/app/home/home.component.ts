import { Component, OnInit } from "@angular/core";
import { APIService } from "../API.service";

import { Store, Select } from "@ngxs/store";
import { AuthState } from "src/ngxs/auth/auth.state";

import { Observable, Subscription } from "rxjs";
import { Login } from "src/ngxs/auth/auth.action";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  loading: boolean = true;
  posts;
  loginSubsription: Subscription;

  constructor(private apiService: APIService, private store: Store) {}
  @Select(AuthState.isAuthenticated) isLogin$: Observable<boolean>;
  ngOnInit() {
    this.loginSubsription = this.isLogin$.subscribe((logined) => {
      console.log(logined);
      if (!logined) {
        // this.store.dispatch(new Login({ username: environment.guest.id, password: environment.guest.paswword }));
        this.store.dispatch(new Login({ username: "guest", password: "12345678" }));
      } else {
        this.getPosts();
      }
    });
  }

  ngOnDestroy() {
    if (this.loginSubsription) {
      this.loginSubsription.unsubscribe();
    }
  }
  getPosts() {
    this.apiService.ListPosts().then((result) => {
      // console.log(result);
      this.posts = result.items;
      this.loading = false;
    });
  }

  // cteateMember() {
  //   this.apiService.CreateUser({ id: "Google_113045171599562438988", name: "김현진" }).then((data) => console.log(data));
  // }
}
