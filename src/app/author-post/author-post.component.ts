import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { NgForm } from "@angular/forms";
import { BlogPostService } from "../service/blog-post.service";
import { BlogPost } from "../models/blog-post";
import { APIService } from "../API.service";
import Editor from "@toast-ui/editor";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
@Component({
  selector: "app-author-post",
  templateUrl: "./author-post.component.html",
  styleUrls: ["./author-post.component.css"],
})
export class AuthorPostComponent implements OnInit {
  public post: BlogPost;
  public processing: boolean = false;
  public submitted: boolean = false;
  public success: boolean = false;
  public failure: boolean = false;
  editor: Editor;
  constructor(private apiService: APIService) {}

  ngOnInit() {
    this.post = new BlogPost();
    this.toastUiEditorset();
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
          this.imageUpload(blob);
          //run callback
          // callback(blob, "test");
        },
      },
    });
  }

  imageUpload(blob) {
    let reader = new FileReader();
    reader.onload = (image: any) => {
      console.log(image);

      // this.renderer.setStyle(this.profileImg.nativeElement, "background-image", `url(${image.target.result})`);
      // let saveNameTos3 = this.uploadImg.createFileName(event.target.files[0]);
      // this.saveSelectedImage(saveNameTos3);
    };
    reader.readAsDataURL(blob);
  }

  public submit(): void {
    this.processing = this.submitted = true;
    let content = this.editor.getHtml();
    console.log(content);

    // this.apiService.CreatePost({ title: this.post.title, userID: "Google_113045171599562438988", content: this.post.content }).then(() => {
    //   this.success = true;
    // });
  }
}
