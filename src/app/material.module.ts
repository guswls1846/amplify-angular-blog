import { NgModule } from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
const modules = [
  MatAutocompleteModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatDialogModule,
  MatIconModule,
  MatSelectModule,
  MatTableModule,
  MatGridListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatPaginatorModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule {}
