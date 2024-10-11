import { useState } from "react";
import {
  useGetProductsQuery,
  useDeleteProductsMutation,
} from "../../services/productsApi";
import UpdateProduct from "./UpdateProduct";

const ViewProducts = () => {
  // const allData = useGetProductsQuery();

  // console.log(allData);

  const { data, isError, isLoading } = useGetProductsQuery();

  // console.log(data);

  // console.log(isError);

  // array destructuring like react hooks
  const [deleteProducts] = useDeleteProductsMutation();

  // console.log(deleteProducts);

  const handleDelete = async (id) => {
    await deleteProducts(id);
  };

  const [targetProduct, setTargetProduct] = useState(null); // used for editing product perpose

  return (
    <div className="p-4">
      <h1>Showing Products</h1>

      {isLoading && <p>Loading</p>}

      {isError && <p>Caught error {isError.message}</p>}

      {!isLoading && !isError && (
        <section className="product p-4">
          {data.map((singleData) => {
            return (
              <div className="card text-center" key={singleData.id}>
                <div className="card-header"> product ID : {singleData.id}</div>
                <div className="card-body">
                  <h5 className="card-title">
                    Producr Name : {singleData.title}
                  </h5>
                  <p className="card-text">
                    Product Description : {singleData.description}
                  </p>
                  <p className="card-text">
                    Producr Category : {singleData.category}
                  </p>
                  <p className="card-text">
                    Product Price : {singleData.price}
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setTargetProduct(singleData);
                    }}
                  >
                    Edit
                  </button>
                  &nbsp; &nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleDelete(singleData.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </section>
      )}
      {targetProduct && (
        <UpdateProduct
          product={targetProduct}
          setTargetProduct={setTargetProduct} // for cancel function
        />
      )}
    </div>
  );
};

export default ViewProducts;
