import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { ReportPostListComponent } from "./report-post-list/report-post-list.component";
import { MaterialModule } from "src/app/material.module";
import { CdkDetailRowDirective } from "src/app/directive/cdk-detail-row.directive";
import { PipeModule } from "src/app/pipe/pipe.module";

const routes: Routes = [
  {
    path: "",
    component: AdminComponent
  }
];

@NgModule({
  declarations: [ReportPostListComponent, AdminComponent, CdkDetailRowDirective],
  imports: [CommonModule, RouterModule.forChild(routes), MaterialModule, PipeModule]
})
export class AdminModule {}
