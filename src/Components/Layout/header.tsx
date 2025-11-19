import styles from "./Header.module.css";

import image2 from "../../assets/foodimg2.jpg";
import CartButton from "./Header-cart";
import { IHeaderType } from "../../types.js/types";
const Header = ({ ClickOpen }: IHeaderType) => {
  return (
    <div>
      <div className={styles.header}>
        <h1>Food Shop</h1>
        <CartButton onOpen={ClickOpen} />
      </div>
      <div className={styles["main-image"]} style={{ margin: "0px" }}>
        <img src={image2} alt="food header " />
      </div>
    </div>
  );
};

export default Header;
