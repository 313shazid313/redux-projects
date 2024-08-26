import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addBook, updatebook } from "../features/bookSlice";

const BookForm = ({ booktoEdit, onCancel }) => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    price: "",
    quantity: "",
  });

  useEffect(() => {
    if (booktoEdit) {
      setBook(booktoEdit);
    }
  }, [booktoEdit]);

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook((previousBook) => ({ ...previousBook, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (booktoEdit) {
      dispatch(updatebook(book));
    } else {
      dispatch(addBook({ ...book, id: nanoid() }));
    }
    setBook({
      title: "",
      author: "",
      price: "",
      quantity: "",
    });
  };

  return (
    <div>
      <h1>Book Form</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          value={book.title}
          onChange={handleInputChange}
          required
        />{" "}
        <input
          type="text"
          name="author"
          placeholder="Enter Author Name"
          value={book.author}
          onChange={handleInputChange}
          required
        />{" "}
        <br />
        <input
          type="number"
          name="price"
          placeholder="Enter price"
          value={book.price}
          onChange={handleInputChange}
          required
        />{" "}
        <input
          type="number"
          name="quantity"
          placeholder="Enter Amount"
          value={book.quantity}
          onChange={handleInputChange}
          required
        />{" "}
        <br />
        <br />
        <button type="submit">
          {booktoEdit ? "update Book" : "Add New Book"}{" "}
        </button>{" "}
        {/* getting onCancel from props // which is getting from App.jsx component */}
        {booktoEdit && <button onClick={onCancel}>Cancel</button>}
      </form>
    </div>
  );
};

export default BookForm;
