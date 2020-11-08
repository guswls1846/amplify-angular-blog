import { Component, OnInit } from "@angular/core";
import { trigger, state, style, transition, animate } from "@angular/animations";
import { ListPostReport, UpdatePost, ChangePostShow } from "src/ngxs/posts/posts.action";
import { Store, Select } from "@ngxs/store";
import { ModelPostReportFilterInput, ListPostReportsQuery } from "src/app/API.service";
import { PostsState } from "src/ngxs/posts/posts.state";
import { Observable } from "rxjs";
import { MatButtonToggleAppearance } from "@angular/material/button-toggle";

@Component({
  selector: "app-report-post-list",
  templateUrl: "./report-post-list.component.html",
  styleUrls: ["./report-post-list.component.css"],
  animations: [
    trigger("detailExpand", [
      state("void", style({ height: "0px", minHeight: "0", visibility: "hidden" })),
      state("*", style({ height: "*", visibility: "visible" })),
      transition("void <=> *", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))
    ])
  ]
})
export class ReportPostListComponent implements OnInit {
  // dataSource = new ExampleDataSource();
  displayedColumns = ["제목", "작성자", "신고자", "숨기기"];
  expandedElement: any;
  disabled = false;
  appearance: MatButtonToggleAppearance = "standard";
  @Select(PostsState.listPostReport) reports$: Observable<ListPostReportsQuery["items"]>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getReportList();
  }

  getReportList() {
    let filter: ModelPostReportFilterInput = null;
    this.store.dispatch(new ListPostReport(filter));
  }

  onPostHide(postID) {
    let params = {
      id: postID,
      show: "false"
    };
    this.store.dispatch(new ChangePostShow(params));
  }

  onPostShow(postID) {
    let params = {
      id: postID,
      show: "true"
    };
    this.store.dispatch(new ChangePostShow(params));
  }
}
