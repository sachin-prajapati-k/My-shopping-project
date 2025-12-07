import Modal from "@mui/material/Modal";
import { ICart } from "../types.js/types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
export default function Cart({ open, close, props }: ICart) {
  const style: any = {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
  };
  return (
    <Modal
      open={open}
      onClose={close} // pass handler directly
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          lsdkls
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          sldk
        </Typography>
      </Box>
    </Modal>
  );
}
