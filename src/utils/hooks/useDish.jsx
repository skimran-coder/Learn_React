import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useDish = (name) => {
  const [data, setData] = useState();
  const { lat, lng } = useSelector((store) => store.location);
  console.log(name);

  useEffect(() => {
    try {
      async function getDishData() {
        const response = await fetch(
          `https://www.swiggy.com/dapi/restaurants/search/v3?lat=${lat}&lng=${lng}&str=${name}&trackingId=undefined&submitAction=SUGGESTION`
        );

        const data = await response.json();

        console.log(data)

        setData(data?.data.cards);
      }

      getDishData();
    } catch (error) {
      console.log(error);
    }
  }, [lat, lng, name]);

  return data;
};

export default useDish;
