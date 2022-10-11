import React from "react";
import HomeStack from "./Routes/homeStack";
import { CartProvider } from "./CartContext";

export default function App() {
  return (
    <CartProvider>
      <HomeStack/>
    </CartProvider>
  );
}