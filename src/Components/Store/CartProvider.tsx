import { CartContext } from "./CartContext";

function CartProvider() {
  const AddItemToCart = (item: any) => {};
  const RemoveItem = (id: any) => {};
  const CartValue = {
    items: [],
    totalPrice: 0,
    addToCart: AddItemToCart,
    removeFromCart: RemoveItem,
  };
  return <CartContext.Provider value={CartValue}>{}</CartContext.Provider>;
}
export default CartProvider;
