import { useParams } from "react-router-dom";
import useCollection from "../../utils/hooks/useCollection";
import Card from "../components/Card";
import Loader from "../components/Loader";

const Collection = () => {
  const params = useParams();
  const data = useCollection(params.name, params.id);

  console.log(data);

  if (!data) {
    return <Loader />;
  }

  return (
    <div className="w-10/12 mx-auto">
      <div className="my-4 ml-8 ">
        <h1 className="text-gray-700 font-extrabold text-5xl">
          {data?.cards[0]?.card?.card?.title}
        </h1>
        <h2 className="text-gray-700 opacity-80 text-xl">
          {data?.cards[0]?.card?.card?.description}
        </h2>
      </div>
      <div className="resCards grid grid-rows-4 gap-y-8 pt-8 pb-16">
        {data?.cards?.map((card) => {
          return (
            card?.card?.card?.info && (
              <Card
                {...card?.card?.card?.info}
                key={card?.card?.card?.info.id}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Collection;
