/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        phone
        accountNumber
        createdAt
        updatedAt
        owner
        posts {
          items {
            id
            title
            userID
            content
            createdAt
            updatedAt
            user {
              id
              name
              phone
              accountNumber
              createdAt
              updatedAt
              owner
            }
            comments {
              nextToken
            }
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      phone
      accountNumber
      createdAt
      updatedAt
      owner
      posts {
        items {
          id
          title
          userID
          content
          createdAt
          updatedAt
          user {
            id
            name
            phone
            accountNumber
            createdAt
            updatedAt
            owner
            posts {
              nextToken
            }
          }
          comments {
            items {
              id
              postID
              content
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        userID
        content
        createdAt
        updatedAt
        user {
          id
          name
          phone
          accountNumber
          createdAt
          updatedAt
          owner
          posts {
            items {
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
          items {
            id
            postID
            content
            createdAt
            updatedAt
            post {
              id
              title
              userID
              content
              createdAt
              updatedAt
            }
            owner
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      userID
      content
      createdAt
      updatedAt
      user {
        id
        name
        phone
        accountNumber
        createdAt
        updatedAt
        owner
        posts {
          items {
            id
            title
            userID
            content
            createdAt
            updatedAt
            user {
              id
              name
              phone
              accountNumber
              createdAt
              updatedAt
              owner
            }
            comments {
              nextToken
            }
          }
          nextToken
        }
      }
      comments {
        items {
          id
          postID
          content
          createdAt
          updatedAt
          post {
            id
            title
            userID
            content
            createdAt
            updatedAt
            user {
              id
              name
              phone
              accountNumber
              createdAt
              updatedAt
              owner
            }
            comments {
              nextToken
            }
          }
          owner
        }
        nextToken
      }
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      postID
      content
      createdAt
      updatedAt
      post {
        id
        title
        userID
        content
        createdAt
        updatedAt
        user {
          id
          name
          phone
          accountNumber
          createdAt
          updatedAt
          owner
          posts {
            items {
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
          items {
            id
            postID
            content
            createdAt
            updatedAt
            post {
              id
              title
              userID
              content
              createdAt
              updatedAt
            }
            owner
          }
          nextToken
        }
      }
      owner
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        content
        createdAt
        updatedAt
        post {
          id
          title
          userID
          content
          createdAt
          updatedAt
          user {
            id
            name
            phone
            accountNumber
            createdAt
            updatedAt
            owner
            posts {
              nextToken
            }
          }
          comments {
            items {
              id
              postID
              content
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
        owner
      }
      nextToken
    }
  }
`;
