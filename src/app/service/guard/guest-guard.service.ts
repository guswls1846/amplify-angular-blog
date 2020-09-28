import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

import { Store } from "@ngxs/store";

import { Navigate } from "@ngxs/router-plugin";
import { AuthState } from "src/ngxs/auth/auth.state";

@Injectable({
  providedIn: "root",
})
export class GuestGuard implements CanActivate {
  constructor(private store: Store) {}

  canActivate(): boolean {
    const isGuest = this.store.selectSnapshot(AuthState.isGuest);

    if (isGuest) {
      this.store.dispatch(new Navigate(["/home"]));
      alert("로그인한 사용자만 작성할 수 있습니다.");
    } else {
      return !isGuest;
    }
  }
}
