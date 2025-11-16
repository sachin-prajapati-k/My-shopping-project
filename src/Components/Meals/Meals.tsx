import { Card } from "react-bootstrap";
import { IData } from "../../types.js/types";
type MealsProps = {
  meal: IData;
};

const Meals = ({ meal }: MealsProps) => {
  const { title, category, description, image, rating } = meal;
  if (!meal) {
    return <div>No meal data available.</div>; // Or render a skeleton/loading state
  }

  return (
    <>
      <div className="mb-2">
        <Card style={{ width: "200px", height: "350px" }}>
          <Card.Img src={image} alt="hello" />
          <Card.Header>{title}</Card.Header>
          <Card.Body className="p-1">
            <h4>{category}</h4>
            <p>{description}</p>
            <p>Rating⭐ {rating}</p>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Meals;
