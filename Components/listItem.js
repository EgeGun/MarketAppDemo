import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import AddButton from '../Components/addButton';

export default function ListItem({ item }) {
  const [itemCount, setItemCount] = useState(0);
  
  const changeHandler = (val) => {
    if(val > 0) {
      setItemCount(val);
    }
  }

  return (
    <View style={ styles.container}>
      {/* Ternary operation */}
      {item.title 
      ?
      <View style={{paddingVertical: 15,}}>
        <Text style={styles.itemTitle}>{item.title}</Text>
      </View> 
      : 
      null
      }
      <View style={styles.listItem}>
        <Text style={styles.itemPic}>{item.pic}</Text>
        <Text style={styles.itemText}>{item.text}</Text> 
        <TextInput
          style={styles.itemCountText}
          placeholder='0'
          placeholderTextColor="#dddd" 
          maxLength={3}
          keyboardType='number-pad'
          onChangeText={changeHandler}
          value={itemCount}
        />
        <View style={styles.button}>
          <AddButton item={item} itemCount={itemCount} setItemCount={setItemCount}/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
  },
  itemTitle: {
    textAlign: 'center',
    marginHorizontal: 130,
    fontFamily: 'Raleway-SemiBold',
    fontSize: 20,
    color: '#414952',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#b3b3b3',
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
  itemCountText: {
    paddingLeft: 10,
    marginBottom: 24,
    marginRight: 12,
    fontFamily: 'Raleway-Regular',
    fontSize: 16,
    color: '#0b5f7d',
    borderBottomWidth: 1,
    borderBottomColor: '#0b5f7d',
  },
  itemPic: {
    paddingLeft: 5,
    marginBottom: 11,
    paddingBottom:23,
  },
  button: {
    paddingBottom: 13,
  }
})