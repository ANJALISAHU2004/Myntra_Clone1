import Container from "./container";
import { useSelector } from "react-redux";
const Home = () => {
  // let item = {
  //   image:
  //     "react projects/Myntra clone by react/Myntra_clone/public/images/images/1.jpg",
  //   company: "Carlton London",
  //   name: "earings",
  //   rating: {
  //     stars: 4.5,
  //     reviews: 1400,
  //   },
  //   original_price: 1199,
  //   discounted_price: 699,
  //   discounted_percentage: "43" + "%",
  // };
  const items = useSelector((store) => {
    return store.items;
  });

  return (
    <>
      <div className="items_container">
        {items.map((i) => (
          <Container key={i.id} item={i} />
        ))}
      </div>
    </>
  );
};
export default Home;
