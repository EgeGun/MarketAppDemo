import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useCallback, useState } from 'react'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import AddButton from '../Components/addButton';


SplashScreen.preventAutoHideAsync();

export default function ListItem({ item }) {
  const [itemCount, setItemCount] = useState(0);
  
  const changeHandler = (val) => {
    if(val > 0) {
      setItemCount(val);
    }
  }

  const [fontsLoaded] = useFonts({
    'Raleway-Regular': require("../assets/Fonts/Raleway-Regular.ttf"),
    'Raleway-SemiBold': require("../assets/Fonts/Raleway-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={ styles.container} onLayout={onLayoutRootView}>
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
          style={styles.itemCount}
          placeholder='0'
          placeholderTextColor="#b3b3b3" 
          maxLength={2}
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
    flex:1,
    paddingHorizontal: 12,
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
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#bbb',
    marginBottom: 12,
    paddingBottom: 12,
    backgroundColor:'#0b5f7d',
  },
  itemText: {
    flex: 1,
    flexWrap: 'wrap',
    paddingLeft: 8,
    paddingBottom: 23,
    fontFamily: 'Raleway-Regular',
    fontSize: 16,
    color: '#ddd',
  },
  itemCount: {
    paddingLeft: 10,
    marginBottom: 24,
    marginRight: 12,
    fontFamily: 'Raleway-Regular',
    fontSize: 16,
    color: '#ddd',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
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