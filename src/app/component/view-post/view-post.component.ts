import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Select, Store, Actions, ofActionSuccessful, ofActionDispatched } from "@ngxs/store";
import { GetPost, CreatPostsListener, DeletePost, CreateLikePost, ListPostLike, CreateReportPost } from "src/ngxs/posts/posts.action";
import { PostsState } from "src/ngxs/posts/posts.state";
import { Observable, Subject } from "rxjs";
import { GetPostQuery, ListCommentsQuery, CreatePostLikeInput, ListPostLikesQuery, ModelPostLikeFilterInput } from "../../API.service";
import { takeUntil, debounceTime, take, tap } from "rxjs/operators";
import { AuthState } from "src/ngxs/auth/auth.state";
import Amplify from "aws-amplify";
import { jsPDF } from "jspdf";
import { Navigate } from "@ngxs/router-plugin";
import { DomSanitizer } from "@angular/platform-browser";
import html2canvas from "html2canvas";

@Component({
  selector: "app-view-post",
  templateUrl: "./view-post.component.html",
  styleUrls: ["./view-post.component.css"]
})
export class ViewPostComponent implements OnInit {
  loading: boolean = true;
  post: any;
  comments: any;
  htmlContent: any;
  currentUser: string = this.store.selectSnapshot(AuthState.username);

  PosterInfo;
  private unSubscribe = new Subject();

  @ViewChild("title") title: ElementRef;
  @ViewChild("content") content: ElementRef;
  @Select(AuthState.isAuthenticated) isLogin$: Observable<boolean>;

  @Select(PostsState.getPost) post$: Observable<GetPostQuery>;
  @Select(PostsState.listPostLike) postLike$: Observable<ListPostLikesQuery>;

  constructor(private route: ActivatedRoute, private store: Store, private actions: Actions, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.actions.pipe(ofActionSuccessful(DeletePost), takeUntil(this.unSubscribe)).subscribe(() => {
      this.store.dispatch(new Navigate(["/home"]));
    });

    this.actions.pipe(ofActionSuccessful(GetPost), takeUntil(this.unSubscribe)).subscribe(result => {
      this.loading = false;
    });

    this.post$.pipe(takeUntil(this.unSubscribe)).subscribe(data => {
      this.PosterInfo = data;
    });

    this.route.paramMap.subscribe((params: ParamMap) => {
      let postID = params.get("id");
      this.getPost(postID);
      this.getPostLike(postID);
    });
  }

  ngOnDestroy() {
    this.unSubscribe.next();
    this.unSubscribe.complete();
  }

  onEditPost() {
    const post = this.store.selectSnapshot(PostsState.getPost);
    const data = {
      id: post.id,
      title: post.title,
      content: post.content,
      userID: post.userID
    };

    this.store.dispatch(new Navigate(["/author-post", "update"], data));
  }

  onDeletePost() {
    const id = this.route.snapshot.paramMap.get("id");
    this.store.dispatch(new DeletePost({ id: id }));
  }

  getPost(postID): void {
    this.store.dispatch(new GetPost(postID));
  }

  getPostLike(postID) {
    let filter: ModelPostLikeFilterInput = {
      postID: { eq: postID }
    };
    this.store.dispatch(new ListPostLike(filter));
  }
  authModeHandler(authMode) {
    return new Promise((resolve, reject) => {
      resolve(
        Amplify.configure({
          aws_appsync_authenticationType: authMode
        })
      );
    });
  }

  onlike() {
    let postID = this.route.snapshot.params["id"];
    let userID = this.currentUser;
    let params: CreatePostLikeInput = {
      postID: postID,
      userID: userID
    };
    this.store.dispatch(new CreateLikePost(params));
  }

  onPostReport() {
    let postID = this.route.snapshot.params["id"];
    let userID = this.currentUser;
    let params = {
      postID: postID,
      userID: userID
    };
    this.store.dispatch(new CreateReportPost(params));
  }

  onSavePDF() {
    let content = this.content.nativeElement;
    let title = this.title.nativeElement;
    // console.log(content.innerHTML);

    html2canvas(content, {
      logging: true,

      useCORS: true

      // allowTaint: false
    }).then(canvas => {
      let imgWidth = 208;
      let imgHeight = (canvas.height * imgWidth) / canvas.width;

      const contentDataURL = canvas.toDataURL("image/png");
      // console.log(contentDataURL);
      let pdf = new jsPDF("p", "mm", "a4");
      let position = 5;
      pdf.addImage(contentDataURL, "PNG", 0, position, imgWidth, imgHeight);
      pdf.save(title.innerText);
    });
  }

  onsupport() {
    this.store.dispatch(new Navigate(["support", this.PosterInfo.userID]));
  }
}
