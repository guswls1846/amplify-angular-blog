import { ModelPostFilterInput, ListPostsQuery, GetPostQuery, ListPostLikesQuery, ListPostReportsQuery } from "src/app/API.service";

export interface PostsStateModel {
  posts: ListPostsQuery;
  post: GetPostQuery;
  postLike: ListPostLikesQuery;
  reports: ListPostReportsQuery;
  nextToken: string;
}

export interface ListPostsParams {
  filter?: ModelPostFilterInput;
  limit?: number;
  nextToken?: string;
}
