import { Component } from "@angular/core";
import { Actions, ofActionDispatched } from "@ngxs/store";
import { Router } from "@angular/router";
import { Logout } from "src/ngxs/auth/auth.action";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  isScroll = false;
  scrollTop = 0;
  title = "angular-blog-new";

  constructor(private actions: Actions, private router: Router) {}

  ngOnInit() {
    this.actions.pipe(ofActionDispatched(Logout)).subscribe(() => {
      this.router.navigate(["/home"]);
    });
  }

  onScroll(event) {
    console.log(event.target.scrollTop);

    this.isScroll = this.scrollTop < event.target.scrollTop;
    this.scrollTop = event.target.scrollTop;
  }
}
