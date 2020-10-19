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
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null;
  userID?: ModelIDInput | null;
  content?: ModelStringInput | null;
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

export type UpdatePostInput = {
  id: string;
  title?: string | null;
  userID?: string | null;
  content?: string | null;
};

export type DeletePostInput = {
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
  and?: Array<ModelPostFilterInput | null> | null;
  or?: Array<ModelPostFilterInput | null> | null;
  not?: ModelPostFilterInput | null;
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
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
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
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
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
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
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
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
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
          createdAt: string;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
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
          createdAt: string;
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
          createdAt: string;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
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
          createdAt: string;
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
          createdAt: string;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
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
          createdAt: string;
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
          createdAt: string;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
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
          createdAt: string;
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
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
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
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
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
          createdAt: string;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
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
          createdAt: string;
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
          createdAt: string;
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
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
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
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
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
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
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
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
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
          createdAt: string;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
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
          createdAt: string;
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
          createdAt: string;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
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
          createdAt: string;
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
          createdAt: string;
          updatedAt: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
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
          createdAt: string;
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
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
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
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
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
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
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
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreatePost(
    input: CreatePostInput,
    condition?: ModelPostConditionInput
  ): Promise<CreatePostMutation> {
    const statement = `mutation CreatePost($input: CreatePostInput!, $condition: ModelPostConditionInput) {
        createPost(input: $input, condition: $condition) {
          __typename
          id
          title
          userID
          content
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
                comments {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
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
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePostMutation>response.data.createPost;
  }
  async UpdatePost(
    input: UpdatePostInput,
    condition?: ModelPostConditionInput
  ): Promise<UpdatePostMutation> {
    const statement = `mutation UpdatePost($input: UpdatePostInput!, $condition: ModelPostConditionInput) {
        updatePost(input: $input, condition: $condition) {
          __typename
          id
          title
          userID
          content
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
                comments {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
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
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePostMutation>response.data.updatePost;
  }
  async DeletePost(
    input: DeletePostInput,
    condition?: ModelPostConditionInput
  ): Promise<DeletePostMutation> {
    const statement = `mutation DeletePost($input: DeletePostInput!, $condition: ModelPostConditionInput) {
        deletePost(input: $input, condition: $condition) {
          __typename
          id
          title
          userID
          content
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
                comments {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
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
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePostMutation>response.data.deletePost;
  }
  async CreateComment(
    input: CreateCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<CreateCommentMutation> {
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
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCommentMutation>response.data.createComment;
  }
  async UpdateComment(
    input: UpdateCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<UpdateCommentMutation> {
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
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCommentMutation>response.data.updateComment;
  }
  async DeleteComment(
    input: DeleteCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<DeleteCommentMutation> {
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
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCommentMutation>response.data.deleteComment;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
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
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
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
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListPosts(
    filter?: ModelPostFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPostsQuery> {
    const statement = `query ListPosts($filter: ModelPostFilterInput, $limit: Int, $nextToken: String) {
        listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            userID
            content
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
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
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
                comments {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
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
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPostQuery>response.data.getPost;
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
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCommentQuery>response.data.getComment;
  }
  async ListComments(
    filter?: ModelCommentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCommentsQuery> {
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
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
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
                comments {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
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
                comments {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
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
                comments {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
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

  OnCreateCommentListener: Observable<
    OnCreateCommentSubscription
  > = API.graphql(
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
                  createdAt
                  updatedAt
                }
                nextToken
              }
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

  OnUpdateCommentListener: Observable<
    OnUpdateCommentSubscription
  > = API.graphql(
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
                  createdAt
                  updatedAt
                }
                nextToken
              }
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

  OnDeleteCommentListener: Observable<
    OnDeleteCommentSubscription
  > = API.graphql(
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
                  createdAt
                  updatedAt
                }
                nextToken
              }
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
