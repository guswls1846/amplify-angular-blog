import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { ReportPostListComponent } from "./report-post-list/report-post-list.component";
import { MaterialModule } from "src/app/material.module";

import { PipeModule } from "src/app/pipe/pipe.module";
import { DirectiveModule } from "src/app/directive/directive.module";
import { SupportListComponent } from './support-list/support-list.component';

const routes: Routes = [
  {
    path: "",
    component: AdminComponent
  }
];

@NgModule({
  declarations: [ReportPostListComponent, AdminComponent, SupportListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MaterialModule, PipeModule, DirectiveModule]
})
export class AdminModule {}
