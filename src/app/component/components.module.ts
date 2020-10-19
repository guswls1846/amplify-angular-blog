import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { AuthorPostComponent } from "./author-post/author-post.component";
import { Components } from "./components.component";
import { FormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./components.module").then(m => m.ComponentsModule),

    children: [
      { path: "", redirectTo: "/home", pathMatch: "full" },
      { path: "home", loadChildren: () => import("./home/home.module").then(m => m.HomeModule) },
      { path: "about", component: AboutComponent },
      { path: "contact", component: ContactComponent },
      { path: "posts", loadChildren: () => import("./past-posts/past-posts.module").then(m => m.PastPostsModule) },
      { path: "post/:id", loadChildren: () => import("./view-post/view-post.module").then(m => m.ViewPostModule) },
      { path: "author-post", component: AuthorPostComponent }
    ]
  }
];

@NgModule({
  declarations: [Components],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsModule {}
