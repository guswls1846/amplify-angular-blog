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
        posts {
          items {
            id
            title
            userID
            content
            category
            show
            createdAt
            updatedAt
            user {
              id
              name
              phone
              accountNumber
              createdAt
              updatedAt
            }
            likes {
              nextToken
            }
            reports {
              nextToken
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
      posts {
        items {
          id
          title
          userID
          content
          category
          show
          createdAt
          updatedAt
          user {
            id
            name
            phone
            accountNumber
            createdAt
            updatedAt
            posts {
              nextToken
            }
          }
          likes {
            items {
              id
              postID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          reports {
            items {
              id
              postID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          comments {
            items {
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
        category
        show
        createdAt
        updatedAt
        user {
          id
          name
          phone
          accountNumber
          createdAt
          updatedAt
          posts {
            items {
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
          items {
            id
            postID
            userID
            createdAt
            updatedAt
            user {
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
          items {
            id
            postID
            userID
            createdAt
            updatedAt
            user {
              id
              name
              phone
              accountNumber
              createdAt
              updatedAt
            }
            post {
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
          items {
            id
            userID
            postID
            content
            createdAt
            updatedAt
            commentor {
              id
              name
              phone
              accountNumber
              createdAt
              updatedAt
            }
            post {
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
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      userID
      content
      category
      show
      createdAt
      updatedAt
      user {
        id
        name
        phone
        accountNumber
        createdAt
        updatedAt
        posts {
          items {
            id
            title
            userID
            content
            category
            show
            createdAt
            updatedAt
            user {
              id
              name
              phone
              accountNumber
              createdAt
              updatedAt
            }
            likes {
              nextToken
            }
            reports {
              nextToken
            }
            comments {
              nextToken
            }
          }
          nextToken
        }
      }
      likes {
        items {
          id
          postID
          userID
          createdAt
          updatedAt
          user {
            id
            name
            phone
            accountNumber
            createdAt
            updatedAt
            posts {
              nextToken
            }
          }
        }
        nextToken
      }
      reports {
        items {
          id
          postID
          userID
          createdAt
          updatedAt
          user {
            id
            name
            phone
            accountNumber
            createdAt
            updatedAt
            posts {
              nextToken
            }
          }
          post {
            id
            title
            userID
            content
            category
            show
            createdAt
            updatedAt
            user {
              id
              name
              phone
              accountNumber
              createdAt
              updatedAt
            }
            likes {
              nextToken
            }
            reports {
              nextToken
            }
            comments {
              nextToken
            }
          }
        }
        nextToken
      }
      comments {
        items {
          id
          userID
          postID
          content
          createdAt
          updatedAt
          commentor {
            id
            name
            phone
            accountNumber
            createdAt
            updatedAt
            posts {
              nextToken
            }
          }
          post {
            id
            title
            userID
            content
            category
            show
            createdAt
            updatedAt
            user {
              id
              name
              phone
              accountNumber
              createdAt
              updatedAt
            }
            likes {
              nextToken
            }
            reports {
              nextToken
            }
            comments {
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const postByDate = /* GraphQL */ `
  query PostByDate(
    $show: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postByDate(
      show: $show
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        userID
        content
        category
        show
        createdAt
        updatedAt
        user {
          id
          name
          phone
          accountNumber
          createdAt
          updatedAt
          posts {
            items {
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
          items {
            id
            postID
            userID
            createdAt
            updatedAt
            user {
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
          items {
            id
            postID
            userID
            createdAt
            updatedAt
            user {
              id
              name
              phone
              accountNumber
              createdAt
              updatedAt
            }
            post {
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
          items {
            id
            userID
            postID
            content
            createdAt
            updatedAt
            commentor {
              id
              name
              phone
              accountNumber
              createdAt
              updatedAt
            }
            post {
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
  }
`;
export const getPostLike = /* GraphQL */ `
  query GetPostLike($id: ID!) {
    getPostLike(id: $id) {
      id
      postID
      userID
      createdAt
      updatedAt
      user {
        id
        name
        phone
        accountNumber
        createdAt
        updatedAt
        posts {
          items {
            id
            title
            userID
            content
            category
            show
            createdAt
            updatedAt
            user {
              id
              name
              phone
              accountNumber
              createdAt
              updatedAt
            }
            likes {
              nextToken
            }
            reports {
              nextToken
            }
            comments {
              nextToken
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const listPostLikes = /* GraphQL */ `
  query ListPostLikes(
    $filter: ModelPostLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        userID
        createdAt
        updatedAt
        user {
          id
          name
          phone
          accountNumber
          createdAt
          updatedAt
          posts {
            items {
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
  }
`;
export const getPostReport = /* GraphQL */ `
  query GetPostReport($id: ID!) {
    getPostReport(id: $id) {
      id
      postID
      userID
      createdAt
      updatedAt
      user {
        id
        name
        phone
        accountNumber
        createdAt
        updatedAt
        posts {
          items {
            id
            title
            userID
            content
            category
            show
            createdAt
            updatedAt
            user {
              id
              name
              phone
              accountNumber
              createdAt
              updatedAt
            }
            likes {
              nextToken
            }
            reports {
              nextToken
            }
            comments {
              nextToken
            }
          }
          nextToken
        }
      }
      post {
        id
        title
        userID
        content
        category
        show
        createdAt
        updatedAt
        user {
          id
          name
          phone
          accountNumber
          createdAt
          updatedAt
          posts {
            items {
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
          items {
            id
            postID
            userID
            createdAt
            updatedAt
            user {
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
          items {
            id
            postID
            userID
            createdAt
            updatedAt
            user {
              id
              name
              phone
              accountNumber
              createdAt
              updatedAt
            }
            post {
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
          items {
            id
            userID
            postID
            content
            createdAt
            updatedAt
            commentor {
              id
              name
              phone
              accountNumber
              createdAt
              updatedAt
            }
            post {
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
  }
`;
export const listPostReports = /* GraphQL */ `
  query ListPostReports(
    $filter: ModelPostReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        userID
        createdAt
        updatedAt
        user {
          id
          name
          phone
          accountNumber
          createdAt
          updatedAt
          posts {
            items {
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
          id
          title
          userID
          content
          category
          show
          createdAt
          updatedAt
          user {
            id
            name
            phone
            accountNumber
            createdAt
            updatedAt
            posts {
              nextToken
            }
          }
          likes {
            items {
              id
              postID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          reports {
            items {
              id
              postID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          comments {
            items {
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
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      userID
      postID
      content
      createdAt
      updatedAt
      commentor {
        id
        name
        phone
        accountNumber
        createdAt
        updatedAt
        posts {
          items {
            id
            title
            userID
            content
            category
            show
            createdAt
            updatedAt
            user {
              id
              name
              phone
              accountNumber
              createdAt
              updatedAt
            }
            likes {
              nextToken
            }
            reports {
              nextToken
            }
            comments {
              nextToken
            }
          }
          nextToken
        }
      }
      post {
        id
        title
        userID
        content
        category
        show
        createdAt
        updatedAt
        user {
          id
          name
          phone
          accountNumber
          createdAt
          updatedAt
          posts {
            items {
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
          items {
            id
            postID
            userID
            createdAt
            updatedAt
            user {
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
          items {
            id
            postID
            userID
            createdAt
            updatedAt
            user {
              id
              name
              phone
              accountNumber
              createdAt
              updatedAt
            }
            post {
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
          items {
            id
            userID
            postID
            content
            createdAt
            updatedAt
            commentor {
              id
              name
              phone
              accountNumber
              createdAt
              updatedAt
            }
            post {
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
        userID
        postID
        content
        createdAt
        updatedAt
        commentor {
          id
          name
          phone
          accountNumber
          createdAt
          updatedAt
          posts {
            items {
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
          id
          title
          userID
          content
          category
          show
          createdAt
          updatedAt
          user {
            id
            name
            phone
            accountNumber
            createdAt
            updatedAt
            posts {
              nextToken
            }
          }
          likes {
            items {
              id
              postID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          reports {
            items {
              id
              postID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          comments {
            items {
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
  }
`;
