import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const useMenu = () => {
  const params = useParams();
  const { resid } = params;
  const lat = localStorage.getItem("lat") || "22.51800";
  const lng = localStorage.getItem("lng") || "88.38320";

  const [restaurant, setRestaurant] = useState();

  
  useEffect(() => {
    async function getRestaurantMenu() {
      const data = await fetch(
        `${
          import.meta.env.VITE_BACKEND_URL
        }menu/?resid=${resid}&lat=${lat}&lng=${lng}`
      );
  
      const json = await data.json();
      setRestaurant(json?.data);
    }
    getRestaurantMenu();
  }, [lat, lng, resid]);

  return restaurant;
};

export default useMenu;
