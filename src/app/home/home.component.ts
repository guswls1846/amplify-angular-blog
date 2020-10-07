import { Component, OnInit } from "@angular/core";
import { APIService } from "../API.service";

import { Store, Select } from "@ngxs/store";
import { AuthState } from "src/ngxs/auth/auth.state";

import { Observable, Subscription } from "rxjs";
import { Login } from "src/ngxs/auth/auth.action";
import Amplify, { Auth, API } from "aws-amplify";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";
// import { listPosts } from "../../graphql/queries";
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
    // setTimeout(() => {
    this.apiService.ListPosts().then((result) => {
      console.log(result);
      this.posts = result.items;
      this.loading = false;
    });
    // }, 1000);

    // const data: any = await API.graphql({
    //   query: listPosts,
    //   variables: {},
    //   authMode: GRAPHQL_AUTH_MODE.AWS_IAM,
    // });
    // console.log(data);
    // this.loading = false;
    // this.posts = data.data.listPosts.items;
  }
}
