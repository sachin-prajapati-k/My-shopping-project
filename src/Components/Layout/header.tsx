import styles from "./Header.module.css";
import image from "../../assets/foodimg.jpg";
import image2 from "../../assets/foodimg2.jpg";
import CartButton from "./Header-cart";
const Header = () => {
  return (
    <div>
      <div className={styles.header}>
        <h1>Food Shop</h1>
        <CartButton />
      </div>
      <div className={styles["main-image"]} style={{ margin: "0px" }}>
        <img src={image2} alt="food header " />
      </div>
    </div>
  );
};

export default Header;
