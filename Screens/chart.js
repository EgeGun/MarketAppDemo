import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native'
import CartContext from '../CartContext';

const ChartScreen = () => {
  const { store } = useContext(CartContext);
  
if(store.length != 0) {
    return (
      <FlatList 
        data={store}
        renderItem={({ item }) => {
          return (
            <View style={styles.listItem}>
              <Text style={styles.itemPic}>{item.pic}</Text>
              <Text style={styles.itemText}>{item.text}</Text>
              {/* <Text style={styles.itemCount}>{item[3]}</Text> */}
              <TextInput
                style={styles.itemCount}
                placeholder={item.itemCount}
                placeholderTextColor="#ddd" 
                maxLength={2}
                keyboardType='number-pad'
                // onChangeText={changeHandler}
              />
            </View>
          )
        }}
      />
    )
  } else {
      return (
        <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
          <Text>SEPETİNİZDE HENÜZ ÜRÜN BULUNMAMAKTADIR</Text>
        </View>
      )
    }
};

export default ChartScreen;

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 10,
    marginHorizontal: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#bbb',
    backgroundColor:'#0b5f7d',
  },
  itemPic: {
    paddingLeft: 5,
    marginBottom: 10,
    paddingBottom: 23,
  },
  itemText: {
    flex: 1,
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    paddingLeft: 12,
    paddingBottom: 16,
    marginBottom: 10,
    fontFamily: 'Raleway-Regular',
    fontSize: 16,
    color: '#ddd',
  },
    itemCount: {
      alignContent: 'flex-end',
      flexWrap: 'wrap',
      paddingLeft: 12,
      marginRight: 72,
      marginBottom: 36,
      fontFamily: 'Raleway-Regular',
      fontSize: 16,
      color: '#ddd',
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
  },
});