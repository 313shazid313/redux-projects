import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { createProduct } from "./productsSlice";
import { updateProduct } from "./productsSlice";
// eslint-disable-next-line react/prop-types
const ProductForm = ({ onupdateProduct = {}, onisEdit = false }) => {
  console.log(onupdateProduct);
  console.log(onisEdit);
  const dispatch = useDispatch();

  //? using nanoid
  const id = nanoid();

  const [product, setProduct] = useState({
    id: id,
    title: "",
    description: "",
    category: "",
    price: "",
  });

  console.log(product);

  useEffect(() => {
    if (onupdateProduct) {
      setProduct({
        title: onupdateProduct.title || "",
        description: onupdateProduct.description || "",
        category: onupdateProduct.category || "",
        price: onupdateProduct.price || "",
      });
    }
  }, [onupdateProduct]);

  const handleInputChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Data:", product);
    if (onisEdit) {
      dispatch(updateProduct({ id, product }));
    }
    dispatch(createProduct({ ...product }));
  };

  return (
    <form onSubmit={handleSubmit} className="myform">
      <h1>Fill Up This Form</h1>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Title
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          value={product.title}
          onChange={handleInputChange}
          name="title"
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Description
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          value={product.description}
          onChange={handleInputChange}
          name="description"
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Category
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          value={product.category}
          onChange={handleInputChange}
          name="category"
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Price
        </span>
        <input
          type="number"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          value={product.price}
          onChange={handleInputChange}
          name="price"
        />
      </div>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-primary" type="submit">
          {onisEdit ? "Update Product " : "Add New Product"}
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
