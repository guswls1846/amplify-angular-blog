import { ListCommentsQuery } from "src/app/API.service";

export interface CommentStateModel {
  comments: ListCommentsQuery["items"];
  nextToken: string;
}
