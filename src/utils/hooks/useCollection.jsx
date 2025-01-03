import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useCollection = (name, id) => {
  const { lat, lng } = useSelector((store) => store.location);
  const [collectionData, setCollectionData] = useState();

  useEffect(() => {
    try {
      async function getCollectionData() {
        const response = await fetch(
          `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&collection=${id}&tags=layout_CCS_${name}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`
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
