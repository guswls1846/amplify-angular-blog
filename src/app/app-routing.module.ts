import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthCanLoad } from "./service/guard/auth-canLoad.service";

export const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./component/components.module").then(m => m.ComponentsModule),
    canLoad: [AuthCanLoad]
  },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
