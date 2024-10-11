import { nanoid } from "nanoid";
import { useCreateaProductMutation } from "../../services/productsApi";
import { useState } from "react";

const ProductForm = () => {
  const [createaProduct] = useCreateaProductMutation();
  const newId = nanoid();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
  });


  const handleInputChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log({ ...product, id: newId });

    try {
      await createaProduct({ ...product, id: newId });
    } catch (error) {
      console.error(error);
    }

    //   //? for resetting input fuild to null
    setProduct({
      title: "",
      price: "",
      description: "",
      category: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="myform p-4">
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
        <textarea
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
       
        <button className="btn btn-success" type="submit">Add Product</button>
      </div>
    </form>
  );
};

export default ProductForm;
