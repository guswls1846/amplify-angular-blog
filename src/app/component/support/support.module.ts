import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { SupportComponent } from "./support.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: "",
    component: SupportComponent
  }
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class SupportModule {}
