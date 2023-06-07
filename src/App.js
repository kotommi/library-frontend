import { useState } from 'react'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import Login from './components/Login'
import { useApolloClient, useQuery } from "@apollo/client"

import { ALL_BOOKS, ALL_AUTHORS } from './queries'



const App = () => {
  const [token, setToken] = useState(null);
  const [page, setPage] = useState('authors');
  const client = useApolloClient();
  const authors = useQuery(ALL_AUTHORS);
  const books = useQuery(ALL_BOOKS);
  const allauthors = authors.loading ? [] : authors.data.allAuthors;
  const allbooks = books.loading ? [] : books.data.allBooks;

  const handleLogout = () => {
    setToken(null);
    localStorage.clear();
    client.resetStore();
  }

  return (
    <div>
      <div>
        <button onClick={() => setPage('authors')}>authors</button>
        <button onClick={() => setPage('books')}>books</button>
        {token ? <button onClick={() => setPage('add')}>add book</button> : null}
        {!token ? <button onClick={() => setPage('login')}>login</button> : <button onClick={() => handleLogout} >logout</button>}
      </div>

      <Authors show={page === 'authors'} authors={allauthors} />

      <Books show={page === 'books'} books={allbooks} />

      {token ? <NewBook show={page === 'add'} />
        : <Login show={page === 'login'} setToken={setToken} setPage={setPage} />}


    </div>
  )
}

export default App
