import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useDish = (name) => {
  const [data, setData] = useState();
  const { lat, lng } = useSelector((store) => store.location);
  

  useEffect(() => {
    try {
      async function getDishData() {
        const response = await fetch(
          `${
            import.meta.env.VITE_BACKEND_URL
          }dish/?lat=${lat}&lng=${lng}&name=${name}`
        );

        const data = await response.json();


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
