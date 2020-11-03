import { CreateCommentInput, ModelCommentFilterInput, DeleteCommentInput } from "src/app/API.service";

export class WriteComment {
  static readonly type = "[Comment] Write Comment";
  constructor(public params: CreateCommentInput) {}
}

export class ListComment {
  static readonly type = "[Comment] List Comment";
  constructor(public params: ModelCommentFilterInput) {}
}

export class RemoveComment {
  static readonly type = "[Comment] Remove Comment";
  constructor(public params: DeleteCommentInput) {}
}
