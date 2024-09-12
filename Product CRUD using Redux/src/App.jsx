import { useState } from "react";
import ProductForm from "./features/products/ProductForm";
import ProductsView from "./features/products/ProductsView";

function App() {
  //? i want to send data from ProductsView component to
  //? productForm component to update product

  const [isEdit, setIsEdit] = useState(false);
  const [trgetProduct, setTargetProduct] = useState({});

  const HandleSetProductEdt = (product) => {  
    setTargetProduct(product);
    console.log(product); //! target product
    setIsEdit(true);
  };

  return (
    <>
      <ProductForm trgetProduct={trgetProduct} onisEdit={isEdit} />
      <ProductsView onHandleSetProductEdt={HandleSetProductEdt} />
    </>
  );
}

export default App;
