import { gql } from "@apollo/client"


export const ADD_BOOK = gql`
mutation addBook($title: String!, $author: String!, $published: Int, $genres:[String!]!) {
    addBook(
        title: $title,
        author: $author,
        published: $published,
        genres: $genres
    ) {
        title,
        author
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
    author,
    title,
    published
  }
}
`

