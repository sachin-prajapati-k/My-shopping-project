import { Button, Card } from "react-bootstrap";
import { IData, MealsProps } from "../../types.js/types";

import { Tooltip } from "../../additional-components/Tooltip";
import { useRef, useState } from "react";
import CartInputFunction from "../AddForm/CartInputForm";

const Meals = ({ meal }: MealsProps) => {
  const [AmountisValid, setAmountisValid] = useState(true);
  const { title, category, description, image, rating, price, id } = meal;
  const AmountInputRef = useRef(0) as any;

  // Cast the imported function to a component type so it can be used in JSX
  const CartInput = (CartInputFunction as unknown) as any;

  const submitHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const enteredAmount = AmountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().lenght === 0 ||
      enteredAmountNumber > 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountisValid(false);
      return;
    }
    meal.addToCart(enteredAmountNumber);
  };
  const Price = `$${price.toFixed(2)}`;
  if (!meal) {
    return <div>No meal data available.</div>; // Or render a skeleton/loading state
  }

  return (
    <>
      <div className="mb-2">
        <Card style={{ width: "200px", height: "380px" }}>
          <Card.Img src={image} alt="hello" />
          <Card.Header>{title}</Card.Header>
          <Card.Body className="p-1 ">
            <h4>{category}</h4>
            <span>{description}</span>
            <br></br>
            <span>{Price}</span>
            <br />
            <span>Rating ⭐ {rating}</span>
            {/* <Card.Footer> */}
            <span
              style={{
                position: "absolute",
              <CartInput
                label={title}
                input={{ type: "Number", min: 1, max: 5, defaultvalue: 0 }}
                id={id}
                ref={AmountInputRef}
                onSubmit={submitHandler}
              />
                id={id}
                ref={AmountInputRef}
                onSubmit={submitHandler}
              />
            </span>
            {!AmountisValid && <p>Please enter a valid number (1-5)</p>}
            {/* </Card.Footer> */}
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Meals;
