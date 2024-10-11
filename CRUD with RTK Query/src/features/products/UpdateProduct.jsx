/* eslint-disable react/prop-types */
import { useState } from "react";
import { useUpdateProductMutation } from "../../services/productsApi";

const UpdateProduct = ({ product, setTargetProduct }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const [updateProduct] = useUpdateProductMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProduct({
        id: product.id,
        newUpdatedProduct: updatedProduct,
      });
      
      // console.log(updatedProduct);
      setUpdatedProduct({
        title: "",
        price: "",
        description: "",
        category: "",
      });

    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    setUpdatedProduct({
      ...updatedProduct,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="myform">
        <h1>Fill Up This Form to update</h1>
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Title
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={updatedProduct.title}
            onChange={handleInputChange}
            name="title"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Description
          </span>
          <textarea
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={updatedProduct.description}
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
            value={updatedProduct.category}
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
            value={updatedProduct.price}
            onChange={handleInputChange}
            name="price"
          />
        </div>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
          <button
            className="btn btn-danger"
            type="button"
            onClick={() => {
              setTargetProduct(null);
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
