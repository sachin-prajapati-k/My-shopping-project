import { Button, Form, InputGroup } from "react-bootstrap";
import { IInput } from "../../types.js/types";
import { useRef } from "react";

export default function CartInputFunction(
  props: IInput,
  ref: IInput,
  onSubmit: IInput
) {
  return (
    <>
      <Form style={{ width: "100%" }}>
        <InputGroup>
          {/* <InputGroup.Text> {props.label}</InputGroup.Text> */}
          <Form.Label>Amount</Form.Label>
          <Form.Control {...props.input} ref={ref as any} />
          <Button variant="primary">+ Add</Button>
        </InputGroup>
      </Form>
    </>
  );
}
