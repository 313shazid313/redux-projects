import { useState } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

const App = () => {
  const [editbook, setEdit] = useState(null);
  const handleEdit = (book) => {
    setEdit(book);
  };

  const onEditCancelHandle = () => {
    setEdit(null);
  };

  return (
    <>
      <BookForm booktoEdit={editbook} onCancel={onEditCancelHandle} />
      <br />
      <br />
      <BookList onHandleEdit={handleEdit} />
    </>
  );
};

export default App;
