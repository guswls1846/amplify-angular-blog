import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { Store } from "@ngxs/store";
import { SocialLogin, Login } from "src/ngxs/auth/auth.action";
import Auth, { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  cognitoProvider = CognitoHostedUIIdentityProvider;
  @Input() error: string | null;

  constructor(private fb: FormBuilder, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, private store: Store) {
    const googleLogoURL = "https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg";
    this.matIconRegistry.addSvgIcon("logo", this.domSanitizer.bypassSecurityTrustResourceUrl(googleLogoURL));
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.store.dispatch(new Login(this.loginForm.value));
    }
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [""],
      password: [""]
    });
  }

  async signInWithGoogle() {
    this.store.dispatch(new SocialLogin(this.cognitoProvider.Google));
  }
}
