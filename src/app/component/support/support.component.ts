import { Component, OnInit, NgZone } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Store } from "@ngxs/store";
import { AuthState } from "src/ngxs/auth/auth.state";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Navigate } from "@ngxs/router-plugin";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
declare var IMP: any;
@Component({
  selector: "app-support",
  templateUrl: "./support.component.html",
  styleUrls: ["./support.component.css"]
})
export class SupportComponent implements OnInit {
  userID: string;
  currentUser: string = this.store.selectSnapshot(AuthState.username);
  supportInfo = this.store.selectSnapshot(AuthState.userInfo);
  supportForm: FormGroup;
  supported: boolean = false;
  supportResult;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private store: Store, private http: HttpClient) {}

  ngOnInit(): void {
    this.supportForm = this.fb.group({
      money: ["", [Validators.required]],
      message: [""]
    });
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.userID = params.get("userID");
      console.log(this.userID);
    });
  }

  onSubmit() {
    console.log(this.supportInfo);
    if (this.supportForm.valid) {
      IMP.init("imp16998878");
      IMP.request_pay(
        {
          pg: "html5_inicis",
          pay_method: "card",
          merchant_uid: "merchant_" + new Date().getTime(),
          name: `${this.userID}`,
          amount: `${this.supportForm.get("money").value}`,
          buyer_email: `${this.currentUser}`,
          buyer_name: `${this.supportInfo.name}`,
          buyer_tel: `${this.supportInfo.phone}`
          // buyer_addr: "서울특별시 강남구 삼성동",
          // buyer_postcode: "123-456"
          // m_redirect_url: "https://www.yourdomain.com/payments/complete"
        },
        rsp => {
          this.supportResult = rsp;
          this.supported = true;
        }
      );
    }
  }

  onGoHome() {
    this.store.dispatch(new Navigate(["home"]));
  }
}
