import { Component, OnInit } from "@angular/core";

import { MatDialog } from "@angular/material/dialog";
import { LoginComponent } from "../login/login.component";

import { Store, Select } from "@ngxs/store";
import { Logout } from "src/ngxs/auth/auth.action";
import { AuthState } from "src/ngxs/auth/auth.state";
import { Observable } from "rxjs";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  @Select(AuthState.isAuthenticated) isLogin$: Observable<boolean>;
  @Select(AuthState.isGuest) isGuest$: Observable<boolean>;
  constructor(public dialog: MatDialog, private store: Store) {}

  ngOnInit() {}

  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onLogOut() {
    this.store.dispatch(new Logout());
  }
}
