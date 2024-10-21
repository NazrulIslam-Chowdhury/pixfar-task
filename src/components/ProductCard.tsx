import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartReducer";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { ProductProps } from "../types/types";


const ProductCard = ({ product }: { product: ProductProps }) => {
  const [productQuantity, setProductQuantity] = useState(1);
  const dispatch = useDispatch();
  const { category, image, title, description, price, rating } = product;

  // add to cart function
  const addToCartHandler = () => {
    dispatch(
      addToCart({
        ...product,
        quantity: productQuantity,
      })
    );
  };

  return (
    <main className="product-card border-[1px] border-gray-400 rounded-md p-2 lg:h-[600px] cursor-pointer">
      <div className="h-[180px] md:h-[50%]">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="product-details text-xs lg:text-base space-y-2 mt-4">
        <h3 className="line-clamp-1 font-bold">{title}</h3>
        <p className="line-clamp-3">{description}</p>
        <p className="font-bold">Price: ${price}</p>
        <p>
          Rating: {rating?.rate} stars ({rating?.count} reviews)
        </p>
        <p>Category:{category}</p>
      </div>

      <div className="flex flex-wrap md:flex-nowrap items-center gap-2  mt-5">
        {/* quantity */}
        <div className="flex flex-row items-center justify-between lg:items-start lg:flex-col lg:gap-2">
          <div className="flex items-center w-full">
            <button
              disabled={productQuantity === 1}
              onClick={() =>
                productQuantity > 1 && setProductQuantity(productQuantity - 1)
              }
              className="shadow-lg border-[1px] p-3 hover:bg-red-700 hover:text-white transition-colors duration-300 rounded bg-gray-200"
            >
              <FaMinus />
            </button>
            <p className="px-3 py-2 border-y-[1px] font-bold">
              {productQuantity}
            </p>
            <button
              onClick={() =>
                productQuantity >= 1 && setProductQuantity(productQuantity + 1)
              }
              className="shadow-lg border-[1px] p-3 hover:bg-red-700 hover:text-white transition-colors duration-300 rounded bg-gray-200"
            >
              <FaPlus />
            </button>
          </div>
        </div>
        <button
          onClick={() => addToCartHandler()}
          className="bg-red-500 px-6 py-2 text-white text-center text-xs lg:text-base w-full rounded-3xl hover:bg-red-700 duration-300 uppercase font-semibold"
        >
          Add to cart
        </button>
      </div>
    </main>
  );
};

export default ProductCard;
