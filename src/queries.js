import { gql } from "@apollo/client"


export const ADD_BOOK = gql`
mutation addBook($title: String!, $author: String!, $published: Int, $genres:[String!]!) {
    addBook(
        title: $title,
        author: $author,
        published: $published,
        genres: $genres
    ) {
        title
        published
        author {
          name
        }
    }
}
`

export const ALL_AUTHORS = gql`
query All_Authors{
  allAuthors {
    name,
    born,
    bookCount
  }
}
`
export const ALL_BOOKS = gql`
query books {
  allBooks {
    author {
      name
    }
    title
    published
    genres
  }
}
`
export const EDIT_AUTHOR = gql`
mutation EditAuthor($name: String!, $setBornTo: Int!) {
  editAuthor(name: $name, setBornTo: $setBornTo) {
    name
    born
  }
}
`;

export const LOG_IN = gql`
mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    value
  }
}`;

export const GET_USER = gql`
query Query {
  me {
    favoriteGenre
    id
    username
  }
}
`

export const FILTER_BOOKS = gql`
query Query($author: String, $genre: String) {
  allBooks(author: $author, genre: $genre) {
    author {
      name
    }
    genres
    id
    published
    title
  }
}
`
