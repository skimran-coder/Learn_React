import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useCollection = (name, id) => {
  const { lat, lng } = useSelector((store) => store.location);
  const [collectionData, setCollectionData] = useState();

  useEffect(() => {
    try {
      async function getCollectionData() {
        const response = await fetch(
          `${
            import.meta.env.VITE_BACKEND_URL
          }collection/?lat=${lat}&lng=${lng}&name=${name}&id=${id}`
        );

        const data = await response.json();

        setCollectionData(data?.data);
      }

      getCollectionData();
    } catch (error) {
      console.log(error);
    }
  }, [lat, lng, name, id]);

  return collectionData;
};

export default useCollection;
