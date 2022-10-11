import { createContext, useState } from "react";
import { Image, StyleSheet } from "react-native";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState(
    [
      {
        title: "Pınar",
        text: "Pınar Klasik Dana Sucuk (225g)",
        pic: <Image
          style={styles.image1}
          source={require("./Images/klasik_dana_sucuk_paket.png")} />,
        key: 1,
      },
      {
        text: "Pınar Uzun Sosis (225g)",
        pic: <Image
          style={styles.image1}
          source={require("./Images/pinar_uzun_sosis.png")} />,
        key: 2,
      },
      {
        text: "Pınar Aç Bitir Hindi Salam (75g)",
        pic: <Image
          style={styles.image1}
          source={require("./Images/acbitir_hindi_salam.png")} />,
        key: 3,
      },
      {
        text: "Pınar Süt (1L)",
        pic: <Image
          style={styles.image1}
          source={require("./Images/pinar_sut.png")} />,
        key: 4,
      },
      {
        title: "Şen",
        text: "Şen Piliç Şinitzel (200g)",
        pic: <Image
          style={styles.image1}
          source={require("./Images/senpilic_sinitzel_300g.png")} />,
        key: 5,
      },
      {
        text: "Şen Piliç Şinitzel (1000g)",
        pic: <Image
          style={styles.image1}
          source={require("./Images/senpilic_sinitzel_1000g.png")} />,
        key: 6,
      },
      {
        text: "Şen Piliç Nugget (300g)",
        pic: <Image
          style={styles.image1}
          source={require("./Images/senpilic_nugget_300g.png")} />,
        key: 7,
      },
      {
        text: "Şen Piliç Nugget (1000g)",
        pic: <Image
          style={styles.image1}
          source={require("./Images/senpilic_nugget_1000g.png")} />,
        key: 8,
      },
      {
        title: "Maestro",
        text: "Maestro Massimo Wafer Chocolate Cream (45g)",
        pic: <Image
          style={styles.image1}
          source={require("./Images/maestro_massimo_wafer_chocolatecream45g.png")} />,
        key: 9,
      },
      {
        text: "Maestro Massimo Tortine Classic (20g)",
        pic: <Image
          style={styles.image1}
          source={require("./Images/maestro_massimo_tortina_classic20g.png")} />,
        key: 10,
      }
    ]
  );

  const [store, setStore] = useState([]);
  const [count, setCount] = useState([]);
  // const addToCart = (text) => {
  //   setStore((prevState) => [...prevState, text]);
  // }

  // store[] = [obj, obj2] ->
  // [{item}, {item2}] -> 
  // [{item.text, item.pic, item.key}, {item2.text, item2.pic, item2.key}]
  const addToCart = (item, itemCount) => {
    item.itemCount = itemCount;
    console.log(item)
    // console.log(item[2])
    const isItemInCart = store.find((cartItem) => {if (cartItem.key === item.key) return true; });
    
    if (!isItemInCart) {
      setStore((currentItems) => [...currentItems, item]);
    }
    setCount((prevCount) => [...prevCount, item]);
  }

  return (
    <CartContext.Provider value={{ items, setItems, addToCart, store, count }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext;

const styles = StyleSheet.create({
  image1: {
    height: 60,
    width: 50,
  }
});