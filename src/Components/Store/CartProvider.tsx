import { ReactNode } from "react";
import { CartContext } from "./CartContext";
import { useReducer } from "react";

type CartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id?: any;
  price: number;
  amount: number;
  [key: string]: any;
};

type CartState = {
  items: CartItem[];
  totalPrice: number;
};

const defaultCartState: CartState = {
  items: [],
  totalPrice: 0,
};

type CartAction = { type: "ADD"; item: CartItem } | { type: "REMOVE"; id: any };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  if (action.type === "ADD") {
    const updateItems = state.items.concat(action.item);
    const updateTotalPrice =
      state.totalPrice + action.item.price * action.item.amount;
    return {
      items: updateItems,
      totalPrice: updateTotalPrice,
    };
  }
  if (action.type === "REMOVE") {
    const updatedItems = state.items.filter((it) => it.id !== action.id);
    const updatedTotalPrice = updatedItems.reduce(
      (sum, it) => sum + it.price * it.amount,
      0
    );
    return {
      items: updatedItems,
      totalPrice: updatedTotalPrice,
    };
  }
  return state;
};

function CartProvider({ children }: CartProviderProps) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCart = (item: any): void => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItem = (id: any): void => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cartContextValue = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    addToCart: addItemToCart,
    removeFromCart: removeItem,
  };
  return (
    <CartContext.Provider value={cartContextValue as any}>
      {children}
    </CartContext.Provider>
  );
}
export default CartProvider;
