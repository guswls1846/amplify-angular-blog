import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ViewPostComponent } from "./view-post.component";
import { CommentListComponent } from "../comment-list/comment-list.component";
import { CommentWriteComponent } from "../comment-write/comment-write.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { PipeModule } from "src/app/pipe/pipe.module";
import { MaterialModule } from "src/app/material.module";

const routes: Routes = [
  {
    path: "",
    component: ViewPostComponent
  }
];

@NgModule({
  declarations: [ViewPostComponent, CommentListComponent, CommentWriteComponent],
  entryComponents: [CommentListComponent, CommentWriteComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule.forChild(routes), PipeModule]
})
export class ViewPostModule {}
