import { Button } from "react-bootstrap";
import { useContext } from "react";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { IButtonClick } from "../../types.js/types";
import { CartContext } from "../Store/CartContext";
const CartButton = ({ onOpen }: IButtonClick) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItem = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + (item as { amount: number }).amount;
  }, 1);
  return (
    <>
      <Button
        variant="warning rounded-pill d-flex align-items-center gap-1"
        onClick={onOpen}
      >
        Your Cart {"\u00A0"}
        <ShoppingCart />
        {"\u00A0"}
        <Badge
          color="success"
          badgeContent={numberOfCartItem}
          overlap="circular"
          className="me-1"
        />
      </Button>
    </>
  );
};

export default CartButton;
