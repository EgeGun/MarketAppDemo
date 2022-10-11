import { StyleSheet, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useContext } from 'react'
import CartContext from '../CartContext'

const AddButton = ({ item, itemCount }) => {

  const { addToCart } = useContext(CartContext);

  return (
    <TouchableOpacity style={styles.button} onPress={() => itemCount ? 0 > addToCart(item, itemCount)
      : Alert.alert('Dikkat!', 'Ürün adedi 0\'dan BÜYÜK olmalıdır.', [
        {text: 'Tamam'}])}>
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