import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { AuthorPostComponent } from "./author-post/author-post.component";
import { Components } from "./components.component";
import { FormsModule } from "@angular/forms";

import { AdminComponent } from "./admin/admin.component";
import { AdminGuard } from "../service/guard/admin-guard.service";

import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { LayoutModule } from "@angular/cdk/layout";
import { AuthGuard } from "../service/guard/auth-canActivate.service";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./components.module").then(m => m.ComponentsModule),

    children: [
      { path: "", redirectTo: "/home", pathMatch: "full" },
      { path: "home", loadChildren: () => import("./home/home.module").then(m => m.HomeModule) },
      { path: "admin", loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule), canActivate: [AdminGuard] },
      { path: "about", component: AboutComponent },
      { path: "contact", component: ContactComponent },
      { path: "posts/:category", loadChildren: () => import("./past-posts/past-posts.module").then(m => m.PastPostsModule) },
      { path: "post/:id", loadChildren: () => import("./view-post/view-post.module").then(m => m.ViewPostModule) },
      { path: "author-post/:mode", component: AuthorPostComponent, canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  declarations: [Components],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes), MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, LayoutModule],
  exports: [RouterModule]
})
export class ComponentsModule {}
