import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { AuthorPostComponent } from "./author-post/author-post.component";
import { Components } from "./components.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminGuard } from "../service/guard/admin-guard.service";

import { LayoutModule } from "@angular/cdk/layout";
import { AuthGuard } from "../service/guard/auth-canActivate.service";
import { CdkDetailRowDirective } from "../directive/cdk-detail-row.directive";
import { SupportComponent } from "./support/support.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./components.module").then(m => m.ComponentsModule),

    children: [
      { path: "", redirectTo: "/home", pathMatch: "full" },
      { path: "home", loadChildren: () => import("./home/home.module").then(m => m.HomeModule) },
      { path: "admin", loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule), canActivate: [AdminGuard] },
      { path: "mypage", loadChildren: () => import("./mypage/mypage.module").then(m => m.MyPageModule), canActivate: [AuthGuard] },
      { path: "about", component: AboutComponent },
      { path: "contact", component: ContactComponent },
      { path: "posts/:category", loadChildren: () => import("./past-posts/past-posts.module").then(m => m.PastPostsModule) },
      { path: "post/:id", loadChildren: () => import("./view-post/view-post.module").then(m => m.ViewPostModule) },
      { path: "author-post/:mode", component: AuthorPostComponent, canActivate: [AuthGuard] },
      { path: "support/:userID", loadChildren: () => import("./support/support.module").then(m => m.SupportModule) }
    ]
  }
];

@NgModule({
  declarations: [Components, SupportComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes), LayoutModule],
  exports: [RouterModule]
})
export class ComponentsModule {}
