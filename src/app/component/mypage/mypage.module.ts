import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { MaterialModule } from "src/app/material.module";

import { PipeModule } from "src/app/pipe/pipe.module";
import { MypageComponent } from "./mypage.component";
import { DirectiveModule } from "src/app/directive/directive.module";
import { MyPostListComponent } from './my-post-list/my-post-list.component';

const routes: Routes = [
  {
    path: "",
    component: MypageComponent
  }
];

@NgModule({
  declarations: [MypageComponent, MyPostListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MaterialModule, PipeModule, DirectiveModule]
})
export class MyPageModule {}
