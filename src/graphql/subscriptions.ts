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
              postID
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
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
              postID
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
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
              postID
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
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
      postID
      content
      createdAt
      updatedAt
      post {
        id
        title
        userID
        content
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
              owner
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
              owner
            }
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
              owner
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
              owner
            }
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
              owner
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
              owner
            }
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($owner: String) {
    onCreatePost(owner: $owner) {
      id
      title
      userID
      content
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
            createdAt
            updatedAt
            owner
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
            createdAt
            updatedAt
            owner
          }
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($owner: String) {
    onUpdatePost(owner: $owner) {
      id
      title
      userID
      content
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
            createdAt
            updatedAt
            owner
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
            createdAt
            updatedAt
            owner
          }
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String) {
    onDeletePost(owner: $owner) {
      id
      title
      userID
      content
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
            createdAt
            updatedAt
            owner
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
            createdAt
            updatedAt
            owner
          }
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
