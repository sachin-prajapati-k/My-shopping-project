import { Button } from "react-bootstrap";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { IButtonClick } from "../../types.js/types";

const CartButton = ({ onOpen }: IButtonClick) => {
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
          badgeContent={2}
          overlap="circular"
          className="me-1"
        />
      </Button>
    </>
  );
};

export default CartButton;
