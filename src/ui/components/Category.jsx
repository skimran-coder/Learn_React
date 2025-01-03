import { useNavigate } from "react-router-dom";
import { IMG_CDN_URL } from "../../Constant";

const Category = ({ imageId, action }) => {
  const navigate = useNavigate();
  return (
    <img
      src={IMG_CDN_URL + imageId}
      className="w-36 cursor-pointer"
      onClick={() => {
        navigate(
          `/collection/${action?.text?.toLowerCase()}/${
            action?.link?.split("=")[1].split("&")[0]
          }`
        );
      }}
    ></img>
  );
};

export default Category;
