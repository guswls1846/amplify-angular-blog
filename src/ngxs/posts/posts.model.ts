import { ModelPostFilterInput, ListPostsQuery, GetPostQuery, ListPostLikesQuery, ListPostReportsQuery } from "src/app/API.service";

export interface PostsStateModel {
  posts: ListPostsQuery;
  post: GetPostQuery;
  postLike: ListPostLikesQuery;
  reports: ListPostReportsQuery;
  searchPost: ListPostsQuery;
  nextToken: string;
}

export interface ListPostsParams {
  show?: string;
  filter?: ModelPostFilterInput;
  limit?: number;
  nextToken?: string;
}
