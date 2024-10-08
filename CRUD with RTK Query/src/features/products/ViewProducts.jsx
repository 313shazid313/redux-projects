import { useGetProductsQuery } from "../../services/productsApi";

const ViewProducts = () => {
  const { data, isError, isLoading } = useGetProductsQuery();

  const allData = useGetProductsQuery();

  console.log(allData);

  console.log(data);

  console.log(isError);

  return (
    <div>
      <h1>Showing Products</h1>

      {isLoading && <p>Loading</p>}

      {isError && <p>Caught error {isError.message}</p>}

      {!isLoading && !isError && (
        <section className="product">
          {data.map((singleData) => {
            return (
              <article key={singleData.id}>
                <h3>{singleData.title}</h3>
                <p>{singleData.description}</p>
              </article>
            );
          })}
        </section>
      )}
    </div>
  );
};

export default ViewProducts;
