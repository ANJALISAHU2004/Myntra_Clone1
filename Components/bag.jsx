import "./bag.css";
import Total from "./Total";
import BagItem from "./BagItem";
import { useSelector } from "react-redux";
const Bag = () => {
  let i = {
    image: "public/images/images/1.jpg",
    company: "Carlton London",
    name: "earings",
    rating: {
      stars: 4.5,
      reviews: 1400,
    },
    original_price: 1199,
    current_price: 699,
    discount_percentage: 43 + "%",
  };
  const bagItems = useSelector((store) => {
    return store.bagItems;
  });
  return (
    <>
      <div className="bag-page">
        <div className="bag-items-container">
          <div className="bag-item-container">
            {bagItems.map((item) => (
              <div key={item.id + "bag_item"}>
                <BagItem i={item} />
              </div>
            ))}{" "}
          </div>
        </div>
        <Total Item={i}></Total>
      </div>
    </>
  );
};
export default Bag;
