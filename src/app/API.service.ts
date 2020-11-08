/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export type CreateUserInput = {
  id?: string | null;
  name?: string | null;
  phone?: string | null;
  accountNumber?: string | null;
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  accountNumber?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export enum CategoryType {
  ANGULAR = "ANGULAR",
  REACT = "REACT",
  AWS = "AWS",
  WEB_PROGRAMING = "WEB_PROGRAMING"
}

export type UpdateUserInput = {
  id: string;
  name?: string | null;
  phone?: string | null;
  accountNumber?: string | null;
};

export type DeleteUserInput = {
  id?: string | null;
};

export type CreatePostInput = {
  id?: string | null;
  title: string;
  userID: string;
  content?: string | null;
  category?: CategoryType | null;
  show?: string | null;
  createdAt?: string | null;
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null;
  userID?: ModelIDInput | null;
  content?: ModelStringInput | null;
  category?: ModelCategoryTypeInput | null;
  show?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelPostConditionInput | null> | null;
  or?: Array<ModelPostConditionInput | null> | null;
  not?: ModelPostConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelCategoryTypeInput = {
  eq?: CategoryType | null;
  ne?: CategoryType | null;
};

export type UpdatePostInput = {
  id: string;
  title?: string | null;
  userID?: string | null;
  content?: string | null;
  category?: CategoryType | null;
  show?: string | null;
  createdAt?: string | null;
};

export type DeletePostInput = {
  id?: string | null;
};

export type CreatePostLikeInput = {
  id?: string | null;
  postID: string;
  userID: string;
};

export type ModelPostLikeConditionInput = {
  postID?: ModelIDInput | null;
  userID?: ModelIDInput | null;
  and?: Array<ModelPostLikeConditionInput | null> | null;
  or?: Array<ModelPostLikeConditionInput | null> | null;
  not?: ModelPostLikeConditionInput | null;
};

export type UpdatePostLikeInput = {
  id: string;
  postID?: string | null;
  userID?: string | null;
};

export type DeletePostLikeInput = {
  id?: string | null;
};

export type CreatePostReportInput = {
  id?: string | null;
  postID: string;
  userID: string;
};

export type ModelPostReportConditionInput = {
  postID?: ModelIDInput | null;
  userID?: ModelIDInput | null;
  and?: Array<ModelPostReportConditionInput | null> | null;
  or?: Array<ModelPostReportConditionInput | null> | null;
  not?: ModelPostReportConditionInput | null;
};

export type UpdatePostReportInput = {
  id: string;
  postID?: string | null;
  userID?: string | null;
};

export type DeletePostReportInput = {
  id?: string | null;
};

export type CreateCommentInput = {
  id?: string | null;
  userID: string;
  postID: string;
  content: string;
};

export type ModelCommentConditionInput = {
  userID?: ModelIDInput | null;
  postID?: ModelIDInput | null;
  content?: ModelStringInput | null;
  and?: Array<ModelCommentConditionInput | null> | null;
  or?: Array<ModelCommentConditionInput | null> | null;
  not?: ModelCommentConditionInput | null;
};

export type UpdateCommentInput = {
  id: string;
  userID?: string | null;
  postID?: string | null;
  content?: string | null;
};

export type DeleteCommentInput = {
  id?: string | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  accountNumber?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  userID?: ModelIDInput | null;
  content?: ModelStringInput | null;
  category?: ModelCategoryTypeInput | null;
  show?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelPostFilterInput | null> | null;
  or?: Array<ModelPostFilterInput | null> | null;
  not?: ModelPostFilterInput | null;
};

export type ModelStringKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelPostLikeFilterInput = {
  id?: ModelIDInput | null;
  postID?: ModelIDInput | null;
  userID?: ModelIDInput | null;
  and?: Array<ModelPostLikeFilterInput | null> | null;
  or?: Array<ModelPostLikeFilterInput | null> | null;
  not?: ModelPostLikeFilterInput | null;
};

export type ModelPostReportFilterInput = {
  id?: ModelIDInput | null;
  postID?: ModelIDInput | null;
  userID?: ModelIDInput | null;
  and?: Array<ModelPostReportFilterInput | null> | null;
  or?: Array<ModelPostReportFilterInput | null> | null;
  not?: ModelPostReportFilterInput | null;
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null;
  userID?: ModelIDInput | null;
  postID?: ModelIDInput | null;
  content?: ModelStringInput | null;
  and?: Array<ModelCommentFilterInput | null> | null;
  or?: Array<ModelCommentFilterInput | null> | null;
  not?: ModelCommentFilterInput | null;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  name: string | null;
  phone: string | null;
  accountNumber: string | null;
  createdAt: string;
  updatedAt: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      userID: string;
      content: string | null;
      category: CategoryType | null;
      show: string | null;
      createdAt: string | null;
      updatedAt: string;
      user: {
        __typename: "User";
        id: string;
        name: string | null;
        phone: string | null;
        accountNumber: string | null;
        createdAt: string;
        updatedAt: string;
        posts: {
          __typename: "ModelPostConnection";
          nextToken: string | null;
        } | null;
      } | null;
      likes: {
        __typename: "ModelPostLikeConnection";
        items: Array<{
          __typename: "PostLike";
          id: string;
          postID: string;
          userID: string;
          createdAt: string;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      reports: {
        __typename: "ModelPostReportConnection";
        items: Array<{
          __typename: "PostReport";
          id: string;
          postID: string;
          userID: string;
          createdAt: string;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      comments: {
        __typename: "ModelCommentConnection";
        items: Array<{
          __typename: "Comment";
          id: string;
          userID: string;
          postID: string;
          content: string;
          createdAt: string;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  name: string | null;
  phone: string | null;
  accountNumber: string | null;
  createdAt: string;
  updatedAt: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      userID: string;
      content: string | null;
      category: CategoryType | null;
      show: string | null;
      createdAt: string | null;
      updatedAt: string;
      user: {
        __typename: "User";
        id: string;
        name: string | null;
        phone: string | null;
        accountNumber: string | null;
        createdAt: string;
        updatedAt: string;
        posts: {
          __typename: "ModelPostConnection";
          nextToken: string | null;
        } | null;
      } | null;
      likes: {
        __typename: "ModelPostLikeConnection";
        items: Array<{
          __typename: "PostLike";
          id: string;
          postID: string;
          userID: string;
          createdAt: string;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      reports: {
        __typename: "ModelPostReportConnection";
        items: Array<{
          __typename: "PostReport";
          id: string;
          postID: string;
          userID: string;
          createdAt: string;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      comments: {
        __typename: "ModelCommentConnection";
        items: Array<{
          __typename: "Comment";
          id: string;
          userID: string;
          postID: string;
          content: string;
          createdAt: string;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  name: string | null;
  phone: string | null;
  accountNumber: string | null;
  createdAt: string;
  updatedAt: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      userID: string;
      content: string | null;
      category: CategoryType | null;
      show: string | null;
      createdAt: string | null;
      updatedAt: string;
      user: {
        __typename: "User";
        id: string;
        name: string | null;
        phone: string | null;
        accountNumber: string | null;
        createdAt: string;
        updatedAt: string;
        posts: {
          __typename: "ModelPostConnection";
          nextToken: string | null;
        } | null;
      } | null;
      likes: {
        __typename: "ModelPostLikeConnection";
        items: Array<{
          __typename: "PostLike";
          id: string;
          postID: string;
          userID: string;
          createdAt: string;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      reports: {
        __typename: "ModelPostReportConnection";
        items: Array<{
          __typename: "PostReport";
          id: string;
          postID: string;
          userID: string;
          createdAt: string;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      comments: {
        __typename: "ModelCommentConnection";
        items: Array<{
          __typename: "Comment";
          id: string;
          userID: string;
          postID: string;
          content: string;
          createdAt: string;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreatePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  userID: string;
  content: string | null;
  category: CategoryType | null;
  show: string | null;
  createdAt: string | null;
  updatedAt: string;
  user: {
    __typename: "User";
    id: string;
    name: string | null;
    phone: string | null;
    accountNumber: string | null;
    createdAt: string;
    updatedAt: string;
    posts: {
      __typename: "ModelPostConnection";
      items: Array<{
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
  likes: {
    __typename: "ModelPostLikeConnection";
    items: Array<{
      __typename: "PostLike";
      id: string;
      postID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
      user: {
        __typename: "User";
        id: string;
        name: string | null;
        phone: string | null;
        accountNumber: string | null;
        createdAt: string;
        updatedAt: string;
        posts: {
          __typename: "ModelPostConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  reports: {
    __typename: "ModelPostReportConnection";
    items: Array<{
      __typename: "PostReport";
      id: string;
      postID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
      user: {
        __typename: "User";
        id: string;
        name: string | null;
        phone: string | null;
        accountNumber: string | null;
        createdAt: string;
        updatedAt: string;
        posts: {
          __typename: "ModelPostConnection";
          nextToken: string | null;
        } | null;
      } | null;
      post: {
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      userID: string;
      postID: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      commentor: {
        __typename: "User";
        id: string;
        name: string | null;
        phone: string | null;
        accountNumber: string | null;
        createdAt: string;
        updatedAt: string;
        posts: {
          __typename: "ModelPostConnection";
          nextToken: string | null;
        } | null;
      } | null;
      post: {
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdatePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  userID: string;
  content: string | null;
  category: CategoryType | null;
  show: string | null;
  createdAt: string | null;
  updatedAt: string;
  user: {
    __typename: "User";
    id: string;
    name: string | null;
    phone: string | null;
    accountNumber: string | null;
    createdAt: string;
    updatedAt: string;
    posts: {
      __typename: "ModelPostConnection";
      items: Array<{
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
  likes: {
    __typename: "ModelPostLikeConnection";
    items: Array<{
      __typename: "PostLike";
      id: string;
      postID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
      user: {
        __typename: "User";
        id: string;
        name: string | null;
        phone: string | null;
        accountNumber: string | null;
        createdAt: string;
        updatedAt: string;
        posts: {
          __typename: "ModelPostConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  reports: {
    __typename: "ModelPostReportConnection";
    items: Array<{
      __typename: "PostReport";
      id: string;
      postID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
      user: {
        __typename: "User";
        id: string;
        name: string | null;
        phone: string | null;
        accountNumber: string | null;
        createdAt: string;
        updatedAt: string;
        posts: {
          __typename: "ModelPostConnection";
          nextToken: string | null;
        } | null;
      } | null;
      post: {
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      userID: string;
      postID: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      commentor: {
        __typename: "User";
        id: string;
        name: string | null;
        phone: string | null;
        accountNumber: string | null;
        createdAt: string;
        updatedAt: string;
        posts: {
          __typename: "ModelPostConnection";
          nextToken: string | null;
        } | null;
      } | null;
      post: {
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeletePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  userID: string;
  content: string | null;
  category: CategoryType | null;
  show: string | null;
  createdAt: string | null;
  updatedAt: string;
  user: {
    __typename: "User";
    id: string;
    name: string | null;
    phone: string | null;
    accountNumber: string | null;
    createdAt: string;
    updatedAt: string;
    posts: {
      __typename: "ModelPostConnection";
      items: Array<{
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
  likes: {
    __typename: "ModelPostLikeConnection";
    items: Array<{
      __typename: "PostLike";
      id: string;
      postID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
      user: {
        __typename: "User";
        id: string;
        name: string | null;
        phone: string | null;
        accountNumber: string | null;
        createdAt: string;
        updatedAt: string;
        posts: {
          __typename: "ModelPostConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  reports: {
    __typename: "ModelPostReportConnection";
    items: Array<{
      __typename: "PostReport";
      id: string;
      postID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
      user: {
        __typename: "User";
        id: string;
        name: string | null;
        phone: string | null;
        accountNumber: string | null;
        createdAt: string;
        updatedAt: string;
        posts: {
          __typename: "ModelPostConnection";
          nextToken: string | null;
        } | null;
      } | null;
      post: {
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      userID: string;
      postID: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      commentor: {
        __typename: "User";
        id: string;
        name: string | null;
        phone: string | null;
        accountNumber: string | null;
        createdAt: string;
        updatedAt: string;
        posts: {
          __typename: "ModelPostConnection";
          nextToken: string | null;
        } | null;
      } | null;
      post: {
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreatePostLikeMutation = {
  __typename: "PostLike";
  id: string;
  postID: string;
  userID: string;
  createdAt: string;
  updatedAt: string;
  user: {
    __typename: "User";
    id: string;
    name: string | null;
    phone: string | null;
    accountNumber: string | null;
    createdAt: string;
    updatedAt: string;
    posts: {
      __typename: "ModelPostConnection";
      items: Array<{
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type UpdatePostLikeMutation = {
  __typename: "PostLike";
  id: string;
  postID: string;
  userID: string;
  createdAt: string;
  updatedAt: string;
  user: {
    __typename: "User";
    id: string;
    name: string | null;
    phone: string | null;
    accountNumber: string | null;
    createdAt: string;
    updatedAt: string;
    posts: {
      __typename: "ModelPostConnection";
      items: Array<{
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type DeletePostLikeMutation = {
  __typename: "PostLike";
  id: string;
  postID: string;
  userID: string;
  createdAt: string;
  updatedAt: string;
  user: {
    __typename: "User";
    id: string;
    name: string | null;
    phone: string | null;
    accountNumber: string | null;
    createdAt: string;
    updatedAt: string;
    posts: {
      __typename: "ModelPostConnection";
      items: Array<{
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type CreatePostReportMutation = {
  __typename: "PostReport";
  id: string;
  postID: string;
  userID: string;
  createdAt: string;
  updatedAt: string;
  user: {
    __typename: "User";
    id: string;
    name: string | null;
    phone: string | null;
    accountNumber: string | null;
    createdAt: string;
    updatedAt: string;
    posts: {
      __typename: "ModelPostConnection";
      items: Array<{
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    userID: string;
    content: string | null;
    category: CategoryType | null;
    show: string | null;
    createdAt: string | null;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string | null;
      phone: string | null;
      accountNumber: string | null;
      createdAt: string;
      updatedAt: string;
      posts: {
        __typename: "ModelPostConnection";
        items: Array<{
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
    likes: {
      __typename: "ModelPostLikeConnection";
      items: Array<{
        __typename: "PostLike";
        id: string;
        postID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    reports: {
      __typename: "ModelPostReportConnection";
      items: Array<{
        __typename: "PostReport";
        id: string;
        postID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        post: {
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      items: Array<{
        __typename: "Comment";
        id: string;
        userID: string;
        postID: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        commentor: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        post: {
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type UpdatePostReportMutation = {
  __typename: "PostReport";
  id: string;
  postID: string;
  userID: string;
  createdAt: string;
  updatedAt: string;
  user: {
    __typename: "User";
    id: string;
    name: string | null;
    phone: string | null;
    accountNumber: string | null;
    createdAt: string;
    updatedAt: string;
    posts: {
      __typename: "ModelPostConnection";
      items: Array<{
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    userID: string;
    content: string | null;
    category: CategoryType | null;
    show: string | null;
    createdAt: string | null;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string | null;
      phone: string | null;
      accountNumber: string | null;
      createdAt: string;
      updatedAt: string;
      posts: {
        __typename: "ModelPostConnection";
        items: Array<{
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
    likes: {
      __typename: "ModelPostLikeConnection";
      items: Array<{
        __typename: "PostLike";
        id: string;
        postID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    reports: {
      __typename: "ModelPostReportConnection";
      items: Array<{
        __typename: "PostReport";
        id: string;
        postID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        post: {
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      items: Array<{
        __typename: "Comment";
        id: string;
        userID: string;
        postID: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        commentor: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        post: {
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type DeletePostReportMutation = {
  __typename: "PostReport";
  id: string;
  postID: string;
  userID: string;
  createdAt: string;
  updatedAt: string;
  user: {
    __typename: "User";
    id: string;
    name: string | null;
    phone: string | null;
    accountNumber: string | null;
    createdAt: string;
    updatedAt: string;
    posts: {
      __typename: "ModelPostConnection";
      items: Array<{
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    userID: string;
    content: string | null;
    category: CategoryType | null;
    show: string | null;
    createdAt: string | null;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string | null;
      phone: string | null;
      accountNumber: string | null;
      createdAt: string;
      updatedAt: string;
      posts: {
        __typename: "ModelPostConnection";
        items: Array<{
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
    likes: {
      __typename: "ModelPostLikeConnection";
      items: Array<{
        __typename: "PostLike";
        id: string;
        postID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    reports: {
      __typename: "ModelPostReportConnection";
      items: Array<{
        __typename: "PostReport";
        id: string;
        postID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        post: {
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      items: Array<{
        __typename: "Comment";
        id: string;
        userID: string;
        postID: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        commentor: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        post: {
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type CreateCommentMutation = {
  __typename: "Comment";
  id: string;
  userID: string;
  postID: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  commentor: {
    __typename: "User";
    id: string;
    name: string | null;
    phone: string | null;
    accountNumber: string | null;
    createdAt: string;
    updatedAt: string;
    posts: {
      __typename: "ModelPostConnection";
      items: Array<{
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    userID: string;
    content: string | null;
    category: CategoryType | null;
    show: string | null;
    createdAt: string | null;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string | null;
      phone: string | null;
      accountNumber: string | null;
      createdAt: string;
      updatedAt: string;
      posts: {
        __typename: "ModelPostConnection";
        items: Array<{
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
    likes: {
      __typename: "ModelPostLikeConnection";
      items: Array<{
        __typename: "PostLike";
        id: string;
        postID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    reports: {
      __typename: "ModelPostReportConnection";
      items: Array<{
        __typename: "PostReport";
        id: string;
        postID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        post: {
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      items: Array<{
        __typename: "Comment";
        id: string;
        userID: string;
        postID: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        commentor: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        post: {
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type UpdateCommentMutation = {
  __typename: "Comment";
  id: string;
  userID: string;
  postID: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  commentor: {
    __typename: "User";
    id: string;
    name: string | null;
    phone: string | null;
    accountNumber: string | null;
    createdAt: string;
    updatedAt: string;
    posts: {
      __typename: "ModelPostConnection";
      items: Array<{
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    userID: string;
    content: string | null;
    category: CategoryType | null;
    show: string | null;
    createdAt: string | null;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string | null;
      phone: string | null;
      accountNumber: string | null;
      createdAt: string;
      updatedAt: string;
      posts: {
        __typename: "ModelPostConnection";
        items: Array<{
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
    likes: {
      __typename: "ModelPostLikeConnection";
      items: Array<{
        __typename: "PostLike";
        id: string;
        postID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    reports: {
      __typename: "ModelPostReportConnection";
      items: Array<{
        __typename: "PostReport";
        id: string;
        postID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        post: {
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      items: Array<{
        __typename: "Comment";
        id: string;
        userID: string;
        postID: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        commentor: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        post: {
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type DeleteCommentMutation = {
  __typename: "Comment";
  id: string;
  userID: string;
  postID: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  commentor: {
    __typename: "User";
    id: string;
    name: string | null;
    phone: string | null;
    accountNumber: string | null;
    createdAt: string;
    updatedAt: string;
    posts: {
      __typename: "ModelPostConnection";
      items: Array<{
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    userID: string;
    content: string | null;
    category: CategoryType | null;
    show: string | null;
    createdAt: string | null;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string | null;
      phone: string | null;
      accountNumber: string | null;
      createdAt: string;
      updatedAt: string;
      posts: {
        __typename: "ModelPostConnection";
        items: Array<{
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
    likes: {
      __typename: "ModelPostLikeConnection";
      items: Array<{
        __typename: "PostLike";
        id: string;
        postID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    reports: {
      __typename: "ModelPostReportConnection";
      items: Array<{
        __typename: "PostReport";
        id: string;
        postID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        post: {
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      items: Array<{
        __typename: "Comment";
        id: string;
        userID: string;
        postID: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        commentor: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        post: {
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    name: string | null;
    phone: string | null;
    accountNumber: string | null;
    createdAt: string;
    updatedAt: string;
    posts: {
      __typename: "ModelPostConnection";
      items: Array<{
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  name: string | null;
  phone: string | null;
  accountNumber: string | null;
  createdAt: string;
  updatedAt: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      userID: string;
      content: string | null;
      category: CategoryType | null;
      show: string | null;
      createdAt: string | null;
      updatedAt: string;
      user: {
        __typename: "User";
        id: string;
        name: string | null;
        phone: string | null;
        accountNumber: string | null;
        createdAt: string;
        updatedAt: string;
        posts: {
          __typename: "ModelPostConnection";
          nextToken: string | null;
        } | null;
      } | null;
      likes: {
        __typename: "ModelPostLikeConnection";
        items: Array<{
          __typename: "PostLike";
          id: string;
          postID: string;
          userID: string;
          createdAt: string;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      reports: {
        __typename: "ModelPostReportConnection";
        items: Array<{
          __typename: "PostReport";
          id: string;
          postID: string;
          userID: string;
          createdAt: string;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      comments: {
        __typename: "ModelCommentConnection";
        items: Array<{
          __typename: "Comment";
          id: string;
          userID: string;
          postID: string;
          content: string;
          createdAt: string;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListPostsQuery = {
  __typename: "ModelPostConnection";
  items: Array<{
    __typename: "Post";
    id: string;
    title: string;
    userID: string;
    content: string | null;
    category: CategoryType | null;
    show: string | null;
    createdAt: string | null;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string | null;
      phone: string | null;
      accountNumber: string | null;
      createdAt: string;
      updatedAt: string;
      posts: {
        __typename: "ModelPostConnection";
        items: Array<{
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
    likes: {
      __typename: "ModelPostLikeConnection";
      items: Array<{
        __typename: "PostLike";
        id: string;
        postID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    reports: {
      __typename: "ModelPostReportConnection";
      items: Array<{
        __typename: "PostReport";
        id: string;
        postID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        post: {
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      items: Array<{
        __typename: "Comment";
        id: string;
        userID: string;
        postID: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        commentor: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        post: {
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetPostQuery = {
  __typename: "Post";
  id: string;
  title: string;
  userID: string;
  content: string | null;
  category: CategoryType | null;
  show: string | null;
  createdAt: string | null;
  updatedAt: string;
  user: {
    __typename: "User";
    id: string;
    name: string | null;
    phone: string | null;
    accountNumber: string | null;
    createdAt: string;
    updatedAt: string;
    posts: {
      __typename: "ModelPostConnection";
      items: Array<{
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
  likes: {
    __typename: "ModelPostLikeConnection";
    items: Array<{
      __typename: "PostLike";
      id: string;
      postID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
      user: {
        __typename: "User";
        id: string;
        name: string | null;
        phone: string | null;
        accountNumber: string | null;
        createdAt: string;
        updatedAt: string;
        posts: {
          __typename: "ModelPostConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  reports: {
    __typename: "ModelPostReportConnection";
    items: Array<{
      __typename: "PostReport";
      id: string;
      postID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
      user: {
        __typename: "User";
        id: string;
        name: string | null;
        phone: string | null;
        accountNumber: string | null;
        createdAt: string;
        updatedAt: string;
        posts: {
          __typename: "ModelPostConnection";
          nextToken: string | null;
        } | null;
      } | null;
      post: {
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      userID: string;
      postID: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      commentor: {
        __typename: "User";
        id: string;
        name: string | null;
        phone: string | null;
        accountNumber: string | null;
        createdAt: string;
        updatedAt: string;
        posts: {
          __typename: "ModelPostConnection";
          nextToken: string | null;
        } | null;
      } | null;
      post: {
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type PostByDateQuery = {
  __typename: "ModelPostConnection";
  items: Array<{
    __typename: "Post";
    id: string;
    title: string;
    userID: string;
    content: string | null;
    category: CategoryType | null;
    show: string | null;
    createdAt: string | null;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string | null;
      phone: string | null;
      accountNumber: string | null;
      createdAt: string;
      updatedAt: string;
      posts: {
        __typename: "ModelPostConnection";
        items: Array<{
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
    likes: {
      __typename: "ModelPostLikeConnection";
      items: Array<{
        __typename: "PostLike";
        id: string;
        postID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    reports: {
      __typename: "ModelPostReportConnection";
      items: Array<{
        __typename: "PostReport";
        id: string;
        postID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        post: {
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      items: Array<{
        __typename: "Comment";
        id: string;
        userID: string;
        postID: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        commentor: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        post: {
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetPostLikeQuery = {
  __typename: "PostLike";
  id: string;
  postID: string;
  userID: string;
  createdAt: string;
  updatedAt: string;
  user: {
    __typename: "User";
    id: string;
    name: string | null;
    phone: string | null;
    accountNumber: string | null;
    createdAt: string;
    updatedAt: string;
    posts: {
      __typename: "ModelPostConnection";
      items: Array<{
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type ListPostLikesQuery = {
  __typename: "ModelPostLikeConnection";
  items: Array<{
    __typename: "PostLike";
    id: string;
    postID: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string | null;
      phone: string | null;
      accountNumber: string | null;
      createdAt: string;
      updatedAt: string;
      posts: {
        __typename: "ModelPostConnection";
        items: Array<{
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetPostReportQuery = {
  __typename: "PostReport";
  id: string;
  postID: string;
  userID: string;
  createdAt: string;
  updatedAt: string;
  user: {
    __typename: "User";
    id: string;
    name: string | null;
    phone: string | null;
    accountNumber: string | null;
    createdAt: string;
    updatedAt: string;
    posts: {
      __typename: "ModelPostConnection";
      items: Array<{
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    userID: string;
    content: string | null;
    category: CategoryType | null;
    show: string | null;
    createdAt: string | null;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string | null;
      phone: string | null;
      accountNumber: string | null;
      createdAt: string;
      updatedAt: string;
      posts: {
        __typename: "ModelPostConnection";
        items: Array<{
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
    likes: {
      __typename: "ModelPostLikeConnection";
      items: Array<{
        __typename: "PostLike";
        id: string;
        postID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    reports: {
      __typename: "ModelPostReportConnection";
      items: Array<{
        __typename: "PostReport";
        id: string;
        postID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        post: {
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      items: Array<{
        __typename: "Comment";
        id: string;
        userID: string;
        postID: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        commentor: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        post: {
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type ListPostReportsQuery = {
  __typename: "ModelPostReportConnection";
  items: Array<{
    __typename: "PostReport";
    id: string;
    postID: string;
    userID: string;
    createdAt: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string | null;
      phone: string | null;
      accountNumber: string | null;
      createdAt: string;
      updatedAt: string;
      posts: {
        __typename: "ModelPostConnection";
        items: Array<{
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
    post: {
      __typename: "Post";
      id: string;
      title: string;
      userID: string;
      content: string | null;
      category: CategoryType | null;
      show: string | null;
      createdAt: string | null;
      updatedAt: string;
      user: {
        __typename: "User";
        id: string;
        name: string | null;
        phone: string | null;
        accountNumber: string | null;
        createdAt: string;
        updatedAt: string;
        posts: {
          __typename: "ModelPostConnection";
          nextToken: string | null;
        } | null;
      } | null;
      likes: {
        __typename: "ModelPostLikeConnection";
        items: Array<{
          __typename: "PostLike";
          id: string;
          postID: string;
          userID: string;
          createdAt: string;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      reports: {
        __typename: "ModelPostReportConnection";
        items: Array<{
          __typename: "PostReport";
          id: string;
          postID: string;
          userID: string;
          createdAt: string;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      comments: {
        __typename: "ModelCommentConnection";
        items: Array<{
          __typename: "Comment";
          id: string;
          userID: string;
          postID: string;
          content: string;
          createdAt: string;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetCommentQuery = {
  __typename: "Comment";
  id: string;
  userID: string;
  postID: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  commentor: {
    __typename: "User";
    id: string;
    name: string | null;
    phone: string | null;
    accountNumber: string | null;
    createdAt: string;
    updatedAt: string;
    posts: {
      __typename: "ModelPostConnection";
      items: Array<{
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    userID: string;
    content: string | null;
    category: CategoryType | null;
    show: string | null;
    createdAt: string | null;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string | null;
      phone: string | null;
      accountNumber: string | null;
      createdAt: string;
      updatedAt: string;
      posts: {
        __typename: "ModelPostConnection";
        items: Array<{
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
    likes: {
      __typename: "ModelPostLikeConnection";
      items: Array<{
        __typename: "PostLike";
        id: string;
        postID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    reports: {
      __typename: "ModelPostReportConnection";
      items: Array<{
        __typename: "PostReport";
        id: string;
        postID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        post: {
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      items: Array<{
        __typename: "Comment";
        id: string;
        userID: string;
        postID: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        commentor: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        post: {
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type ListCommentsQuery = {
  __typename: "ModelCommentConnection";
  items: Array<{
    __typename: "Comment";
    id: string;
    userID: string;
    postID: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    commentor: {
      __typename: "User";
      id: string;
      name: string | null;
      phone: string | null;
      accountNumber: string | null;
      createdAt: string;
      updatedAt: string;
      posts: {
        __typename: "ModelPostConnection";
        items: Array<{
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
    post: {
      __typename: "Post";
      id: string;
      title: string;
      userID: string;
      content: string | null;
      category: CategoryType | null;
      show: string | null;
      createdAt: string | null;
      updatedAt: string;
      user: {
        __typename: "User";
        id: string;
        name: string | null;
        phone: string | null;
        accountNumber: string | null;
        createdAt: string;
        updatedAt: string;
        posts: {
          __typename: "ModelPostConnection";
          nextToken: string | null;
        } | null;
      } | null;
      likes: {
        __typename: "ModelPostLikeConnection";
        items: Array<{
          __typename: "PostLike";
          id: string;
          postID: string;
          userID: string;
          createdAt: string;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      reports: {
        __typename: "ModelPostReportConnection";
        items: Array<{
          __typename: "PostReport";
          id: string;
          postID: string;
          userID: string;
          createdAt: string;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      comments: {
        __typename: "ModelCommentConnection";
        items: Array<{
          __typename: "Comment";
          id: string;
          userID: string;
          postID: string;
          content: string;
          createdAt: string;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  name: string | null;
  phone: string | null;
  accountNumber: string | null;
  createdAt: string;
  updatedAt: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      userID: string;
      content: string | null;
      category: CategoryType | null;
      show: string | null;
      createdAt: string | null;
      updatedAt: string;
      user: {
        __typename: "User";
        id: string;
        name: string | null;
        phone: string | null;
        accountNumber: string | null;
        createdAt: string;
        updatedAt: string;
        posts: {
          __typename: "ModelPostConnection";
          nextToken: string | null;
        } | null;
      } | null;
      likes: {
        __typename: "ModelPostLikeConnection";
        items: Array<{
          __typename: "PostLike";
          id: string;
          postID: string;
          userID: string;
          createdAt: string;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      reports: {
        __typename: "ModelPostReportConnection";
        items: Array<{
          __typename: "PostReport";
          id: string;
          postID: string;
          userID: string;
          createdAt: string;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      comments: {
        __typename: "ModelCommentConnection";
        items: Array<{
          __typename: "Comment";
          id: string;
          userID: string;
          postID: string;
          content: string;
          createdAt: string;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  name: string | null;
  phone: string | null;
  accountNumber: string | null;
  createdAt: string;
  updatedAt: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      userID: string;
      content: string | null;
      category: CategoryType | null;
      show: string | null;
      createdAt: string | null;
      updatedAt: string;
      user: {
        __typename: "User";
        id: string;
        name: string | null;
        phone: string | null;
        accountNumber: string | null;
        createdAt: string;
        updatedAt: string;
        posts: {
          __typename: "ModelPostConnection";
          nextToken: string | null;
        } | null;
      } | null;
      likes: {
        __typename: "ModelPostLikeConnection";
        items: Array<{
          __typename: "PostLike";
          id: string;
          postID: string;
          userID: string;
          createdAt: string;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      reports: {
        __typename: "ModelPostReportConnection";
        items: Array<{
          __typename: "PostReport";
          id: string;
          postID: string;
          userID: string;
          createdAt: string;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      comments: {
        __typename: "ModelCommentConnection";
        items: Array<{
          __typename: "Comment";
          id: string;
          userID: string;
          postID: string;
          content: string;
          createdAt: string;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  name: string | null;
  phone: string | null;
  accountNumber: string | null;
  createdAt: string;
  updatedAt: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      userID: string;
      content: string | null;
      category: CategoryType | null;
      show: string | null;
      createdAt: string | null;
      updatedAt: string;
      user: {
        __typename: "User";
        id: string;
        name: string | null;
        phone: string | null;
        accountNumber: string | null;
        createdAt: string;
        updatedAt: string;
        posts: {
          __typename: "ModelPostConnection";
          nextToken: string | null;
        } | null;
      } | null;
      likes: {
        __typename: "ModelPostLikeConnection";
        items: Array<{
          __typename: "PostLike";
          id: string;
          postID: string;
          userID: string;
          createdAt: string;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      reports: {
        __typename: "ModelPostReportConnection";
        items: Array<{
          __typename: "PostReport";
          id: string;
          postID: string;
          userID: string;
          createdAt: string;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      comments: {
        __typename: "ModelCommentConnection";
        items: Array<{
          __typename: "Comment";
          id: string;
          userID: string;
          postID: string;
          content: string;
          createdAt: string;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreatePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  userID: string;
  content: string | null;
  category: CategoryType | null;
  show: string | null;
  createdAt: string | null;
  updatedAt: string;
  user: {
    __typename: "User";
    id: string;
    name: string | null;
    phone: string | null;
    accountNumber: string | null;
    createdAt: string;
    updatedAt: string;
    posts: {
      __typename: "ModelPostConnection";
      items: Array<{
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
  likes: {
    __typename: "ModelPostLikeConnection";
    items: Array<{
      __typename: "PostLike";
      id: string;
      postID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
      user: {
        __typename: "User";
        id: string;
        name: string | null;
        phone: string | null;
        accountNumber: string | null;
        createdAt: string;
        updatedAt: string;
        posts: {
          __typename: "ModelPostConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  reports: {
    __typename: "ModelPostReportConnection";
    items: Array<{
      __typename: "PostReport";
      id: string;
      postID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
      user: {
        __typename: "User";
        id: string;
        name: string | null;
        phone: string | null;
        accountNumber: string | null;
        createdAt: string;
        updatedAt: string;
        posts: {
          __typename: "ModelPostConnection";
          nextToken: string | null;
        } | null;
      } | null;
      post: {
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      userID: string;
      postID: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      commentor: {
        __typename: "User";
        id: string;
        name: string | null;
        phone: string | null;
        accountNumber: string | null;
        createdAt: string;
        updatedAt: string;
        posts: {
          __typename: "ModelPostConnection";
          nextToken: string | null;
        } | null;
      } | null;
      post: {
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdatePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  userID: string;
  content: string | null;
  category: CategoryType | null;
  show: string | null;
  createdAt: string | null;
  updatedAt: string;
  user: {
    __typename: "User";
    id: string;
    name: string | null;
    phone: string | null;
    accountNumber: string | null;
    createdAt: string;
    updatedAt: string;
    posts: {
      __typename: "ModelPostConnection";
      items: Array<{
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
  likes: {
    __typename: "ModelPostLikeConnection";
    items: Array<{
      __typename: "PostLike";
      id: string;
      postID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
      user: {
        __typename: "User";
        id: string;
        name: string | null;
        phone: string | null;
        accountNumber: string | null;
        createdAt: string;
        updatedAt: string;
        posts: {
          __typename: "ModelPostConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  reports: {
    __typename: "ModelPostReportConnection";
    items: Array<{
      __typename: "PostReport";
      id: string;
      postID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
      user: {
        __typename: "User";
        id: string;
        name: string | null;
        phone: string | null;
        accountNumber: string | null;
        createdAt: string;
        updatedAt: string;
        posts: {
          __typename: "ModelPostConnection";
          nextToken: string | null;
        } | null;
      } | null;
      post: {
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      userID: string;
      postID: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      commentor: {
        __typename: "User";
        id: string;
        name: string | null;
        phone: string | null;
        accountNumber: string | null;
        createdAt: string;
        updatedAt: string;
        posts: {
          __typename: "ModelPostConnection";
          nextToken: string | null;
        } | null;
      } | null;
      post: {
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeletePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  userID: string;
  content: string | null;
  category: CategoryType | null;
  show: string | null;
  createdAt: string | null;
  updatedAt: string;
  user: {
    __typename: "User";
    id: string;
    name: string | null;
    phone: string | null;
    accountNumber: string | null;
    createdAt: string;
    updatedAt: string;
    posts: {
      __typename: "ModelPostConnection";
      items: Array<{
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
  likes: {
    __typename: "ModelPostLikeConnection";
    items: Array<{
      __typename: "PostLike";
      id: string;
      postID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
      user: {
        __typename: "User";
        id: string;
        name: string | null;
        phone: string | null;
        accountNumber: string | null;
        createdAt: string;
        updatedAt: string;
        posts: {
          __typename: "ModelPostConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  reports: {
    __typename: "ModelPostReportConnection";
    items: Array<{
      __typename: "PostReport";
      id: string;
      postID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
      user: {
        __typename: "User";
        id: string;
        name: string | null;
        phone: string | null;
        accountNumber: string | null;
        createdAt: string;
        updatedAt: string;
        posts: {
          __typename: "ModelPostConnection";
          nextToken: string | null;
        } | null;
      } | null;
      post: {
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      userID: string;
      postID: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      commentor: {
        __typename: "User";
        id: string;
        name: string | null;
        phone: string | null;
        accountNumber: string | null;
        createdAt: string;
        updatedAt: string;
        posts: {
          __typename: "ModelPostConnection";
          nextToken: string | null;
        } | null;
      } | null;
      post: {
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreatePostLikeSubscription = {
  __typename: "PostLike";
  id: string;
  postID: string;
  userID: string;
  createdAt: string;
  updatedAt: string;
  user: {
    __typename: "User";
    id: string;
    name: string | null;
    phone: string | null;
    accountNumber: string | null;
    createdAt: string;
    updatedAt: string;
    posts: {
      __typename: "ModelPostConnection";
      items: Array<{
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnUpdatePostLikeSubscription = {
  __typename: "PostLike";
  id: string;
  postID: string;
  userID: string;
  createdAt: string;
  updatedAt: string;
  user: {
    __typename: "User";
    id: string;
    name: string | null;
    phone: string | null;
    accountNumber: string | null;
    createdAt: string;
    updatedAt: string;
    posts: {
      __typename: "ModelPostConnection";
      items: Array<{
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnDeletePostLikeSubscription = {
  __typename: "PostLike";
  id: string;
  postID: string;
  userID: string;
  createdAt: string;
  updatedAt: string;
  user: {
    __typename: "User";
    id: string;
    name: string | null;
    phone: string | null;
    accountNumber: string | null;
    createdAt: string;
    updatedAt: string;
    posts: {
      __typename: "ModelPostConnection";
      items: Array<{
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnCreatePostReportSubscription = {
  __typename: "PostReport";
  id: string;
  postID: string;
  userID: string;
  createdAt: string;
  updatedAt: string;
  user: {
    __typename: "User";
    id: string;
    name: string | null;
    phone: string | null;
    accountNumber: string | null;
    createdAt: string;
    updatedAt: string;
    posts: {
      __typename: "ModelPostConnection";
      items: Array<{
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    userID: string;
    content: string | null;
    category: CategoryType | null;
    show: string | null;
    createdAt: string | null;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string | null;
      phone: string | null;
      accountNumber: string | null;
      createdAt: string;
      updatedAt: string;
      posts: {
        __typename: "ModelPostConnection";
        items: Array<{
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
    likes: {
      __typename: "ModelPostLikeConnection";
      items: Array<{
        __typename: "PostLike";
        id: string;
        postID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    reports: {
      __typename: "ModelPostReportConnection";
      items: Array<{
        __typename: "PostReport";
        id: string;
        postID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        post: {
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      items: Array<{
        __typename: "Comment";
        id: string;
        userID: string;
        postID: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        commentor: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        post: {
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnUpdatePostReportSubscription = {
  __typename: "PostReport";
  id: string;
  postID: string;
  userID: string;
  createdAt: string;
  updatedAt: string;
  user: {
    __typename: "User";
    id: string;
    name: string | null;
    phone: string | null;
    accountNumber: string | null;
    createdAt: string;
    updatedAt: string;
    posts: {
      __typename: "ModelPostConnection";
      items: Array<{
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    userID: string;
    content: string | null;
    category: CategoryType | null;
    show: string | null;
    createdAt: string | null;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string | null;
      phone: string | null;
      accountNumber: string | null;
      createdAt: string;
      updatedAt: string;
      posts: {
        __typename: "ModelPostConnection";
        items: Array<{
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
    likes: {
      __typename: "ModelPostLikeConnection";
      items: Array<{
        __typename: "PostLike";
        id: string;
        postID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    reports: {
      __typename: "ModelPostReportConnection";
      items: Array<{
        __typename: "PostReport";
        id: string;
        postID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        post: {
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      items: Array<{
        __typename: "Comment";
        id: string;
        userID: string;
        postID: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        commentor: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        post: {
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnDeletePostReportSubscription = {
  __typename: "PostReport";
  id: string;
  postID: string;
  userID: string;
  createdAt: string;
  updatedAt: string;
  user: {
    __typename: "User";
    id: string;
    name: string | null;
    phone: string | null;
    accountNumber: string | null;
    createdAt: string;
    updatedAt: string;
    posts: {
      __typename: "ModelPostConnection";
      items: Array<{
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    userID: string;
    content: string | null;
    category: CategoryType | null;
    show: string | null;
    createdAt: string | null;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string | null;
      phone: string | null;
      accountNumber: string | null;
      createdAt: string;
      updatedAt: string;
      posts: {
        __typename: "ModelPostConnection";
        items: Array<{
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
    likes: {
      __typename: "ModelPostLikeConnection";
      items: Array<{
        __typename: "PostLike";
        id: string;
        postID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    reports: {
      __typename: "ModelPostReportConnection";
      items: Array<{
        __typename: "PostReport";
        id: string;
        postID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        post: {
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      items: Array<{
        __typename: "Comment";
        id: string;
        userID: string;
        postID: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        commentor: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        post: {
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnCreateCommentSubscription = {
  __typename: "Comment";
  id: string;
  userID: string;
  postID: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  commentor: {
    __typename: "User";
    id: string;
    name: string | null;
    phone: string | null;
    accountNumber: string | null;
    createdAt: string;
    updatedAt: string;
    posts: {
      __typename: "ModelPostConnection";
      items: Array<{
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    userID: string;
    content: string | null;
    category: CategoryType | null;
    show: string | null;
    createdAt: string | null;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string | null;
      phone: string | null;
      accountNumber: string | null;
      createdAt: string;
      updatedAt: string;
      posts: {
        __typename: "ModelPostConnection";
        items: Array<{
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
    likes: {
      __typename: "ModelPostLikeConnection";
      items: Array<{
        __typename: "PostLike";
        id: string;
        postID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    reports: {
      __typename: "ModelPostReportConnection";
      items: Array<{
        __typename: "PostReport";
        id: string;
        postID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        post: {
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      items: Array<{
        __typename: "Comment";
        id: string;
        userID: string;
        postID: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        commentor: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        post: {
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnUpdateCommentSubscription = {
  __typename: "Comment";
  id: string;
  userID: string;
  postID: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  commentor: {
    __typename: "User";
    id: string;
    name: string | null;
    phone: string | null;
    accountNumber: string | null;
    createdAt: string;
    updatedAt: string;
    posts: {
      __typename: "ModelPostConnection";
      items: Array<{
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    userID: string;
    content: string | null;
    category: CategoryType | null;
    show: string | null;
    createdAt: string | null;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string | null;
      phone: string | null;
      accountNumber: string | null;
      createdAt: string;
      updatedAt: string;
      posts: {
        __typename: "ModelPostConnection";
        items: Array<{
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
    likes: {
      __typename: "ModelPostLikeConnection";
      items: Array<{
        __typename: "PostLike";
        id: string;
        postID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    reports: {
      __typename: "ModelPostReportConnection";
      items: Array<{
        __typename: "PostReport";
        id: string;
        postID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        post: {
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      items: Array<{
        __typename: "Comment";
        id: string;
        userID: string;
        postID: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        commentor: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        post: {
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnDeleteCommentSubscription = {
  __typename: "Comment";
  id: string;
  userID: string;
  postID: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  commentor: {
    __typename: "User";
    id: string;
    name: string | null;
    phone: string | null;
    accountNumber: string | null;
    createdAt: string;
    updatedAt: string;
    posts: {
      __typename: "ModelPostConnection";
      items: Array<{
        __typename: "Post";
        id: string;
        title: string;
        userID: string;
        content: string | null;
        category: CategoryType | null;
        show: string | null;
        createdAt: string | null;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        likes: {
          __typename: "ModelPostLikeConnection";
          nextToken: string | null;
        } | null;
        reports: {
          __typename: "ModelPostReportConnection";
          nextToken: string | null;
        } | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    userID: string;
    content: string | null;
    category: CategoryType | null;
    show: string | null;
    createdAt: string | null;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      name: string | null;
      phone: string | null;
      accountNumber: string | null;
      createdAt: string;
      updatedAt: string;
      posts: {
        __typename: "ModelPostConnection";
        items: Array<{
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
    likes: {
      __typename: "ModelPostLikeConnection";
      items: Array<{
        __typename: "PostLike";
        id: string;
        postID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    reports: {
      __typename: "ModelPostReportConnection";
      items: Array<{
        __typename: "PostReport";
        id: string;
        postID: string;
        userID: string;
        createdAt: string;
        updatedAt: string;
        user: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        post: {
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      items: Array<{
        __typename: "Comment";
        id: string;
        userID: string;
        postID: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        commentor: {
          __typename: "User";
          id: string;
          name: string | null;
          phone: string | null;
          accountNumber: string | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        post: {
          __typename: "Post";
          id: string;
          title: string;
          userID: string;
          content: string | null;
          category: CategoryType | null;
          show: string | null;
          createdAt: string | null;
          updatedAt: string;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateUser(input: CreateUserInput, condition?: ModelUserConditionInput): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          __typename
          id
          name
          phone
          accountNumber
          createdAt
          updatedAt
          posts {
            __typename
            items {
              __typename
              id
              title
              userID
              content
              category
              show
              createdAt
              updatedAt
              user {
                __typename
                id
                name
                phone
                accountNumber
                createdAt
                updatedAt
                posts {
                  __typename
                  nextToken
                }
              }
              likes {
                __typename
                items {
                  __typename
                  id
                  postID
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              reports {
                __typename
                items {
                  __typename
                  id
                  postID
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comments {
                __typename
                items {
                  __typename
                  id
                  userID
                  postID
                  content
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(input: UpdateUserInput, condition?: ModelUserConditionInput): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
          __typename
          id
          name
          phone
          accountNumber
          createdAt
          updatedAt
          posts {
            __typename
            items {
              __typename
              id
              title
              userID
              content
              category
              show
              createdAt
              updatedAt
              user {
                __typename
                id
                name
                phone
                accountNumber
                createdAt
                updatedAt
                posts {
                  __typename
                  nextToken
                }
              }
              likes {
                __typename
                items {
                  __typename
                  id
                  postID
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              reports {
                __typename
                items {
                  __typename
                  id
                  postID
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comments {
                __typename
                items {
                  __typename
                  id
                  userID
                  postID
                  content
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(input: DeleteUserInput, condition?: ModelUserConditionInput): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
          __typename
          id
          name
          phone
          accountNumber
          createdAt
          updatedAt
          posts {
            __typename
            items {
              __typename
              id
              title
              userID
              content
              category
              show
              createdAt
              updatedAt
              user {
                __typename
                id
                name
                phone
                accountNumber
                createdAt
                updatedAt
                posts {
                  __typename
                  nextToken
                }
              }
              likes {
                __typename
                items {
                  __typename
                  id
                  postID
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              reports {
                __typename
                items {
                  __typename
                  id
                  postID
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comments {
                __typename
                items {
                  __typename
                  id
                  userID
                  postID
                  content
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreatePost(input: CreatePostInput, condition?: ModelPostConditionInput): Promise<CreatePostMutation> {
    const statement = `mutation CreatePost($input: CreatePostInput!, $condition: ModelPostConditionInput) {
        createPost(input: $input, condition: $condition) {
          __typename
          id
          title
          userID
          content
          category
          show
          createdAt
          updatedAt
          user {
            __typename
            id
            name
            phone
            accountNumber
            createdAt
            updatedAt
            posts {
              __typename
              items {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
          }
          likes {
            __typename
            items {
              __typename
              id
              postID
              userID
              createdAt
              updatedAt
              user {
                __typename
                id
                name
                phone
                accountNumber
                createdAt
                updatedAt
                posts {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
          reports {
            __typename
            items {
              __typename
              id
              postID
              userID
              createdAt
              updatedAt
              user {
                __typename
                id
                name
                phone
                accountNumber
                createdAt
                updatedAt
                posts {
                  __typename
                  nextToken
                }
              }
              post {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
          comments {
            __typename
            items {
              __typename
              id
              userID
              postID
              content
              createdAt
              updatedAt
              commentor {
                __typename
                id
                name
                phone
                accountNumber
                createdAt
                updatedAt
                posts {
                  __typename
                  nextToken
                }
              }
              post {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <CreatePostMutation>response.data.createPost;
  }
  async UpdatePost(input: UpdatePostInput, condition?: ModelPostConditionInput): Promise<UpdatePostMutation> {
    const statement = `mutation UpdatePost($input: UpdatePostInput!, $condition: ModelPostConditionInput) {
        updatePost(input: $input, condition: $condition) {
          __typename
          id
          title
          userID
          content
          category
          show
          createdAt
          updatedAt
          user {
            __typename
            id
            name
            phone
            accountNumber
            createdAt
            updatedAt
            posts {
              __typename
              items {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
          }
          likes {
            __typename
            items {
              __typename
              id
              postID
              userID
              createdAt
              updatedAt
              user {
                __typename
                id
                name
                phone
                accountNumber
                createdAt
                updatedAt
                posts {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
          reports {
            __typename
            items {
              __typename
              id
              postID
              userID
              createdAt
              updatedAt
              user {
                __typename
                id
                name
                phone
                accountNumber
                createdAt
                updatedAt
                posts {
                  __typename
                  nextToken
                }
              }
              post {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
          comments {
            __typename
            items {
              __typename
              id
              userID
              postID
              content
              createdAt
              updatedAt
              commentor {
                __typename
                id
                name
                phone
                accountNumber
                createdAt
                updatedAt
                posts {
                  __typename
                  nextToken
                }
              }
              post {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <UpdatePostMutation>response.data.updatePost;
  }
  async DeletePost(input: DeletePostInput, condition?: ModelPostConditionInput): Promise<DeletePostMutation> {
    const statement = `mutation DeletePost($input: DeletePostInput!, $condition: ModelPostConditionInput) {
        deletePost(input: $input, condition: $condition) {
          __typename
          id
          title
          userID
          content
          category
          show
          createdAt
          updatedAt
          user {
            __typename
            id
            name
            phone
            accountNumber
            createdAt
            updatedAt
            posts {
              __typename
              items {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
          }
          likes {
            __typename
            items {
              __typename
              id
              postID
              userID
              createdAt
              updatedAt
              user {
                __typename
                id
                name
                phone
                accountNumber
                createdAt
                updatedAt
                posts {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
          reports {
            __typename
            items {
              __typename
              id
              postID
              userID
              createdAt
              updatedAt
              user {
                __typename
                id
                name
                phone
                accountNumber
                createdAt
                updatedAt
                posts {
                  __typename
                  nextToken
                }
              }
              post {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
          comments {
            __typename
            items {
              __typename
              id
              userID
              postID
              content
              createdAt
              updatedAt
              commentor {
                __typename
                id
                name
                phone
                accountNumber
                createdAt
                updatedAt
                posts {
                  __typename
                  nextToken
                }
              }
              post {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <DeletePostMutation>response.data.deletePost;
  }
  async CreatePostLike(input: CreatePostLikeInput, condition?: ModelPostLikeConditionInput): Promise<CreatePostLikeMutation> {
    const statement = `mutation CreatePostLike($input: CreatePostLikeInput!, $condition: ModelPostLikeConditionInput) {
        createPostLike(input: $input, condition: $condition) {
          __typename
          id
          postID
          userID
          createdAt
          updatedAt
          user {
            __typename
            id
            name
            phone
            accountNumber
            createdAt
            updatedAt
            posts {
              __typename
              items {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <CreatePostLikeMutation>response.data.createPostLike;
  }
  async UpdatePostLike(input: UpdatePostLikeInput, condition?: ModelPostLikeConditionInput): Promise<UpdatePostLikeMutation> {
    const statement = `mutation UpdatePostLike($input: UpdatePostLikeInput!, $condition: ModelPostLikeConditionInput) {
        updatePostLike(input: $input, condition: $condition) {
          __typename
          id
          postID
          userID
          createdAt
          updatedAt
          user {
            __typename
            id
            name
            phone
            accountNumber
            createdAt
            updatedAt
            posts {
              __typename
              items {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <UpdatePostLikeMutation>response.data.updatePostLike;
  }
  async DeletePostLike(input: DeletePostLikeInput, condition?: ModelPostLikeConditionInput): Promise<DeletePostLikeMutation> {
    const statement = `mutation DeletePostLike($input: DeletePostLikeInput!, $condition: ModelPostLikeConditionInput) {
        deletePostLike(input: $input, condition: $condition) {
          __typename
          id
          postID
          userID
          createdAt
          updatedAt
          user {
            __typename
            id
            name
            phone
            accountNumber
            createdAt
            updatedAt
            posts {
              __typename
              items {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <DeletePostLikeMutation>response.data.deletePostLike;
  }
  async CreatePostReport(input: CreatePostReportInput, condition?: ModelPostReportConditionInput): Promise<CreatePostReportMutation> {
    const statement = `mutation CreatePostReport($input: CreatePostReportInput!, $condition: ModelPostReportConditionInput) {
        createPostReport(input: $input, condition: $condition) {
          __typename
          id
          postID
          userID
          createdAt
          updatedAt
          user {
            __typename
            id
            name
            phone
            accountNumber
            createdAt
            updatedAt
            posts {
              __typename
              items {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
          }
          post {
            __typename
            id
            title
            userID
            content
            category
            show
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              phone
              accountNumber
              createdAt
              updatedAt
              posts {
                __typename
                items {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            likes {
              __typename
              items {
                __typename
                id
                postID
                userID
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            reports {
              __typename
              items {
                __typename
                id
                postID
                userID
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                post {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            comments {
              __typename
              items {
                __typename
                id
                userID
                postID
                content
                createdAt
                updatedAt
                commentor {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                post {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <CreatePostReportMutation>response.data.createPostReport;
  }
  async UpdatePostReport(input: UpdatePostReportInput, condition?: ModelPostReportConditionInput): Promise<UpdatePostReportMutation> {
    const statement = `mutation UpdatePostReport($input: UpdatePostReportInput!, $condition: ModelPostReportConditionInput) {
        updatePostReport(input: $input, condition: $condition) {
          __typename
          id
          postID
          userID
          createdAt
          updatedAt
          user {
            __typename
            id
            name
            phone
            accountNumber
            createdAt
            updatedAt
            posts {
              __typename
              items {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
          }
          post {
            __typename
            id
            title
            userID
            content
            category
            show
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              phone
              accountNumber
              createdAt
              updatedAt
              posts {
                __typename
                items {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            likes {
              __typename
              items {
                __typename
                id
                postID
                userID
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            reports {
              __typename
              items {
                __typename
                id
                postID
                userID
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                post {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            comments {
              __typename
              items {
                __typename
                id
                userID
                postID
                content
                createdAt
                updatedAt
                commentor {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                post {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <UpdatePostReportMutation>response.data.updatePostReport;
  }
  async DeletePostReport(input: DeletePostReportInput, condition?: ModelPostReportConditionInput): Promise<DeletePostReportMutation> {
    const statement = `mutation DeletePostReport($input: DeletePostReportInput!, $condition: ModelPostReportConditionInput) {
        deletePostReport(input: $input, condition: $condition) {
          __typename
          id
          postID
          userID
          createdAt
          updatedAt
          user {
            __typename
            id
            name
            phone
            accountNumber
            createdAt
            updatedAt
            posts {
              __typename
              items {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
          }
          post {
            __typename
            id
            title
            userID
            content
            category
            show
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              phone
              accountNumber
              createdAt
              updatedAt
              posts {
                __typename
                items {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            likes {
              __typename
              items {
                __typename
                id
                postID
                userID
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            reports {
              __typename
              items {
                __typename
                id
                postID
                userID
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                post {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            comments {
              __typename
              items {
                __typename
                id
                userID
                postID
                content
                createdAt
                updatedAt
                commentor {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                post {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <DeletePostReportMutation>response.data.deletePostReport;
  }
  async CreateComment(input: CreateCommentInput, condition?: ModelCommentConditionInput): Promise<CreateCommentMutation> {
    const statement = `mutation CreateComment($input: CreateCommentInput!, $condition: ModelCommentConditionInput) {
        createComment(input: $input, condition: $condition) {
          __typename
          id
          userID
          postID
          content
          createdAt
          updatedAt
          commentor {
            __typename
            id
            name
            phone
            accountNumber
            createdAt
            updatedAt
            posts {
              __typename
              items {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
          }
          post {
            __typename
            id
            title
            userID
            content
            category
            show
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              phone
              accountNumber
              createdAt
              updatedAt
              posts {
                __typename
                items {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            likes {
              __typename
              items {
                __typename
                id
                postID
                userID
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            reports {
              __typename
              items {
                __typename
                id
                postID
                userID
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                post {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            comments {
              __typename
              items {
                __typename
                id
                userID
                postID
                content
                createdAt
                updatedAt
                commentor {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                post {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <CreateCommentMutation>response.data.createComment;
  }
  async UpdateComment(input: UpdateCommentInput, condition?: ModelCommentConditionInput): Promise<UpdateCommentMutation> {
    const statement = `mutation UpdateComment($input: UpdateCommentInput!, $condition: ModelCommentConditionInput) {
        updateComment(input: $input, condition: $condition) {
          __typename
          id
          userID
          postID
          content
          createdAt
          updatedAt
          commentor {
            __typename
            id
            name
            phone
            accountNumber
            createdAt
            updatedAt
            posts {
              __typename
              items {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
          }
          post {
            __typename
            id
            title
            userID
            content
            category
            show
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              phone
              accountNumber
              createdAt
              updatedAt
              posts {
                __typename
                items {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            likes {
              __typename
              items {
                __typename
                id
                postID
                userID
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            reports {
              __typename
              items {
                __typename
                id
                postID
                userID
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                post {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            comments {
              __typename
              items {
                __typename
                id
                userID
                postID
                content
                createdAt
                updatedAt
                commentor {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                post {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <UpdateCommentMutation>response.data.updateComment;
  }
  async DeleteComment(input: DeleteCommentInput, condition?: ModelCommentConditionInput): Promise<DeleteCommentMutation> {
    const statement = `mutation DeleteComment($input: DeleteCommentInput!, $condition: ModelCommentConditionInput) {
        deleteComment(input: $input, condition: $condition) {
          __typename
          id
          userID
          postID
          content
          createdAt
          updatedAt
          commentor {
            __typename
            id
            name
            phone
            accountNumber
            createdAt
            updatedAt
            posts {
              __typename
              items {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
          }
          post {
            __typename
            id
            title
            userID
            content
            category
            show
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              phone
              accountNumber
              createdAt
              updatedAt
              posts {
                __typename
                items {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            likes {
              __typename
              items {
                __typename
                id
                postID
                userID
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            reports {
              __typename
              items {
                __typename
                id
                postID
                userID
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                post {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            comments {
              __typename
              items {
                __typename
                id
                userID
                postID
                content
                createdAt
                updatedAt
                commentor {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                post {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <DeleteCommentMutation>response.data.deleteComment;
  }
  async ListUsers(filter?: ModelUserFilterInput, limit?: number, nextToken?: string): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            phone
            accountNumber
            createdAt
            updatedAt
            posts {
              __typename
              items {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          name
          phone
          accountNumber
          createdAt
          updatedAt
          posts {
            __typename
            items {
              __typename
              id
              title
              userID
              content
              category
              show
              createdAt
              updatedAt
              user {
                __typename
                id
                name
                phone
                accountNumber
                createdAt
                updatedAt
                posts {
                  __typename
                  nextToken
                }
              }
              likes {
                __typename
                items {
                  __typename
                  id
                  postID
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              reports {
                __typename
                items {
                  __typename
                  id
                  postID
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comments {
                __typename
                items {
                  __typename
                  id
                  userID
                  postID
                  content
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListPosts(filter?: ModelPostFilterInput, limit?: number, nextToken?: string): Promise<ListPostsQuery> {
    const statement = `query ListPosts($filter: ModelPostFilterInput, $limit: Int, $nextToken: String) {
        listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            userID
            content
            category
            show
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              phone
              accountNumber
              createdAt
              updatedAt
              posts {
                __typename
                items {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            likes {
              __typename
              items {
                __typename
                id
                postID
                userID
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            reports {
              __typename
              items {
                __typename
                id
                postID
                userID
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                post {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            comments {
              __typename
              items {
                __typename
                id
                userID
                postID
                content
                createdAt
                updatedAt
                commentor {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                post {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <ListPostsQuery>response.data.listPosts;
  }
  async GetPost(id: string): Promise<GetPostQuery> {
    const statement = `query GetPost($id: ID!) {
        getPost(id: $id) {
          __typename
          id
          title
          userID
          content
          category
          show
          createdAt
          updatedAt
          user {
            __typename
            id
            name
            phone
            accountNumber
            createdAt
            updatedAt
            posts {
              __typename
              items {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
          }
          likes {
            __typename
            items {
              __typename
              id
              postID
              userID
              createdAt
              updatedAt
              user {
                __typename
                id
                name
                phone
                accountNumber
                createdAt
                updatedAt
                posts {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
          reports {
            __typename
            items {
              __typename
              id
              postID
              userID
              createdAt
              updatedAt
              user {
                __typename
                id
                name
                phone
                accountNumber
                createdAt
                updatedAt
                posts {
                  __typename
                  nextToken
                }
              }
              post {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
          comments {
            __typename
            items {
              __typename
              id
              userID
              postID
              content
              createdAt
              updatedAt
              commentor {
                __typename
                id
                name
                phone
                accountNumber
                createdAt
                updatedAt
                posts {
                  __typename
                  nextToken
                }
              }
              post {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <GetPostQuery>response.data.getPost;
  }
  async PostByDate(
    show?: string,
    createdAt?: ModelStringKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelPostFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<PostByDateQuery> {
    const statement = `query PostByDate($show: String, $createdAt: ModelStringKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelPostFilterInput, $limit: Int, $nextToken: String) {
        postByDate(show: $show, createdAt: $createdAt, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            userID
            content
            category
            show
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              phone
              accountNumber
              createdAt
              updatedAt
              posts {
                __typename
                items {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            likes {
              __typename
              items {
                __typename
                id
                postID
                userID
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            reports {
              __typename
              items {
                __typename
                id
                postID
                userID
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                post {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            comments {
              __typename
              items {
                __typename
                id
                userID
                postID
                content
                createdAt
                updatedAt
                commentor {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                post {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (show) {
      gqlAPIServiceArguments.show = show;
    }
    if (createdAt) {
      gqlAPIServiceArguments.createdAt = createdAt;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <PostByDateQuery>response.data.postByDate;
  }
  async GetPostLike(id: string): Promise<GetPostLikeQuery> {
    const statement = `query GetPostLike($id: ID!) {
        getPostLike(id: $id) {
          __typename
          id
          postID
          userID
          createdAt
          updatedAt
          user {
            __typename
            id
            name
            phone
            accountNumber
            createdAt
            updatedAt
            posts {
              __typename
              items {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <GetPostLikeQuery>response.data.getPostLike;
  }
  async ListPostLikes(filter?: ModelPostLikeFilterInput, limit?: number, nextToken?: string): Promise<ListPostLikesQuery> {
    const statement = `query ListPostLikes($filter: ModelPostLikeFilterInput, $limit: Int, $nextToken: String) {
        listPostLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            postID
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              phone
              accountNumber
              createdAt
              updatedAt
              posts {
                __typename
                items {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <ListPostLikesQuery>response.data.listPostLikes;
  }
  async GetPostReport(id: string): Promise<GetPostReportQuery> {
    const statement = `query GetPostReport($id: ID!) {
        getPostReport(id: $id) {
          __typename
          id
          postID
          userID
          createdAt
          updatedAt
          user {
            __typename
            id
            name
            phone
            accountNumber
            createdAt
            updatedAt
            posts {
              __typename
              items {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
          }
          post {
            __typename
            id
            title
            userID
            content
            category
            show
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              phone
              accountNumber
              createdAt
              updatedAt
              posts {
                __typename
                items {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            likes {
              __typename
              items {
                __typename
                id
                postID
                userID
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            reports {
              __typename
              items {
                __typename
                id
                postID
                userID
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                post {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            comments {
              __typename
              items {
                __typename
                id
                userID
                postID
                content
                createdAt
                updatedAt
                commentor {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                post {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <GetPostReportQuery>response.data.getPostReport;
  }
  async ListPostReports(filter?: ModelPostReportFilterInput, limit?: number, nextToken?: string): Promise<ListPostReportsQuery> {
    const statement = `query ListPostReports($filter: ModelPostReportFilterInput, $limit: Int, $nextToken: String) {
        listPostReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            postID
            userID
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              phone
              accountNumber
              createdAt
              updatedAt
              posts {
                __typename
                items {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            post {
              __typename
              id
              title
              userID
              content
              category
              show
              createdAt
              updatedAt
              user {
                __typename
                id
                name
                phone
                accountNumber
                createdAt
                updatedAt
                posts {
                  __typename
                  nextToken
                }
              }
              likes {
                __typename
                items {
                  __typename
                  id
                  postID
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              reports {
                __typename
                items {
                  __typename
                  id
                  postID
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comments {
                __typename
                items {
                  __typename
                  id
                  userID
                  postID
                  content
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <ListPostReportsQuery>response.data.listPostReports;
  }
  async GetComment(id: string): Promise<GetCommentQuery> {
    const statement = `query GetComment($id: ID!) {
        getComment(id: $id) {
          __typename
          id
          userID
          postID
          content
          createdAt
          updatedAt
          commentor {
            __typename
            id
            name
            phone
            accountNumber
            createdAt
            updatedAt
            posts {
              __typename
              items {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
          }
          post {
            __typename
            id
            title
            userID
            content
            category
            show
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              phone
              accountNumber
              createdAt
              updatedAt
              posts {
                __typename
                items {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            likes {
              __typename
              items {
                __typename
                id
                postID
                userID
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            reports {
              __typename
              items {
                __typename
                id
                postID
                userID
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                post {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            comments {
              __typename
              items {
                __typename
                id
                userID
                postID
                content
                createdAt
                updatedAt
                commentor {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                post {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <GetCommentQuery>response.data.getComment;
  }
  async ListComments(filter?: ModelCommentFilterInput, limit?: number, nextToken?: string): Promise<ListCommentsQuery> {
    const statement = `query ListComments($filter: ModelCommentFilterInput, $limit: Int, $nextToken: String) {
        listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            userID
            postID
            content
            createdAt
            updatedAt
            commentor {
              __typename
              id
              name
              phone
              accountNumber
              createdAt
              updatedAt
              posts {
                __typename
                items {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            post {
              __typename
              id
              title
              userID
              content
              category
              show
              createdAt
              updatedAt
              user {
                __typename
                id
                name
                phone
                accountNumber
                createdAt
                updatedAt
                posts {
                  __typename
                  nextToken
                }
              }
              likes {
                __typename
                items {
                  __typename
                  id
                  postID
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              reports {
                __typename
                items {
                  __typename
                  id
                  postID
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comments {
                __typename
                items {
                  __typename
                  id
                  userID
                  postID
                  content
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <ListCommentsQuery>response.data.listComments;
  }
  OnCreateUserListener: Observable<OnCreateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser {
        onCreateUser {
          __typename
          id
          name
          phone
          accountNumber
          createdAt
          updatedAt
          posts {
            __typename
            items {
              __typename
              id
              title
              userID
              content
              category
              show
              createdAt
              updatedAt
              user {
                __typename
                id
                name
                phone
                accountNumber
                createdAt
                updatedAt
                posts {
                  __typename
                  nextToken
                }
              }
              likes {
                __typename
                items {
                  __typename
                  id
                  postID
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              reports {
                __typename
                items {
                  __typename
                  id
                  postID
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comments {
                __typename
                items {
                  __typename
                  id
                  userID
                  postID
                  content
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateUserSubscription>;

  OnUpdateUserListener: Observable<OnUpdateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser {
        onUpdateUser {
          __typename
          id
          name
          phone
          accountNumber
          createdAt
          updatedAt
          posts {
            __typename
            items {
              __typename
              id
              title
              userID
              content
              category
              show
              createdAt
              updatedAt
              user {
                __typename
                id
                name
                phone
                accountNumber
                createdAt
                updatedAt
                posts {
                  __typename
                  nextToken
                }
              }
              likes {
                __typename
                items {
                  __typename
                  id
                  postID
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              reports {
                __typename
                items {
                  __typename
                  id
                  postID
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comments {
                __typename
                items {
                  __typename
                  id
                  userID
                  postID
                  content
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateUserSubscription>;

  OnDeleteUserListener: Observable<OnDeleteUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser {
        onDeleteUser {
          __typename
          id
          name
          phone
          accountNumber
          createdAt
          updatedAt
          posts {
            __typename
            items {
              __typename
              id
              title
              userID
              content
              category
              show
              createdAt
              updatedAt
              user {
                __typename
                id
                name
                phone
                accountNumber
                createdAt
                updatedAt
                posts {
                  __typename
                  nextToken
                }
              }
              likes {
                __typename
                items {
                  __typename
                  id
                  postID
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              reports {
                __typename
                items {
                  __typename
                  id
                  postID
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              comments {
                __typename
                items {
                  __typename
                  id
                  userID
                  postID
                  content
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteUserSubscription>;

  OnCreatePostListener: Observable<OnCreatePostSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreatePost {
        onCreatePost {
          __typename
          id
          title
          userID
          content
          category
          show
          createdAt
          updatedAt
          user {
            __typename
            id
            name
            phone
            accountNumber
            createdAt
            updatedAt
            posts {
              __typename
              items {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
          }
          likes {
            __typename
            items {
              __typename
              id
              postID
              userID
              createdAt
              updatedAt
              user {
                __typename
                id
                name
                phone
                accountNumber
                createdAt
                updatedAt
                posts {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
          reports {
            __typename
            items {
              __typename
              id
              postID
              userID
              createdAt
              updatedAt
              user {
                __typename
                id
                name
                phone
                accountNumber
                createdAt
                updatedAt
                posts {
                  __typename
                  nextToken
                }
              }
              post {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
          comments {
            __typename
            items {
              __typename
              id
              userID
              postID
              content
              createdAt
              updatedAt
              commentor {
                __typename
                id
                name
                phone
                accountNumber
                createdAt
                updatedAt
                posts {
                  __typename
                  nextToken
                }
              }
              post {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreatePostSubscription>;

  OnUpdatePostListener: Observable<OnUpdatePostSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePost {
        onUpdatePost {
          __typename
          id
          title
          userID
          content
          category
          show
          createdAt
          updatedAt
          user {
            __typename
            id
            name
            phone
            accountNumber
            createdAt
            updatedAt
            posts {
              __typename
              items {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
          }
          likes {
            __typename
            items {
              __typename
              id
              postID
              userID
              createdAt
              updatedAt
              user {
                __typename
                id
                name
                phone
                accountNumber
                createdAt
                updatedAt
                posts {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
          reports {
            __typename
            items {
              __typename
              id
              postID
              userID
              createdAt
              updatedAt
              user {
                __typename
                id
                name
                phone
                accountNumber
                createdAt
                updatedAt
                posts {
                  __typename
                  nextToken
                }
              }
              post {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
          comments {
            __typename
            items {
              __typename
              id
              userID
              postID
              content
              createdAt
              updatedAt
              commentor {
                __typename
                id
                name
                phone
                accountNumber
                createdAt
                updatedAt
                posts {
                  __typename
                  nextToken
                }
              }
              post {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdatePostSubscription>;

  OnDeletePostListener: Observable<OnDeletePostSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeletePost {
        onDeletePost {
          __typename
          id
          title
          userID
          content
          category
          show
          createdAt
          updatedAt
          user {
            __typename
            id
            name
            phone
            accountNumber
            createdAt
            updatedAt
            posts {
              __typename
              items {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
          }
          likes {
            __typename
            items {
              __typename
              id
              postID
              userID
              createdAt
              updatedAt
              user {
                __typename
                id
                name
                phone
                accountNumber
                createdAt
                updatedAt
                posts {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
          reports {
            __typename
            items {
              __typename
              id
              postID
              userID
              createdAt
              updatedAt
              user {
                __typename
                id
                name
                phone
                accountNumber
                createdAt
                updatedAt
                posts {
                  __typename
                  nextToken
                }
              }
              post {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
          comments {
            __typename
            items {
              __typename
              id
              userID
              postID
              content
              createdAt
              updatedAt
              commentor {
                __typename
                id
                name
                phone
                accountNumber
                createdAt
                updatedAt
                posts {
                  __typename
                  nextToken
                }
              }
              post {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeletePostSubscription>;

  OnCreatePostLikeListener: Observable<OnCreatePostLikeSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreatePostLike {
        onCreatePostLike {
          __typename
          id
          postID
          userID
          createdAt
          updatedAt
          user {
            __typename
            id
            name
            phone
            accountNumber
            createdAt
            updatedAt
            posts {
              __typename
              items {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnCreatePostLikeSubscription>;

  OnUpdatePostLikeListener: Observable<OnUpdatePostLikeSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePostLike {
        onUpdatePostLike {
          __typename
          id
          postID
          userID
          createdAt
          updatedAt
          user {
            __typename
            id
            name
            phone
            accountNumber
            createdAt
            updatedAt
            posts {
              __typename
              items {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnUpdatePostLikeSubscription>;

  OnDeletePostLikeListener: Observable<OnDeletePostLikeSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeletePostLike {
        onDeletePostLike {
          __typename
          id
          postID
          userID
          createdAt
          updatedAt
          user {
            __typename
            id
            name
            phone
            accountNumber
            createdAt
            updatedAt
            posts {
              __typename
              items {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnDeletePostLikeSubscription>;

  OnCreatePostReportListener: Observable<OnCreatePostReportSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreatePostReport {
        onCreatePostReport {
          __typename
          id
          postID
          userID
          createdAt
          updatedAt
          user {
            __typename
            id
            name
            phone
            accountNumber
            createdAt
            updatedAt
            posts {
              __typename
              items {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
          }
          post {
            __typename
            id
            title
            userID
            content
            category
            show
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              phone
              accountNumber
              createdAt
              updatedAt
              posts {
                __typename
                items {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            likes {
              __typename
              items {
                __typename
                id
                postID
                userID
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            reports {
              __typename
              items {
                __typename
                id
                postID
                userID
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                post {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            comments {
              __typename
              items {
                __typename
                id
                userID
                postID
                content
                createdAt
                updatedAt
                commentor {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                post {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnCreatePostReportSubscription>;

  OnUpdatePostReportListener: Observable<OnUpdatePostReportSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePostReport {
        onUpdatePostReport {
          __typename
          id
          postID
          userID
          createdAt
          updatedAt
          user {
            __typename
            id
            name
            phone
            accountNumber
            createdAt
            updatedAt
            posts {
              __typename
              items {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
          }
          post {
            __typename
            id
            title
            userID
            content
            category
            show
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              phone
              accountNumber
              createdAt
              updatedAt
              posts {
                __typename
                items {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            likes {
              __typename
              items {
                __typename
                id
                postID
                userID
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            reports {
              __typename
              items {
                __typename
                id
                postID
                userID
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                post {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            comments {
              __typename
              items {
                __typename
                id
                userID
                postID
                content
                createdAt
                updatedAt
                commentor {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                post {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnUpdatePostReportSubscription>;

  OnDeletePostReportListener: Observable<OnDeletePostReportSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeletePostReport {
        onDeletePostReport {
          __typename
          id
          postID
          userID
          createdAt
          updatedAt
          user {
            __typename
            id
            name
            phone
            accountNumber
            createdAt
            updatedAt
            posts {
              __typename
              items {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
          }
          post {
            __typename
            id
            title
            userID
            content
            category
            show
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              phone
              accountNumber
              createdAt
              updatedAt
              posts {
                __typename
                items {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            likes {
              __typename
              items {
                __typename
                id
                postID
                userID
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            reports {
              __typename
              items {
                __typename
                id
                postID
                userID
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                post {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            comments {
              __typename
              items {
                __typename
                id
                userID
                postID
                content
                createdAt
                updatedAt
                commentor {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                post {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnDeletePostReportSubscription>;

  OnCreateCommentListener: Observable<OnCreateCommentSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateComment {
        onCreateComment {
          __typename
          id
          userID
          postID
          content
          createdAt
          updatedAt
          commentor {
            __typename
            id
            name
            phone
            accountNumber
            createdAt
            updatedAt
            posts {
              __typename
              items {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
          }
          post {
            __typename
            id
            title
            userID
            content
            category
            show
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              phone
              accountNumber
              createdAt
              updatedAt
              posts {
                __typename
                items {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            likes {
              __typename
              items {
                __typename
                id
                postID
                userID
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            reports {
              __typename
              items {
                __typename
                id
                postID
                userID
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                post {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            comments {
              __typename
              items {
                __typename
                id
                userID
                postID
                content
                createdAt
                updatedAt
                commentor {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                post {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnCreateCommentSubscription>;

  OnUpdateCommentListener: Observable<OnUpdateCommentSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateComment {
        onUpdateComment {
          __typename
          id
          userID
          postID
          content
          createdAt
          updatedAt
          commentor {
            __typename
            id
            name
            phone
            accountNumber
            createdAt
            updatedAt
            posts {
              __typename
              items {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
          }
          post {
            __typename
            id
            title
            userID
            content
            category
            show
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              phone
              accountNumber
              createdAt
              updatedAt
              posts {
                __typename
                items {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            likes {
              __typename
              items {
                __typename
                id
                postID
                userID
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            reports {
              __typename
              items {
                __typename
                id
                postID
                userID
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                post {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            comments {
              __typename
              items {
                __typename
                id
                userID
                postID
                content
                createdAt
                updatedAt
                commentor {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                post {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnUpdateCommentSubscription>;

  OnDeleteCommentListener: Observable<OnDeleteCommentSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteComment {
        onDeleteComment {
          __typename
          id
          userID
          postID
          content
          createdAt
          updatedAt
          commentor {
            __typename
            id
            name
            phone
            accountNumber
            createdAt
            updatedAt
            posts {
              __typename
              items {
                __typename
                id
                title
                userID
                content
                category
                show
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                likes {
                  __typename
                  nextToken
                }
                reports {
                  __typename
                  nextToken
                }
                comments {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
          }
          post {
            __typename
            id
            title
            userID
            content
            category
            show
            createdAt
            updatedAt
            user {
              __typename
              id
              name
              phone
              accountNumber
              createdAt
              updatedAt
              posts {
                __typename
                items {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            likes {
              __typename
              items {
                __typename
                id
                postID
                userID
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            reports {
              __typename
              items {
                __typename
                id
                postID
                userID
                createdAt
                updatedAt
                user {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                post {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            comments {
              __typename
              items {
                __typename
                id
                userID
                postID
                content
                createdAt
                updatedAt
                commentor {
                  __typename
                  id
                  name
                  phone
                  accountNumber
                  createdAt
                  updatedAt
                }
                post {
                  __typename
                  id
                  title
                  userID
                  content
                  category
                  show
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnDeleteCommentSubscription>;
}
