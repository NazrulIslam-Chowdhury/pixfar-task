import { useGetProductsQuery } from "../redux/apiSlice";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

const Product = () => {
  const [limit, setLimit] = useState(5);
  const { data, error, isLoading, isFetching } = useGetProductsQuery(limit);

  // load more data
  const loadMore = () => {
    if (data && data.length === limit) {
      setLimit((prevLimit) => prevLimit + 5);
    }
  };

  // infinite scroll functionality
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [data, limit]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading items</p>;
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-24 lg:mx-5 mx-2">
      {data?.map((product: object) => (
        <ProductCard key={product?.id} product={product} />
      ))}
      {isFetching && <p>Loading more...</p>}
    </div>
  );
};

export default Product;
