import Modal from "@mui/material/Modal";
import { ICart } from "../types.js/types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useContext } from "react";
import { CartContext } from "../Components/Store/CartContext";
import { Button, ListGroup, Image } from "react-bootstrap";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Cart({ open, close }: ICart) {
  const cartCtx = useContext(CartContext);

  const style: any = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    maxHeight: "80vh",
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
    overflowY: "auto",
  };

  const handleRemoveItem = (id: any) => {
    cartCtx.removeFromCart(id);
  };

  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h5"
          component="h2"
          sx={{ mb: 3 }}
        >
          Your Cart
        </Typography>

        {cartCtx.items.length === 0 ? (
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, textAlign: "center" }}
          >
            Your cart is empty. Add some delicious meals!
          </Typography>
        ) : (
          <>
            <ListGroup>
              {cartCtx.items.map((item: any) => (
                <ListGroup.Item
                  key={item.id}
                  className="d-flex justify-content-between align-items-center mb-2"
                >
                  <div
                    className="d-flex align-items-center"
                    style={{ flex: 1 }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                        marginRight: "15px",
                      }}
                      rounded
                    />
                    <div style={{ flex: 1 }}>
                      <h6 style={{ margin: 0 }}>{item.title}</h6>
                      <p
                        style={{
                          margin: "5px 0",
                          color: "#666",
                          fontSize: "0.9rem",
                        }}
                      >
                        ${item.price.toFixed(2)} × {item.amount}
                      </p>
                      <p
                        style={{
                          margin: 0,
                          fontWeight: "bold",
                          color: "#28a745",
                        }}
                      >
                        ${(item.price * item.amount).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleRemoveItem(item.id)}
                    style={{ marginLeft: "10px" }}
                  >
                    <DeleteIcon />
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>

            <div className="mt-4 pt-3 border-top">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <Typography variant="h6" component="span">
                  Total:
                </Typography>
                <Typography
                  variant="h5"
                  component="span"
                  sx={{ fontWeight: "bold", color: "#28a745" }}
                >
                  ${cartCtx.totalPrice.toFixed(2)}
                </Typography>
              </div>
              <div className="d-flex gap-2">
                <Button variant="secondary" onClick={close} style={{ flex: 1 }}>
                  Close
                </Button>
                <Button variant="success" style={{ flex: 1 }}>
                  Order Now
                </Button>
              </div>
            </div>
          </>
        )}
      </Box>
    </Modal>
  );
}
