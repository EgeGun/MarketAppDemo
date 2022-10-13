import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'; 
import CartContext from '../CartContext';

const ChartScreen = () => {
  const [refreshList, setRefreshList] = useState(false);

  const { store } = useContext(CartContext);
  const { setStore } = useContext(CartContext);

if(store.length != 0) {
    return (
      <FlatList 
        data={store}
        extraData={refreshList}
        renderItem={({ item }) => {
          const pressHandler = (key) => {
            setStore((prevItems) => {
              return prevItems.filter((item) => item.key != key)
            })
          };
          function increment(){
            item.itemCount++;
              if(item.itemCount % 2 == 0 || item.itemCount == 0){
                return setRefreshList(true);
              }else {
                return setRefreshList(false);
              }
          }
          function decrement(){
            if(item.itemCount > 0){
              item.itemCount--;
              if(item.itemCount % 2 == 0){
                return setRefreshList(true);
              }else {
                return setRefreshList(false);
              }
            }
          }
          return (
            <View style={styles.listItem}>
              <Text style={styles.itemPic}>{item.pic}</Text>
              <Text style={styles.itemText}>{item.text}</Text>
              <View style={styles.itemCountView}>
                <TouchableOpacity style={styles.up} hitSlop={{top: 15, right: 15, bottom: 15, left: 15}}
                  onPress={() => increment()}>
                  <MaterialIcons name="arrow-drop-up" size={36} color="#ddd"/>
                </TouchableOpacity>
                <Text style={styles.itemCountText}>{item.itemCount}</Text>
                <TouchableOpacity hitSlop={{top: 5, right: 15, bottom: 15, left: 15}}
                  onPress={() => decrement()}>
                  <MaterialIcons name="arrow-drop-down" size={36} color="#ddd"/>
                </TouchableOpacity>
              </View>
                <TouchableOpacity style={styles.icon}>
                  <MaterialIcons name="delete" size={30} color="black" onPress={() => pressHandler(item.key)}/>
                </TouchableOpacity>
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
    marginBottom: 12,
    paddingBottom: 24,
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
  itemCountView: {
    // backgroundColor: 'yellow',
    flexDirection: 'column',
    paddingLeft: 12,
    marginRight: 72,
  },  
  itemCountText: {
    // backgroundColor: 'red',
    alignSelf: 'center',
    marginRight: 12,
    fontFamily: 'Raleway-Regular',
    fontSize: 16,
    color: '#ddd',
  },
  up: {
    marginRight: 12,
    marginBottom: -2,
  },
  icon: {
    alignSelf: 'center',
    marginRight: 12,
    marginLeft: -48,
  },
});