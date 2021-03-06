import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

import { Store } from "@ngxs/store";

import { Navigate } from "@ngxs/router-plugin";
import { AuthState } from "src/ngxs/auth/auth.state";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store) {}

  canActivate(): boolean {
    const isAuthenticated = this.store.selectSnapshot(AuthState.isAuthenticated);

    if (isAuthenticated) {
      return isAuthenticated;
    } else {
      alert("로그인이 필요합니다.");
      this.store.dispatch(new Navigate(["/home"]));
    }
  }
}
