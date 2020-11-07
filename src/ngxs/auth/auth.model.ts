import { GetUserQuery } from "src/app/API.service";

export interface AuthStateModel {
  token: string | null;
  username: string | null;
  group: string;
  userInfo: GetUserQuery;
}
