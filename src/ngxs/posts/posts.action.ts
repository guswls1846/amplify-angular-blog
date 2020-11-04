import { ListPostsParams } from "./posts.model";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";
import { DeletePostInput, UpdatePostInput, CreatePostLikeInput, ModelPostLikeFilterInput, DeletePostLikeInput, CreatePostReportInput, ModelPostReportFilterInput } from "src/app/API.service";
export class ListPosts {
  static readonly type = "[Posts] List Posts";
  constructor(public params?: ListPostsParams) {}
}

export class SearchPosts {
  static readonly type = "[Posts] Search Posts";
  constructor(public params?: ListPostsParams) {}
}

export class CreatPostsListener {
  static readonly type = "[Posts] Creat PostsListener";
  constructor(public authMode?: GRAPHQL_AUTH_MODE) {}
}

export class GetPost {
  static readonly type = "[Posts] Get Post";
  constructor(public postID: string) {}
}

export class UpdatePost {
  static readonly type = "[Posts] Update Post";
  constructor(public parmas: UpdatePostInput) {}
}

export class DeletePost {
  static readonly type = "[Posts] Delete Post";
  constructor(public parmas: DeletePostInput) {}
}

export class CreateLikePost {
  static readonly type = "[Posts] Create Like Post";
  constructor(public parmas: CreatePostLikeInput) {}
}

export class DeleteLikePost {
  static readonly type = "[Posts] Delete Like Post";
  constructor(public parmas: DeletePostLikeInput, public index: number) {}
}

export class ListPostLike {
  static readonly type = "[Posts] List Post Like";
  constructor(public filter: ModelPostLikeFilterInput) {}
}

export class CreateReportPost {
  static readonly type = "[Posts] Create Report Post";
  constructor(public parmas: CreatePostReportInput) {}
}
export class ListPostReport {
  static readonly type = "[Posts] List Report Post";
  constructor(public filter: ModelPostReportFilterInput) {}
}

export class ChangePostShow {
  static readonly type = "[Posts] Change Post Show ";
  constructor(public parmas: UpdatePostInput) {}
}
