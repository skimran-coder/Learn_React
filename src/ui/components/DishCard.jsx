import { Link } from "react-router-dom";
import { IMG_CDN_URL, rightIcon } from "../../Constant";
import NonVegIcon from "../icons/NonVegIcon";
import VegIcon from "../icons/VegIcon";
import Buttons from "./Buttons";

const DishCard = ({ card }) => {
  return (
    <div className="rounded-md shadow-lg p-4 flex flex-col gap-8 my-4">
      <div className="border-b-2 py-4 flex justify-between items-center">
        <div>
          <h3 className="text-gray-700 font-semibold">
            By {card?.card?.card?.restaurant?.info?.name}
          </h3>
          <div className="flex gap-1 text-sm opacity-80">
            <p className="">★</p>
            <h4>{card?.card?.card?.restaurant?.info?.avgRatingString}</h4>
            {" • "}
            <h4>{card?.card?.card?.restaurant?.info?.sla?.slaString}</h4>
          </div>
        </div>
        <Link to={"/restaurant/" + card?.card?.card?.restaurant?.info?.id}>
          <div className="pr-4 opacity-80 hover:opacity-100 transition-opacity">
            {rightIcon}
          </div>
        </Link>
      </div>
      <div className="flex justify-between">
        <div className="max-w-[50%]">
          {card?.card?.card?.info?.isVeg == 1 ? <VegIcon /> : <NonVegIcon />}
          <h2 className="text-gray-700 text-lg font-semibold ">
            {card?.card?.card?.info?.name}
          </h2>
          <p className="text-black font-semibold">
            ₹{card?.card?.card?.info?.price / 100}
          </p>
        </div>
        <div className="relative">
          <img
            src={IMG_CDN_URL + card?.card?.card?.info?.imageId}
            className="w-32 h-32 sm:w-40 sm:h-40 aspect-square object-cover rounded-lg"
          ></img> 
          <div className="absolute -bottom-2 right-4">
            <Buttons item={card?.card} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
