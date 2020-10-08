/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePostPublic = /* GraphQL */ `
  subscription OnCreatePostPublic {
    onCreatePostPublic {
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
export const onUpdatePostPublic = /* GraphQL */ `
  subscription OnUpdatePostPublic {
    onUpdatePostPublic {
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
export const onDeletePostPublic = /* GraphQL */ `
  subscription OnDeletePostPublic {
    onDeletePostPublic {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String) {
    onCreateComment(owner: $owner) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String) {
    onUpdateComment(owner: $owner) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String) {
    onDeleteComment(owner: $owner) {
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
