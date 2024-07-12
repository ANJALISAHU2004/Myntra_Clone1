import { useDispatch } from "react-redux";
import { bagActions } from "../Store/bagitem";

const Container = ({ item }) => {
  const dispatch = useDispatch();
  const handelAdd = (id) => {
    dispatch(bagActions.AddItem(id));
  };
  return (
    <>
      <div className="item_contianer">
        <img className="item_image" src={item.image} alt="" />
        <div className="rating">
          {item.rating.stars}⭐|{item.rating.reviews}k
        </div>
        <div className="item_company_name">{item.company}</div>
        <div className="item_name">{item.item_name}</div>
        <div className="price">
          <span className="item_price"> {item.current_price}</span>
          <span className="original_price"> Rs{item.original_price}</span>
          <span className="discount_price"> {item.discount_percentage}%</span>
        </div>
        <button
          className="text button-64 "
          role="button"
          onClick={() => {
            handelAdd(item.id);
          }}
        >
          ADD TO BAG
        </button>
      </div>
    </>
  );
};
export default Container;
