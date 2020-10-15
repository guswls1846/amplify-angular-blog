import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ViewPostComponent } from "./view-post.component";

const routes: Routes = [
  {
    path: "",
    component: ViewPostComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class ViewPostModule {}
