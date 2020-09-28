import { NgModule } from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
const modules = [MatCardModule, MatInputModule, MatButtonModule, MatDialogModule, MatIconModule];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
