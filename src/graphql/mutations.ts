/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
              createdAt
              updatedAt
            }
            nextToken
          }
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
              createdAt
              updatedAt
            }
            nextToken
          }
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
              createdAt
              updatedAt
            }
            nextToken
          }
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
