import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Layout/header";
import MealCard from "./Components/Meals/MealsSummary";
import Cart from "./Cart/Cart";
import { useState } from "react";

import CartProvider from "./Components/Store/CartProvider";
function App() {
  const [isOpen, setClose] = useState(false);
  const handleOpen = () => setClose(true);
  const handleClose = () => setClose(false);
  return (
    <CartProvider>
      <Header ClickOpen={handleOpen} />
      <main>
        <MealCard />
        <Cart open={isOpen} close={handleClose} />
      </main>
    </CartProvider>
  );
}

export default App;
