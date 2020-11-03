import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

import { Store } from "@ngxs/store";

import { Navigate } from "@ngxs/router-plugin";
import { AuthState } from "src/ngxs/auth/auth.state";

@Injectable({
  providedIn: "root"
})
export class AdminGuard implements CanActivate {
  constructor(private store: Store) {}

  canActivate(): boolean {
    const isAdmin = this.store.selectSnapshot(AuthState.isAdmin);

    if (isAdmin) {
      return isAdmin;
    } else {
      this.store.dispatch(new Navigate(["/home"]));
      alert("관리자만 접근 가능합니다.");
    }
  }
}
