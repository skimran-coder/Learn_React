import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useLanding = () => {
  const [data, setData] = useState(null);
  const { lat, lng } = useSelector((store) => store.location);

  useEffect(() => {
    async function getLanding() {
      try {
        const data = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}landing/?lat=${lat}&lng=${lng}`
        );
        const json = await data.json();
        setData(json?.data);
      } catch (error) {
        console.log(error);
      }
    }

    getLanding();
  }, [lat, lng]);

  return data;
};

export default useLanding;
