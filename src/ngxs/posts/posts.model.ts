import { ModelPostFilterInput, ListPostsQuery, GetPostQuery } from "src/app/API.service";

export interface PostsStateModel {
  posts: ListPostsQuery;
  post: GetPostQuery;
  nextToken: string;
}

export interface ListPostsParams {
  filter?: ModelPostFilterInput;
  limit?: number;
  nextToken?: string;
}
