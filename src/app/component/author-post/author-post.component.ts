import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { BlogPost } from "../../models/blog-post";
import { APIService, CreatePostInput, CategoryType } from "../../API.service";
import Editor from "@toast-ui/editor";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import { Storage } from "aws-amplify";

import { Store, Actions, ofActionSuccessful } from "@ngxs/store";
import { AuthState } from "src/ngxs/auth/auth.state";
import { ActivatedRoute } from "@angular/router";
import { PostsState } from "src/ngxs/posts/posts.state";
import { updatePost } from "src/graphql/mutations";
import { UpdatePost } from "src/ngxs/posts/posts.action";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { Navigate } from "@ngxs/router-plugin";
@Component({
  selector: "app-author-post",
  templateUrl: "./author-post.component.html",
  styleUrls: ["./author-post.component.css"]
})
export class AuthorPostComponent implements OnInit {
  public processing: boolean = false;
  public submitted: boolean = false;
  public success: boolean = false;
  public failure: boolean = false;

  postPath = "https://blog0c3cc48588e44806b7c782b346d0a7e204800-dev.s3.ap-northeast-2.amazonaws.com/post";
  editor: Editor;
  imageURL;
  setPostId: string = "";
  mode: string;

  post: {
    postID: string;
    title: string;
    author: string;
  };

  cateSelected = CategoryType.ANGULAR;
  category = [CategoryType.ANGULAR, CategoryType.REACT, CategoryType.AWS, CategoryType.WEB_PROGRAMING];

  currentUser: string = this.store.selectSnapshot(AuthState.username);
  private unSubscribe = new Subject();

  constructor(private apiService: APIService, private store: Store, private route: ActivatedRoute, private actions: Actions) {}

  ngOnInit() {
    this.mode = this.route.snapshot.params["mode"];
    const data = this.route.snapshot.queryParams;

    if (this.mode === "write") {
      this.post = {
        postID: "",
        title: "",
        author: this.currentUser
      };
      this.setPostId = this.setPostID();
      this.toastUiEditorset();
    } else {
      this.post = {
        postID: data.id,
        title: data.title,
        author: data.userID
      };
      this.setPostId = data.id;
      this.toastUiEditorset(data.content);
    }

    this.actions.pipe(ofActionSuccessful(UpdatePost), takeUntil(this.unSubscribe)).subscribe(() => {
      this.processing = this.submitted = true;
      this.success = true;
      this.store.dispatch(new Navigate(["home"]));
    });
  }

  ngOnDestroy() {
    this.unSubscribe.next();
    this.unSubscribe.complete();
  }

  toastUiEditorset(content_init_value = "") {
    this.editor = new Editor({
      el: document.querySelector("#editor"),
      height: "900px",
      initialEditType: "markdown",
      initialValue: content_init_value,
      previewStyle: "vertical",
      plugins: [colorSyntax],
      hooks: {
        addImageBlobHook: (blob, callback) => {
          this.imageUpload(blob, callback);
        }
      }
    });
  }

  imageUpload(blob, callback): any {
    console.log(blob);
    const fileName = this.uuid4() + "." + blob.name.replace(/ /g, "");

    Storage.put(fileName, blob, {
      contentType: blob.type,
      customPrefix: { public: `post/${this.setPostId}/` }
    })
      .then(result => {
        console.log(result);
        callback(`${this.postPath}/${this.setPostId}/${fileName}`, fileName);
      })
      .catch(err => {
        console.log(err);
      });
  }

  public onCreatePost(): void {
    const userID = this.store.selectSnapshot(AuthState.username);

    this.processing = this.submitted = true;
    let content = this.editor.getHtml();
    this.apiService.CreatePost({ id: this.setPostId, title: this.post.title, userID: userID, content: content, category: this.cateSelected, show: true }).then(() => {
      this.success = true;
    });
  }

  public onUpdatePost(): void {
    const userID = this.store.selectSnapshot(AuthState.username);

    this.processing = this.submitted = true;
    let content = this.editor.getHtml();
    let params = {
      id: this.post.postID,
      title: this.post.title,
      userID: userID,
      content: content
    };
    this.store.dispatch(new UpdatePost(params));
  }

  uuid4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
      let r = (Math.random() * 16) | 0,
        v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  setPostID() {
    let today = new Date();

    let randomID = "xxxxyyyxyxy".replace(/[xy]/g, c => {
      let r = (Math.random() * 16) | 0,
        v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });

    return `${today.getFullYear()}${today.getMonth()}${today.getDate()}-${randomID}`;
  }
}
