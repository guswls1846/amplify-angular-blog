import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "src/app/home/home.component";
import { AboutComponent } from "src/app/about/about.component";
import { ContactComponent } from "src/app/contact/contact.component";
import { PastPostsComponent } from "src/app/past-posts/past-posts.component";
import { AuthorPostComponent } from "src/app/author-post/author-post.component";
import { ViewPostComponent } from "src/app/view-post/view-post.component";
import { AuthGuard } from "./service/guard/auth-guard.service";
import { GuestGuard } from "./service/guard/guest-guard.service";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" }, //default route
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent, canActivate: [AuthGuard] },
  { path: "posts", component: PastPostsComponent, canActivate: [AuthGuard] },
  { path: "post/:id", component: ViewPostComponent },
  { path: "author-post", component: AuthorPostComponent, canActivate: [GuestGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
