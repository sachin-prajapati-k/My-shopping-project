import { Button } from "react-bootstrap";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

const CartButton = ({ props = 1 }) => {
  return (
    <>
      <Button variant="warning rounded-pill d-flex align-items-center gap-1">
        Your Cart {"\u00A0"}
        <ShoppingCart />
        {"\u00A0"}
        <Badge
          color="success"
          badgeContent={props}
          overlap="circular"
          className="me-1"
        />
      </Button>
    </>
  );
};

export default CartButton;
