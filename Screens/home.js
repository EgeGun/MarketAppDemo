import React, { useContext } from 'react'
import { StyleSheet, View, FlatList } from 'react-native';
import ListItem from '../Components/listItem';
import CartContext from '../CartContext';

const HomeScreen = () => {
  const { items } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <FlatList
        removeClippedSubviews={false}
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item}/>
        )}
      />
    </View>
  )
};

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 5,
    paddingBottom: 5,
  },
})