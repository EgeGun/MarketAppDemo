import { StyleSheet, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useContext } from 'react'
import CartContext from '../CartContext'

const AddButton = ({ item, itemCount, setItemCount }) => {

  const { addToCart } = useContext(CartContext);
  
  function submitAndReset() {
    itemCount ? 0 > addToCart(item, itemCount)
      : Alert.alert('Dikkat!', 'Ürün adedi 0\'dan BÜYÜK olmalıdır.', [
        {text: 'Tamam'}])
    setItemCount(0)
  }

  return (
    <TouchableOpacity style={styles.button} onPress={() => submitAndReset()}>
      <Text>+</Text>
    </TouchableOpacity>
  )
}

export default AddButton;

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginRight: 10,
        backgroundColor: '#b4b4a6',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        elevation: 8,
    },
})