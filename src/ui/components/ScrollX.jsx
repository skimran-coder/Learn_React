import LeftArrow from "../icons/LeftArrow";
import RightArrow from "../icons/RightArrow";

const ScrollX = ({ container }) => {
  const scrollContainer = (direction) => {
    if (container?.current) {
      const currentScroll = container.current.scrollLeft;
      console.log(currentScroll)
      const newScroll = direction === "left" ? currentScroll - 400 : currentScroll + 400;
      container.current.scrollTo({
        left: newScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="hidden sm:flex gap-4 pr-8 pt-8">
      <span
        className="bg-myGrayDark rounded-full p-2 cursor-pointer"
        onClick={() => scrollContainer("left")}
      >
        <LeftArrow />
      </span>
      <span
        className="bg-myGrayDark rounded-full p-2 cursor-pointer"
        onClick={() => scrollContainer("right")}
      >
        <RightArrow />
      </span>
    </div>
  );
};

export default ScrollX;
