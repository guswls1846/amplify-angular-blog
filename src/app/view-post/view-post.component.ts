import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { BlogPostService } from "src/app/service/blog-post.service";
import { BlogPost } from "src/app/models/blog-post";
import { JsonPipe } from "@angular/common";
import { Select } from "@ngxs/store";
import { RouterSelectors } from "src/ngxs/router/router.state";
import { Observable } from "rxjs";
import { RouterStateParams } from "src/ngxs/router/router-state-custom";
import { APIService } from "../API.service";

@Component({
  selector: "app-view-post",
  templateUrl: "./view-post.component.html",
  styleUrls: ["./view-post.component.css"],
})
export class ViewPostComponent implements OnInit {
  loading: boolean = true;
  post: any;

  constructor(private route: ActivatedRoute, private apiService: APIService) {}

  ngOnInit() {
    this.getPost();
  }

  deletePost() {
    const id = this.route.snapshot.paramMap.get("id");
    // this.postService.deletePost(id).subscribe((res) => {
    //   console.log("Deleted Post" + id);
    //   this.router.navigate(["/home"]);
    // });
  }

  getPost(): void {
    let postID = this.route.snapshot.params["id"];

    console.log("id: " + postID);
    this.apiService.GetPost(postID).then((result) => {
      console.log(result);
      this.post = result;
      this.loading = false;
    });
  }
}
