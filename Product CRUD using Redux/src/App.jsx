import { useState } from "react";
import ProductForm from "./features/products/ProductForm";
import ProductsView from "./features/products/ProductsView";

function App() {
  //? i want to send data from ProductsView component to
  //? productForm component to update product

  const [isEdit, setIsEdit] = useState(false);
  const [updateProduct, setUpdateProduct] = useState({});

  const HandleSetProductEdt = (product) => {
    setUpdateProduct(product);
    // console.log(product); //! target product
    //
    setIsEdit(true);
  };

  return (
    <>
      <ProductForm onupdateProduct={updateProduct} onisEdit={isEdit} />
      <ProductsView onHandleSetProductEdt={HandleSetProductEdt} />
    </>
  );
}

export default App;
