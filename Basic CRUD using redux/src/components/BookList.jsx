import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../features/bookSlice";

const BookList = ({ onHandleEdit }) => {
  const books = useSelector((state) => state.booksR.books);

  console.log(books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  const handleEdit = (book) => {
    onHandleEdit(book);
  };

  return (
    <>
      <h2>List fof books</h2>

      {books && books.length > 0 ? (
        <ul>
          {books.map((book) => {
            return (
              <>
                <li>
                  {" "}
                  Book Name : {book.title} by {book.author}
                  {" "}Price : ${book.price} |||| Amount : {book.quantity}{" "}
                  <button
                    onClick={() => {
                      handleEdit(book);
                    }}
                  >
                    Edit Item
                  </button>{" "}
                  <button
                    onClick={() => {
                      handleDelete(book.id);
                    }}
                  >
                    Delete
                  </button>
                </li>
              </>
            );
          })}
        </ul>
      ) : (
        <p>No books available</p>
      )}
    </>
  );
};

export default BookList;
