import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { Store } from "@ngxs/store";
import { SocialLogin } from "src/ngxs/auth/auth.action";
import Auth, { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  cognitoProvider = CognitoHostedUIIdentityProvider;
  @Input() error: string | null;
  @Output() submitEM = new EventEmitter();
  constructor(private fb: FormBuilder, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, private store: Store) {
    const googleLogoURL = "https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg";
    this.matIconRegistry.addSvgIcon("logo", this.domSanitizer.bypassSecurityTrustResourceUrl(googleLogoURL));
  }

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [""],
      password: [""],
    });
  }

  async signInWithGoogle() {
    this.store.dispatch(new SocialLogin(this.cognitoProvider.Google));
  }
}
