import { Button, Card } from "react-bootstrap";
import { IData, MealsProps } from "../../types.js/types";
import CartInputFunction from "../AddForm/CartInputForm";
import { Tooltip } from "../../additional-components/Tooltip";

const Meals = ({ meal }: MealsProps) => {
  const { title, category, description, image, rating, price, id } = meal;
  const Price = `$${price.toFixed(2)}`;
  if (!meal) {
    return <div>No meal data available.</div>; // Or render a skeleton/loading state
  }

  return (
    <>
      <div className="mb-2 ">
        <Card style={{ width: "200px", height: "380px" }}>
          <Card.Img src={image} alt="hello" />
          <Card.Header>{title}</Card.Header>
          <Card.Body className="p-1 ">
            <h4>{category}</h4>
            <span>{description}</span>
            <br></br>
            <span>{Price}</span>
            <br />
            <span>Rating⭐ {rating}</span>
            {/* <Card.Footer> */}
            <span
              style={{
                position: "absolute",
                bottom: 0,
                alignItems: "cener",
              }}
            >
              <CartInputFunction
                label={title}
                input={{ type: "Number", min: 1, max: 5, defaultvalue: 0 }}
                id={id}
              />
            </span>
            {/* </Card.Footer> */}
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Meals;
