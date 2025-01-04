import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../../Constant";
import Buttons from "../components/Buttons";
import EmptyCart from "../components/EmptyCart";
import { useEffect, useState } from "react";
import NonVegIcon from "../icons/NonVegIcon";
import VegIcon from "../icons/VegIcon";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const [price, setPrice] = useState(0);
  const deliveryFees = Math.floor(price * 0.1);
  const platformFee = 5;
  const gst = Math.floor((price + deliveryFees + platformFee) * 0.1);

  useEffect(() => {
    const priceData = cartItems?.map((items) => {
      const key = Object.keys(items)
        .filter((key) => key === "dish" || key === "card")
        .toString();
      return items?.[key]?.info?.price || items?.[key]?.info?.defaultPrice;
    });
    const price = priceData.reduce((acc, price) => acc + price / 100, 0);
    setPrice(price);
  }, [cartItems]);

  const dataToDisplay = cartItems.reduce((acc, curr) => {
    const key = Object.keys(curr)
      .filter((key) => key === "dish" || key === "card")
      .toString();
    if (!acc.some((item) => item?.[key]?.info?.id === curr?.[key]?.info?.id)) {
      acc.push(curr);
    }
    return acc;
  }, []);

  return cartItems.length > 0 ? (
    <div className="sm:w-4/5 md:w-3/5 lg:w-2/5 w-screen m-auto min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-gray-700 font-extrabold text-3xl pb-8">
        Secure Checkout
      </h1>
      <div className="w-full max-w-3xl h-[80vh] bg-white shadow-md rounded-md overflow-y-auto">
        <div className="p-5">
          {dataToDisplay.map((item) => {
            const key = Object.keys(item)
              .filter((key) => key === "dish" || key === "card")
              .toString();
            return (
              <div
                key={item?.[key]?.info?.id + Math.random()}
                className="flex flex-wrap items-center justify-between border-b border-gray-200 py-4"
              >
                <div className="flex items-center gap-4">
                  <div>
                    {item?.[key]?.info?.itemAttribute?.vegClassifier ===
                    "NONVEG" ? (
                      <NonVegIcon />
                    ) : (
                      <VegIcon />
                    )}
                  </div>
                  <img
                    src={IMG_CDN_URL + item?.[key]?.info?.imageId}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h1 className="font-semibold text-gray-800">
                      {item?.[key]?.info?.name}
                    </h1>
                    <p className="text-sm text-gray-500">
                      ₹
                      {item?.[key]?.info?.price / 100
                        ? item?.[key]?.info?.price / 100
                        : item?.[key]?.info?.defaultPrice / 100}
                    </p>
                  </div>
                </div>
                <Buttons item={item} />
              </div>
            );
          })}
        </div>

        {
          <div className="p-5 border-t border-gray-200">
            <h1 className="font-bold text-lg text-gray-800">Bill Details</h1>
            <div className="flex justify-between text-gray-700 mt-4">
              <span>Item Total</span>
              <span>₹{price}</span>
            </div>
            <div className="flex justify-between text-gray-700 mt-2">
              <span>Delivery Fees</span>
              <span>₹{deliveryFees}</span>
            </div>
            <hr className="my-2 border-gray-200" />
            <div className="flex justify-between text-gray-700 mt-2">
              <span>Platform Fee</span>
              <span>₹{platformFee}</span>
            </div>
            <div className="flex justify-between text-gray-700 mt-2">
              <span>GST and Restaurant Charges</span>
              <span>₹{gst}</span>
            </div>
            <hr className="my-2 border-gray-200" />
            <div className="flex justify-between font-semibold text-gray-800 mt-2">
              <span>Total</span>
              <span className="text-myYellow">
                ₹{price + deliveryFees + platformFee + gst}
              </span>
            </div>
            <button className="w-full mt-5 py-2 bg-myYellow text-white font-semibold rounded-md">
              Proceed to Checkout
            </button>
          </div>
        }
      </div>
    </div>
  ) : (
    <EmptyCart />
  );
};

export default Cart;
