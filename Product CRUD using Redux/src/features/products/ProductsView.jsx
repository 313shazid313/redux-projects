/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { fetchProducts, deleteProduct } from "./productsSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductsView = ({ onHandleSetProductEdt }) => {
  const { products, isLoading, error } = useSelector(
    (state) => state.productsR
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleEdit = (product) => {
    onHandleSetProductEdt(product);
    console.log(product);
  };

  return (
    <>
      {isLoading && <h1>loading......</h1>}

      {error && <>{error}</>}

      {!isLoading && !error && (
        <section>
          {products.map((product) => {
            return (
              <article key={product.id}>
                <div className="card">
                  <div className="card-header">Products</div>
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <h3 className="card-text">{product.category}</h3>
                    <h4 className="card-text">Price : {product.price}</h4>
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={() => handleEdit(product)}
                    >
                      Edit
                    </button>{" "}
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={() => {
                        dispatch(deleteProduct(product.id));
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      )}
    </>
  );
};

export default ProductsView;
