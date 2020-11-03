import { Component, OnInit, Input } from "@angular/core";
import { Store, Select } from "@ngxs/store";

import { ListComment, RemoveComment } from "src/ngxs/comment/comment.action";
import { ModelCommentFilterInput, ListCommentsQuery } from "src/app/API.service";
import { ActivatedRoute } from "@angular/router";
import { CommentState } from "src/ngxs/comment/comment.state";
import { Observable } from "rxjs";
import { AuthState } from "src/ngxs/auth/auth.state";

@Component({
  selector: "app-comment-list",
  templateUrl: "./comment-list.component.html",
  styleUrls: ["./comment-list.component.css"]
})
export class CommentListComponent implements OnInit {
  postID: string = "";
  currentUser: string = this.store.selectSnapshot(AuthState.username);
  @Select(CommentState.listComment) comments$: Observable<ListCommentsQuery["items"]>;
  constructor(public store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.postID = this.route.snapshot.params["id"];
    this.getCommentList();
  }

  getCommentList() {
    let param: ModelCommentFilterInput = {
      postID: { eq: this.postID }
    };
    this.store.dispatch(new ListComment(param));
  }

  onRemoveComment(commentID) {
    this.store.dispatch(new RemoveComment({ id: commentID }));
  }
}
