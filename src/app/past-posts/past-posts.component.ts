import { Component, OnInit } from "@angular/core";
import { BlogPostService } from "../service/blog-post.service";
import { BlogPost } from "src/app/models/blog-post";
import { APIService } from "../API.service";

@Component({
  selector: "app-past-posts",
  templateUrl: "./past-posts.component.html",
  styleUrls: ["./past-posts.component.css"],
})
export class PastPostsComponent implements OnInit {
  loading: boolean = true;
  posts = [];

  constructor(private apiService: APIService) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.apiService.ListPosts().then((result) => {
      // console.log(result);
      this.posts = result.items;
      this.loading = false;
    });
  }
}
