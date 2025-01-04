import { useSelector } from "react-redux";
import { addItem, removeItem } from "../../utils/Redux/cartSlice";
import { useDispatch } from "react-redux";

const Buttons = ({ item }) => {
  const key = Object.keys(item)
    .filter((key) => key === "dish" || key === "card")
    .toString();

  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const isItemAdded = cartItems.filter(
    (cart) => cart?.[key]?.info?.id === item?.[key]?.info?.id
  );

  console.log(isItemAdded);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    if (localStorage.getItem("cart")) {
      const existingCart = localStorage.getItem("cart");
      const cart = JSON.parse(existingCart);
      console.log(cart);
      cart.push(item);
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      const cart = [item];
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
    if (localStorage.getItem("cart")) {
      const existingCart = localStorage.getItem("cart");
      const cart = JSON.parse(existingCart);
      console.log(cart);
      const indexToRemove = cart.findIndex(
        (item) => item?.[key]?.info?.id === itemId
      );
      if (indexToRemove !== -1) {
        cart.splice(indexToRemove, 1);
      }
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  return isItemAdded.length !== 0 ? (
    <div className="flex items-center bg-white gap-3 px-2 sm:px-4 py-1 w-fit rounded-full shadow-md text-lg text-gray-800">
      <button
        className="flex justify-center items-center w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
        onClick={() => handleRemoveItem(item?.[key]?.info?.id)}
      >
        <i className="fa-solid fa-minus"></i>
      </button>

      <div className="font-bold text-lg" id="count">
        {
          cartItems.filter(
            (cartItem) => cartItem?.[key]?.info?.id === item?.[key]?.info?.id
          ).length
        }
      </div>

      <button
        className="flex justify-center items-center w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
        onClick={() => handleAddItem(item)}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  ) : (
    <div
      className="flex items-center justify-center w-20 sm:w-28 py-1 rounded-full bg-white text-myYellow font-extrabold text-lg cursor-pointer hover:bg-gray-100 transition-colors ease-in-out border"
      onClick={() => handleAddItem(item)}
    >
      ADD
    </div>
  );
};

export default Buttons;
