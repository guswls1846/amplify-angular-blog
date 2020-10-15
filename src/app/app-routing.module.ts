import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AboutComponent } from "src/app/component/about/about.component";
import { ContactComponent } from "src/app/component/contact/contact.component";

import { AuthorPostComponent } from "src/app/component/author-post/author-post.component";
import { AuthGuard } from "./service/guard/auth-canActivate.service";
import { AuthCanLoad } from "./service/guard/auth-canLoad.service";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" }, //default route
  { path: "home", loadChildren: () => import("./component/home/home.module").then(m => m.HomeModule), canLoad: [AuthCanLoad] },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "posts", loadChildren: () => import("./component/past-posts/past-posts.module").then(m => m.PastPostsModule), canLoad: [AuthCanLoad] },
  { path: "post/:id", loadChildren: () => import("./component/view-post/view-post.module").then(m => m.ViewPostModule), canLoad: [AuthCanLoad] },
  { path: "author-post", component: AuthorPostComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
