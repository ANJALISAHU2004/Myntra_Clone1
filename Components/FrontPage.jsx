import css from "./FrontPage.module.css";
import ShopByCategories from "./ShopByCat";
const FrontPage = () => {
  return (
    <>
      <div>
        {" "}
        <img
          className={css.FirstContainer}
          src="images\FrontPage\Flat 300.png"
          alt="rs300off"
        />
      </div>
      <div>
        {" "}
        <img
          className={css.BannerContainer}
          src="images\FrontPage\BannerImage.png"
          alt="rs300off"
        />
      </div>
      <div>
        {" "}
        <img
          className={css.CouponContainer}
          src="images\FrontPage\Coupon corner.png"
          alt="rs300off"
        />
      </div>
      <div className={css.FlatOff}>
        <div>
          {" "}
          <img
            className={css.Flat100Off}
            src="images/FrontPage/Flat100Off.png"
            alt="rs300off"
          />
        </div>
        <div>
          {" "}
          <img
            className={css.Flat200Off}
            src="images/FrontPage/Flat200Off.png"
            alt="rs300off"
          />
        </div>
      </div>
      <div>
        {" "}
        <img
          className={css.CrazyDeals}
          src="images/FrontPage/CrazyDeal.png"
          alt="CrazyDealContainer"
        />
      </div>
      <div className={css.CrazyDealsContainer}>
        <ShopByCategories />
      </div>

      <div>
        <img
          className={css.ShopByCategories}
          src="images/FrontPage/ShopByCategory.png"
          alt="CrazyDeal"
        />
      </div>
      <div className={css.ShopByCategoriesContainer}>
        <ShopByCategories />
      </div>
    </>
  );
};
export default FrontPage;
