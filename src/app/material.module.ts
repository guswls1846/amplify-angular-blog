import { NgModule } from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatMenuTrigger, MatMenuModule } from "@angular/material/menu";
import { MatButtonToggleModule } from "@angular/material/button-toggle";

const modules = [MatCardModule, MatInputModule, MatButtonModule, MatButtonToggleModule, MatDialogModule, MatIconModule, MatSelectModule, MatTableModule, MatGridListModule, MatMenuModule];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule {}
