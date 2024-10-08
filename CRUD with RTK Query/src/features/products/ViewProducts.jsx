import { useGetProductsQuery } from "../../services/productsApi"


const ViewProducts = () => {

  const {data, isError, isLoading} = useGetProductsQuery();
  console.log(data);
console.log(isError)
  return (
    <div>
        
        <h1>Showing Products</h1>
        {isLoading && <p>Loading</p>}
        {isError && <p>Caught error</p>}
        <section className="product">
          {}
        </section>
    </div>
  )
}

export default ViewProducts