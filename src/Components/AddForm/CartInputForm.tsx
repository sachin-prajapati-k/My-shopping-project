import { Button, Form, InputGroup } from "react-bootstrap";
import { IInput } from "../../types.js/types";

export default function CartInputFunction(props: IInput) {
  return (
    <>
      <Form style={{ width: "100%" }}>
        <InputGroup>
          {/* <InputGroup.Text> {props.label}</InputGroup.Text> */}
          <Form.Control {...props.input} />
          <Button variant="primary">+ Add</Button>
        </InputGroup>
      </Form>
    </>
  );
}
