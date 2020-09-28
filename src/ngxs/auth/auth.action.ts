import Auth, { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";

//

export class Login {
  static readonly type = "[Auth] Login";
  constructor(public payload: { username: string; password: string }) {}
}

export class Logout {
  static readonly type = "[Auth] Logout";
}

export class SocialLogin {
  static readonly type = "[Auth] SocialLogin";
  constructor(public provider: CognitoHostedUIIdentityProvider) {}
}

export class SetUser {
  static readonly type = "[Auth] SetUser";
  constructor(public data: any) {}
}
