import { StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useContext } from 'react'
import CartContext from '../CartContext'
import { MaterialIcons } from '@expo/vector-icons'; 

const AddButton = ({ item, itemCount, setItemCount }) => {
  const { addToCart } = useContext(CartContext);
  
  function submitAndReset() {
    itemCount ? 0 > addToCart(item, itemCount)
      : Alert.alert('Dikkat!', 'Ürün adedi 0\'dan BÜYÜK olmalıdır.', [
        {text: 'Tamam'}])
    setItemCount(null)
  }

  return (
    <TouchableOpacity style={styles.button} onPress={() => submitAndReset()}>
      <MaterialIcons name="add-circle-outline" size={30} color="#0b5f7d" />
    </TouchableOpacity>
  )
}

export default AddButton;

const styles = StyleSheet.create({
    button: {
        marginRight: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
})