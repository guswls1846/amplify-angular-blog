import { Component, OnInit } from "@angular/core";
import { Breakpoints, BreakpointObserver } from "@angular/cdk/layout";
import { map } from "rxjs/operators";
import { IamportService } from "src/app/service/payment/iamport.service";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: "Card 1", cols: 1, rows: 1 },
          { title: "Card 2", cols: 1, rows: 1 },
          { title: "Card 3", cols: 1, rows: 1 },
          { title: "Card 4", cols: 1, rows: 1 }
        ];
      }

      return [
        { title: "Card 1", cols: 2, rows: 1 },
        { title: "Card 2", cols: 1, rows: 1 },
        { title: "Card 3", cols: 1, rows: 2 },
        { title: "Card 4", cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {}
}
