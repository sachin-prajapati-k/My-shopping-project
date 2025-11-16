import { useState } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

export const MyModal = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Click to show
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop={"static"}
        centered
        closebutton
      >
        <Modal.Header closeButton>
          <Modal.Title>This is the Demo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>hellow how are you</h6>
          <p>lkdfjklsdfiowe sdfskldjf s slkdfjslkfj</p>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" onClick={handleClose}>
            Save changes
          </Button>
          <Button type="reset">Reset</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
