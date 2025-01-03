import { Link, useParams } from "react-router-dom";
import useDish from "../../utils/hooks/useDish";
import Loader from "../components/Loader";
import DishCard from "../components/DishCard";
import { IMG_CDN_URL } from "../../Constant";
import RestaurantCards from "../components/RestaurantCards";

const Dish = () => {
  const params = useParams();
  const cardsData = useDish(params.name);

  if (!cardsData) {
    return <Loader />;
  }

  let cards;

  const key = Object.keys(cardsData[1]?.groupedCard?.cardGroupMap).toString()
  console.log(key)

  // if (params.type === "dish") {
  //   cards = cardsData[1]?.groupedCard?.cardGroupMap?.DISH?.cards;
  // } else if (params.type === "restaurant") {
  //   cards = cardsData[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards;
  // }

  cards = cardsData[1]?.groupedCard?.cardGroupMap?.[key]?.cards;

  console.log(cardsData);
  console.log(cards);

  return cards && cardsData && key === "DISH" ? (
    <div className="lg:w-3/4 w-full  mx-auto  px-4 lg:px-0 min-h-screen">
      <h1 className="py-4 text-2xl font-extrabold text-gray-700">
        Craving {params.name}? We've Got the Best for You!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {cards.map(
          (card) =>
            card?.card?.card?.info?.imageId && (
              <DishCard
                key={card?.card?.card?.info?.name + Math.random()}
                card={card}
              />
            )
        )}
      </div>
    </div>
  ) : (
    <div className="lg:w-3/4 w-full  mx-auto  px-4 lg:px-0 my-4 min-h-screen">
      <h1 className="py-4 text-2xl font-extrabold text-gray-700">
        Discover Deliciousness at {params.name}
      </h1>
      <Link to={cards && "/restaurant/" + cards[0]?.card?.card?.info?.id}>
        <div className="flex items-center gap-4 w-full lg:w-[50%] rounded-md shadow-lg p-4 my-4 cursor-pointer">
          <div>
            <img
              src={IMG_CDN_URL + cards[0]?.card?.card?.info?.cloudinaryImageId}
              className="w-24 h-24 sm:w-32 sm:h-32 aspect-square object-cover rounded-lg"
            ></img>
          </div>
          <div>
            <h2 className="text-gray-700 font-semibold">
              {cards[0]?.card?.card?.info?.name}
            </h2>

            <div className="flex gap-1 text-sm opacity-80">
              <p className="">★</p>
              <h3>{cards[0]?.card?.card?.info?.avgRatingString}</h3>
              {" • "}
              <h4>{cards[0]?.card?.card?.info?.sla?.slaString}</h4>
              {" • "}
              <h5>{cards[0]?.card?.card?.info?.costForTwoMessage}</h5>
            </div>
            <p></p>
          </div>
        </div>
      </Link>

      <p className="text-gray-700 text-lg font-bold">More results like this</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards[1]?.card?.card?.restaurants?.map((res) => (
          <RestaurantCards res={res} key={res?.info?.id} />
        ))}
      </div>
    </div>
  );
};

export default Dish;
