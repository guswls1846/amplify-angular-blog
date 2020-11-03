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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreatePostLike = /* GraphQL */ `
  subscription OnCreatePostLike {
    onCreatePostLike {
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
export const onUpdatePostLike = /* GraphQL */ `
  subscription OnUpdatePostLike {
    onUpdatePostLike {
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
export const onDeletePostLike = /* GraphQL */ `
  subscription OnDeletePostLike {
    onDeletePostLike {
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
export const onCreatePostReport = /* GraphQL */ `
  subscription OnCreatePostReport {
    onCreatePostReport {
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
export const onUpdatePostReport = /* GraphQL */ `
  subscription OnUpdatePostReport {
    onUpdatePostReport {
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
export const onDeletePostReport = /* GraphQL */ `
  subscription OnDeletePostReport {
    onDeletePostReport {
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
