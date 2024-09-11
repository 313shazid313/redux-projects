import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    {
      id: "1",
      title: "Physics",
      author: "Tofajjol",
      price: "300",
      quantity: "123",
    },
    {
      id: "2",
      title: "Math",
      author: "S U Ahmed",
      price: "350",
      quantity: "121",
    },
    {
      id: "3",
      title: "Higher Math",
      author: "Ketab Uddin",
      price: "400",
      quantity: "231",
    },
  ],
};
const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    //? we can receive data with action action property
    //? we can change property
    deleteBook: (state, action) => {
      const id = action.payload;
      console.log(id);
      state.books = state.books.filter((book) => book.id !== id);
    },
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    updatebook: (state, action) => {
      const { id, title, author, price, quantity } = action.payload;
      const existingBook = state.books.find((book) => book.id === id);

      if (existingBook) {
        existingBook.title = title;
        existingBook.author = author;
        existingBook.price = price;
        existingBook.quantity = quantity;
      }
    },
  },
});
export const { deleteBook, addBook, updatebook } = bookSlice.actions;
export default bookSlice.reducer;
