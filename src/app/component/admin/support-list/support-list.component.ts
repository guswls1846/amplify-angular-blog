import { Component, OnInit, ViewChild } from "@angular/core";
import { IamportService } from "src/app/service/payment/iamport.service";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { merge, of } from "rxjs";
import { catchError, map, startWith, switchMap } from "rxjs/operators";
@Component({
  selector: "app-support-list",
  templateUrl: "./support-list.component.html",
  styleUrls: ["./support-list.component.css"]
})
export class SupportListComponent implements OnInit {
  iamoprtAccessToken: string;
  supportList;
  displayedColumns = ["supporter", "supporterEmail", "receiver", "amount", "pay_method", "status"];
  limit = 10;
  isLoadingResults = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private iamportService: IamportService) {}

  async ngOnInit(): Promise<void> {
    let data: any = await this.iamportService.getAccessToken();
    this.iamoprtAccessToken = data.response.access_token;

    this.paginator.page
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.iamportService.getSupportList(this.iamoprtAccessToken, "", this.limit, "", this.paginator.pageIndex + 1);
        }),
        map((data: any) => {
          this.isLoadingResults = false;

          return data;
        }),
        catchError(() => {
          this.isLoadingResults = false;

          return of([]);
        })
      )
      .subscribe(data => {
        console.log(data);
        this.supportList = data.response;
      });
  }
}
