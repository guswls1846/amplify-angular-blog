import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { PastPostsComponent } from "./past-posts.component";

const routes: Routes = [
  {
    path: "",
    component: PastPostsComponent
  }
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class PastPostsModule {}
