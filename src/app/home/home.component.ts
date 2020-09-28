import { Component, OnInit } from "@angular/core";
import { APIService } from "../API.service";
import Amplify, { API, Auth } from "aws-amplify";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";
import * as queries from "../../graphql/queries";
import { Store, Select } from "@ngxs/store";
import { AuthState } from "src/ngxs/auth/auth.state";
import { Login } from "src/ngxs/auth/auth.action";
import { Observable, Subscription } from "rxjs";

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
    this.getPosts();
  }

  ngOnDestroy() {}
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
