import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Layout/header";
import MealCard from "./Components/Meals/MealsSummary";
import Cart from "./Cart/Cart";
import { useState } from "react";

import CartProvider from "./Components/Store/CartProvider";
function App() {
  const [isOpen, setIsOpen] = useState(false); // renamed setter
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  return (
    <>
      <CartProvider>
        <Header ClickOpen={handleOpen} />
        <main>
          <MealCard />
          <Cart open={isOpen} close={handleClose} />
        </main>
      </CartProvider>
    </>
  );
}

export default App;
