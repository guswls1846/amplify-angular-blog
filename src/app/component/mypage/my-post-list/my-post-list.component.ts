import { Component, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { PostsState } from "src/ngxs/posts/posts.state";
import { Observable } from "rxjs";
import { ListPostsQuery } from "src/app/API.service";
import { ListPosts } from "src/ngxs/posts/posts.action";
import { ListPostsParams } from "src/ngxs/posts/posts.model";
import { AuthState } from "src/ngxs/auth/auth.state";
import { Navigate } from "@ngxs/router-plugin";

@Component({
  selector: "app-my-post-list",
  templateUrl: "./my-post-list.component.html",
  styleUrls: ["./my-post-list.component.css"]
})
export class MyPostListComponent implements OnInit {
  displayedColumns = ["제목", "좋아요", "댓글", "신고", "카테고리", "숨겨짐"];
  currentUser: string = this.store.selectSnapshot(AuthState.username);
  @Select(PostsState.listPosts) posts$: Observable<ListPostsQuery["items"]>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getPostList();
  }

  getPostList() {
    let params: ListPostsParams = {
      filter: {
        userID: {
          eq: this.currentUser
        }
      }
    };
    this.store.dispatch(new ListPosts(params));
  }

  onDetailPost(postID) {
    this.store.dispatch(new Navigate(["post", postID]));
  }
}
