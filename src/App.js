import "./App.css";
// import { MyModal } from "./Components/try";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Layout/header";

import MealCard from "./Components/Meals/MealsSummary";
import Cart from "./Cart/Cart";
import { useState } from "react";

function App() {
  const [isOpen, setClose] = useState(false);
  const handleOpen = () => setClose(true);
  const handleClose = () => setClose(false);
  return (
    <div className="">
      <Header ClickOpen={handleOpen} />
      <main>
        <MealCard />
        <Cart open={isOpen} close={handleClose} />
      </main>
    </div>
  );
}

export default App;
