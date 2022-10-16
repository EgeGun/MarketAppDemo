import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button, Alert } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons';
import CartContext from '../CartContext';

const ChartScreen = () => {
  const [refreshList, setRefreshList] = useState(false);

  const { store } = useContext(CartContext);
  const { setStore } = useContext(CartContext);

if(store.length != 0) {
    return (
      <View style={styles.container}>
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
                  <TouchableOpacity style={styles.up} 
                    hitSlop={{top: 15, right: 15, bottom: 15, left: 15}}
                    onPress={() => increment()}>
                    <MaterialIcons name="arrow-drop-up" size={36} color="#0b5f7d"/>
                  </TouchableOpacity>
                  <Text style={styles.itemCountText}>{item.itemCount}</Text>
                  <TouchableOpacity 
                    hitSlop={{top: 5, right: 15, bottom: 15, left: 15}}
                    onPress={() => decrement()}>
                    <MaterialIcons name="arrow-drop-down" size={36} color="#0b5f7d"/>
                  </TouchableOpacity>
                </View>
                  <TouchableOpacity style={styles.icon}>
                  <Octicons name="trash" size={32} color="#0b5f7d"
                      onPress={() => pressHandler(item.key)}/>
                  </TouchableOpacity>
              </View>
            )
          }}
        />
        <View style={styles.orderButton}>
          <Button title='SIPARIS VER' color={'#0b5f7d'} onPress={() => Alert.alert(
            'Dikkat!', 'Siparişimi ilet...', [
              {text: "Evet", style: "cancel"},
              { text: "Hayır",  }])}/>
        </View>
      </View>
    )
  } else {
      return (
        <View style={styles.noItem}>
          <Text style={styles.noItemText}>SEPETİNİZDE HENÜZ ÜRÜN BULUNMAMAKTADIR</Text>
        </View>
      )
    }
};

export default ChartScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 10,
    marginHorizontal: 12,
    borderRadius: 10,
    backgroundColor:'#ffff',
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
    color: '#1A1A1A',
  },
  itemCountView: {
    flexDirection: 'column',
    paddingLeft: 12,
    marginRight: 72,
  },  
  itemCountText: {
    alignSelf: 'center',
    marginRight: 12,
    fontFamily: 'Raleway-Regular',
    fontSize: 16,
    color: '#1A1A1A',
  },
  up: {
    marginRight: 12,
    marginBottom: -3,
  },
  icon: {
    alignSelf: 'center',
    marginRight: 16,
    marginLeft: -56,
  },
  orderButton:{
    paddingHorizontal: 24,
  },
  noItem: {
    flex: 1,
    alignItems: 'center', 
    paddingTop: 50,
  },
  noItemText: {
    fontFamily: 'Raleway-SemiBold',
  },
});