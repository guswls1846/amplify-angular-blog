import { CreateCommentInput, ModelCommentFilterInput } from "src/app/API.service";

export class WriteComment {
  static readonly type = "[Comment] Write Comment";
  constructor(public params: CreateCommentInput) {}
}

export class ListComment {
  static readonly type = "[Comment] List Comment";
  constructor(public params: ModelCommentFilterInput) {}
}
