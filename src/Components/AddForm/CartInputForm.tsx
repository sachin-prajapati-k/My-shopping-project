import { Button, Form, InputGroup } from "react-bootstrap";
import { IInput } from "../../types.js/types";
import { forwardRef } from "react";

const CartInputFunction = forwardRef<HTMLInputElement, IInput>((props, ref) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (props.onSubmit) {
      props.onSubmit(e as any);
    }
  };

  return (
    <>
      <Form style={{ width: "100%" }} onSubmit={handleSubmit}>
        <InputGroup>
          <Form.Label>Amount</Form.Label>
          <Form.Control {...props.input} ref={ref} />
          <Button type="submit" variant="primary">
            + Add
          </Button>
        </InputGroup>
      </Form>
    </>
  );
});

CartInputFunction.displayName = "CartInputFunction";

export default CartInputFunction;
