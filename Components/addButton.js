import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const AddButton = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Sepet", item=[{item}])}>
        <Text>+</Text>
    </TouchableOpacity>
  )
}

export default AddButton

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