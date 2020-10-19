/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
