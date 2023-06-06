import { useState } from 'react'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import { useQuery } from "@apollo/client"

import { ALL_BOOKS, ALL_AUTHORS } from './queries'



const App = () => {
  const [page, setPage] = useState('authors')
  const authors = useQuery(ALL_AUTHORS)
  const books = useQuery(ALL_BOOKS)
  const allauthors = authors.loading ? [] : authors.data.allAuthors
  const allbooks = books.loading ? [] : books.data.allBooks

  return (
    <div>
      <div>
        <button onClick={() => setPage('authors')}>authors</button>
        <button onClick={() => setPage('books')}>books</button>
        <button onClick={() => setPage('add')}>add book</button>
      </div>

      <Authors show={page === 'authors'} authors={allauthors} />

      <Books show={page === 'books'} books={allbooks} />

      <NewBook show={page === 'add'} />
    </div>
  )
}

export default App
