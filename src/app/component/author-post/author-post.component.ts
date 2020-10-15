import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { BlogPost } from "../../models/blog-post";
import { APIService } from "../../API.service";
import Editor from "@toast-ui/editor";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import { Storage } from "aws-amplify";

import { Store } from "@ngxs/store";
import { AuthState } from "src/ngxs/auth/auth.state";
@Component({
  selector: "app-author-post",
  templateUrl: "./author-post.component.html",
  styleUrls: ["./author-post.component.css"]
})
export class AuthorPostComponent implements OnInit {
  public post: BlogPost;
  public processing: boolean = false;
  public submitted: boolean = false;
  public success: boolean = false;
  public failure: boolean = false;

  postPath = "https://blog0c3cc48588e44806b7c782b346d0a7e204800-dev.s3.ap-northeast-2.amazonaws.com/post";
  editor: Editor;
  imageURL;
  setPostId: string = "";
  constructor(private apiService: APIService, private store: Store) {}

  ngOnInit() {
    this.post = new BlogPost();
    this.toastUiEditorset();
    this.setPostId = this.setPostID();
    console.log(this.setPostId);
  }

  toastUiEditorset() {
    this.editor = new Editor({
      el: document.querySelector("#editor"),

      height: "900px",
      initialEditType: "markdown",
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

  public submit(): void {
    const userID = this.store.selectSnapshot(AuthState.username);

    this.processing = this.submitted = true;
    let content = this.editor.getHtml();
    this.apiService.CreatePost({ id: this.setPostId, title: this.post.title, userID: userID, content: content }).then(() => {
      this.success = true;
    });
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
