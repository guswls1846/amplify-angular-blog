import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CdkDetailRowDirective } from "./cdk-detail-row.directive";

@NgModule({
  declarations: [CdkDetailRowDirective],
  exports: [CdkDetailRowDirective]
})
export class DirectiveModule {}
