import { Component, OnInit, HostListener } from "@angular/core";

import { MatDialog } from "@angular/material/dialog";
import { LoginComponent } from "../login/login.component";

import { Store, Select } from "@ngxs/store";
import { Logout } from "src/ngxs/auth/auth.action";
import { AuthState } from "src/ngxs/auth/auth.state";
import { Observable } from "rxjs";
import { CategoryType, ListPostsQuery } from "src/app/API.service";
import { ListPostsParams } from "src/ngxs/posts/posts.model";
import { SearchPosts } from "src/ngxs/posts/posts.action";
import { PostsState } from "src/ngxs/posts/posts.state";
import { Navigate } from "@ngxs/router-plugin";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  @Select(AuthState.isAuthenticated) isLogin$: Observable<boolean>;
  @Select(AuthState.isAdmin) isAdmin$: Observable<boolean>;
  searchValue: any = null;
  isScroll = false;
  scrollTop = 0;
  CategoryType = CategoryType;
  category = [CategoryType.ANGULAR, CategoryType.REACT, CategoryType.AWS, CategoryType.WEB_PROGRAMING];
  isShowCategory = false;
  @Select(PostsState.searchPosts) search$: Observable<ListPostsQuery["items"]>;
  constructor(public dialog: MatDialog, private store: Store) {}

  ngOnInit() {}

  onSearchValueChanged(searchValue) {
    if (!!searchValue) {
      let params: ListPostsParams;
      params = { filter: { or: [{ title: { contains: searchValue } }, { userID: { contains: searchValue } }], show: { eq: true } }, limit: null, nextToken: null };
      this.store.dispatch(new SearchPosts(params));
    }
  }

  onMouseHover() {
    this.isShowCategory = true;
  }

  onMouseLeave() {
    this.isShowCategory = false;
  }

  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onLogOut() {
    this.store.dispatch(new Logout());
  }

  onDetailPost(postID) {
    this.store.dispatch(new Navigate(["post", postID]));
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(e) {
    // console.log(e);
    let element = document.querySelector(".navbar");
    if (window.pageYOffset > element.clientHeight) {
      this.isScroll = true;
    } else {
      this.isScroll = false;
    }
  }
}
