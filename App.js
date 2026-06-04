import { useState, useEffect } from "react";

import Header from "./components/Header";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import Footer from "./components/Footer";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // GET
  useEffect(() => {
    fetch("http://localhost:3001/books")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Помилка завантаження");
        setLoading(false);
      });
  }, []);

  // POST
  const addBook = (book) => {
    fetch("http://localhost:3001/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    })
      .then((response) => response.json())
      .then((newBook) => {
        setBooks([...books, newBook]);
      });
  };

  // DELETE
  const deleteBook = (id) => {
    fetch(`http://localhost:3001/books/${id}`, {
      method: "DELETE",
    }).then(() => {
      setBooks(books.filter((book) => book.id !== id));
    });
  };

  if (loading) {
    return <h2>Завантаження...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <Header />

      <BookForm addBook={addBook} />

      <BookList
        books={books}
        deleteBook={deleteBook}
      />

      <Footer />
    </div>
  );
}

export default App;