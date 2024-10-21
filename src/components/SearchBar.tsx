import { useSelector } from "react-redux";
import { CartState } from "../redux/cartReducer";
import { BsCart4 } from "react-icons/bs";
import { AiOutlineDollar } from "react-icons/ai";
import { useState } from "react";
import { useSearchProductsQuery } from "../redux/apiSlice";
import { ProductProps } from "../types/types";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data } = useSearchProductsQuery(searchTerm);
  const cart = useSelector(
    (state: { cart: CartState }) => state.cart.cartItems
  );

  // total cart price
  const totalPrice = cart?.reduce(
    (prev, next) => (prev += next.price * next.quantity),
    0
  );

  // total cart items
  const totalProduct = cart?.reduce((prev, next) => (prev += next.quantity), 0);

  return (
    <main className="flex items-center justify-between gap-10 py-4 px-1 md:px-5 fixed top-0 w-full bg-white shadow-md">
      <div className="relative w-full">
        <input
          type="search"
          name="search"
          className="w-full outline-red-500 border-[1px] border-gray-400 py-2 px-4 rounded-3xl placeholder:text-sm "
          placeholder="Search by category..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {data?.length > 0 && (
          <div className="absolute top-14 w-full h-96 overflow-y-auto bg-gray-50 shadow-md border-[1px] border-gray-400 rounded-md space-y-4">
            {data?.map((product: ProductProps) => (
              <div
                key={product?.id}
                className="flex flex-col md:flex-row gap-[30%] p-4"
              >
                <div className="md:w-96 md:h-40">
                  <img
                    src={product?.image}
                    alt={product?.title}
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-bold">{product?.title}</p>
                  <p className="line-clamp-2">{product?.description}</p>
                  <p className="font-bold">Price: {product?.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex items-center gap-2">
        <div className="relative">
          <BsCart4 className="size-8" />
          <p className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm">
            {totalProduct}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <AiOutlineDollar className="size-8" />
          <p className="text-red-500 font-medium">{totalPrice.toFixed(2)}</p>
        </div>
      </div>
    </main>
  );
};

export default SearchBar;
