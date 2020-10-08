import { ModelPostFilterInput, ListPostsQuery } from "src/app/API.service";

export interface PostsStateModel {
  posts: ListPostsQuery;
  nextToken: string;
}

export interface ListPostsParams {
  filter?: ModelPostFilterInput;
  limit?: number;
  nextToken?: string;
}
