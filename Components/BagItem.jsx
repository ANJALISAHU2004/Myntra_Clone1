import { useDispatch } from "react-redux";
import "./bag.css";
import { bagActions } from "../Store/bagitem";
const BagItem = ({ i }) => {
  const dispatch = useDispatch();
  const HandelDelete = (id) => {
    dispatch(bagActions.deleteItem(id));
  };
  return (
    <>
      <main>
        <div className="items-container">
          <div className="item-container">
            <div className="bag-item-container">
              <div className="item-left-part">
                <img src={i.image} className="bag-item-img" />
              </div>
              <div className="item-right-part">
                <div className="company">{i.company}</div>
                <div className="item-name">{i.item_name}</div>
                <div className="price-container">
                  <span className="current-price">Rs {i.current_price}</span>
                  <br />
                  <span className="original-price">
                    {" " + i.original_price}
                  </span>
                  <span className="discount-percentage">
                    ({" " + i.discount_percentage + "%"} OFF)
                  </span>
                </div>
                <div className="return-period">
                  <span className="return-period-days">{i.return_period}</span>{" "}
                  return available
                </div>
                <div className="delivery-details">
                  Delivery by
                  <span className="delivery-details-days">
                    {i.delivery_date}
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  HandelDelete(i.id);
                }}
              >
                <div className="remove-from-cart">X</div>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default BagItem;
