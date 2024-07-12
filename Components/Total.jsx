import { useSelector } from "react-redux";

const Total = () => {
  const BagItems = useSelector((store) => {
    return store.bagItems;
  });
  console.log(BagItems);
  let NOI = 0;
  let totalMRP = 0;
  let discountMRP = 0;
  let finalMRP = 0;
  BagItems.map((item) => {
    NOI++;
    totalMRP += item.original_price;
    finalMRP += item.current_price + 99;
  });
  discountMRP += totalMRP - finalMRP - 99;
  return (
    <>
      <div className="bag-summary">
        <div className="bag-details-container">
          <div className="price-header">PRICE DETAILS({NOI} Items)</div>
          <div className="price-item">
            <span className="price-item-tag">Total MRP</span>
            <span className="price-item-value">Rs{totalMRP}</span>
          </div>
          <div className="price-item">
            <span className="price-item-tag">Discount on MRP</span>
            <span className="price-item-value priceDetail-base-discount">
              -Rs{discountMRP}
            </span>
          </div>
          <div className="price-item">
            <span className="price-item-tag">Convenience Fee</span>
            <span className="price-item-value">Rs 99</span>
          </div>
          <hr />
          <div className="price-footer">
            <span className="price-item-tag">Total Amount</span>
            <span className="price-item-value">Rs {finalMRP}</span>
          </div>
          <button className="btn-place-order">
            <div className="css-xjhrni">PLACE ORDER</div>
          </button>
        </div>
      </div>
    </>
  );
};
export default Total;
