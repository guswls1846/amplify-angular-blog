import { ListPostsParams } from "./posts.model";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";
export class ListPosts {
  static readonly type = "[Posts] ListPosts";
  constructor(public params?: ListPostsParams) {}
}

export class CreatPostsListener {
  static readonly type = "[Posts] CreatPostsListener";
  constructor(public authMode?: GRAPHQL_AUTH_MODE) {}
}
