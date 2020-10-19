import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Store, Actions, ofActionSuccessful } from "@ngxs/store";
import { WriteComment } from "src/ngxs/comment/comment.action";
import { CreateCommentInput } from "src/app/API.service";
import { ActivatedRoute } from "@angular/router";
import { AuthState } from "src/ngxs/auth/auth.state";
import { MatDialog } from "@angular/material/dialog";
import { LoginComponent } from "../login/login.component";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-comment-write",
  templateUrl: "./comment-write.component.html",
  styleUrls: ["./comment-write.component.css"]
})
export class CommentWriteComponent implements OnInit {
  commentForm: FormGroup;
  submitted = false;
  postID: string;
  private unSubscribe = new Subject();
  constructor(private fb: FormBuilder, private store: Store, private route: ActivatedRoute, public dialog: MatDialog, public actions: Actions) {}

  get form() {
    return this.commentForm.controls;
  }

  ngOnInit(): void {
    this.postID = this.route.snapshot.params["id"];
    this.commentForm = this.fb.group({
      comment: ["", [Validators.required]]
    });

    this.actions.pipe(ofActionSuccessful(WriteComment), takeUntil(this.unSubscribe)).subscribe(() => {
      this.commentForm.reset();
      this.submitted = false;
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.commentForm.valid) {
      const userID = this.store.selectSnapshot(AuthState.username);
      let comment_value = this.commentForm.get("comment").value;

      let params: CreateCommentInput = {
        postID: this.postID,
        userID: userID,
        content: comment_value
      };

      this.store.dispatch(new WriteComment(params));
    }
  }

  onFocusIn() {
    const isAuthenticated = this.store.selectSnapshot(AuthState.isAuthenticated);
    if (isAuthenticated) {
      return isAuthenticated;
    } else {
      alert("로그인이 필요합니다.");
      this.openDialog();
    }
  }

  onFocusOut() {
    this.submitted = false;
  }

  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnDestroy() {
    this.unSubscribe.next();
    this.unSubscribe.complete();
  }
}
