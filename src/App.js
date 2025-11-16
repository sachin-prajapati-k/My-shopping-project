import "./App.css";
// import { MyModal } from "./Components/try";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Layout/header";
import Meals from "./Components/Meals/Meals";
import MealCard from "./Components/Meals/MealsSummary";

function App() {
  return (
    <div className="">
      <Header />
      <main>
        <MealCard />
      </main>
    </div>
  );
}

export default App;
