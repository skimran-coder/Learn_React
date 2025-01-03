import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../../Constant";

const RestaurantCards = ({ res }) => {
  return (
    <Link to={"/restaurant/" + res?.info?.id}>
      <div className="rounded-md shadow-lg p-4 flex items-center gap-4 my-4">
        <div className="">
          <img
            src={IMG_CDN_URL + res?.info?.cloudinaryImageId}
            className="w-24 h-24 sm:w-32 sm:h-32 aspect-square object-cover rounded-lg"
          ></img>
        </div>
        <div>
          <h2 className="text-gray-700 font-semibold">{res.info?.name}</h2>

          <div className="flex gap-1 text-sm opacity-80">
            <p className="">★</p>
            <h3>{res.info?.avgRating}</h3>
            {" • "}
            <h4>{res.info?.sla?.slaString}</h4>
            {" • "}
            <h5>{res.info?.costForTwo}</h5>
          </div>
          <p></p>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCards;
