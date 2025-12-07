import { Card } from "react-bootstrap";
import { MealsProps } from "../../types.js/types";
import { useRef, useState } from "react";
import CartInputFunction from "../AddForm/CartInputForm";

const Meals = ({ meal }: MealsProps) => {
  const [AmountisValid, setAmountisValid] = useState(true);
  const { title, category, description, image, rating, price, id } = meal;
  const AmountInputRef = useRef<HTMLInputElement>(null);

  // Cast the imported function to a component type so it can be used in JSX
  const CartInput = CartInputFunction as unknown as any;

  const submitHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const enteredAmount = AmountInputRef.current?.value || "";
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountisValid(false);
      return;
    }
    setAmountisValid(true);
    // Pass complete item data to cart
    meal.addToCart({
      id: id,
      title: title,
      price: price,
      image: image,
      amount: enteredAmountNumber,
    });
    // Reset input after adding to cart
    if (AmountInputRef.current) {
      AmountInputRef.current.value = "";
    }
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
            <CartInput
              label={title}
              input={{ type: "number", min: 1, max: 5, defaultValue: 0 }}
              id={id}
              ref={AmountInputRef}
              onSubmit={submitHandler}
            />
            {!AmountisValid && <p>Please enter a valid number (1-5)</p>}
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Meals;
