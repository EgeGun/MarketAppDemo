import { StyleSheet, Text, View, LogBox } from 'react-native'
import React, { useCallback } from 'react'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import AddButton from '../Components/addButton';

SplashScreen.preventAutoHideAsync();
LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);

export default function ListItem({ item, navigation }) {
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
    <View style={styles.container} onLayout={onLayoutRootView}>
      <View style={{paddingVertical: 15,}}>
        <Text style={styles.itemTitle}>{item.title1_1}</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.itemPic}>{item.pic1_1}</Text>
        <Text style={styles.itemText}>{item.text1_1}</Text>
        <AddButton item={item}/>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.itemPic}>{item.pic1_2}</Text>
        <Text style={styles.itemText}>{item.text1_2}</Text>
        <AddButton item={item}/>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.itemPic}>{item.pic1_3}</Text>
        <Text style={styles.itemText}>{item.text1_3}</Text>
        <AddButton item={item}/>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.itemPic}>{item.pic1_4}</Text>
        <Text style={styles.itemText}>{item.text1_4}</Text>
        <AddButton item={item}/>
      </View>
      <View style={{paddingVertical: 15,}}>
        <Text style={styles.itemTitle}>{item.title2_1}</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.itemPic}>{item.pic2_1}</Text>
        <Text style={styles.itemText}>{item.text2_1}</Text>
        <AddButton item={item}/>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.itemPic}>{item.pic2_2}</Text>
        <Text style={styles.itemText}>{item.text2_2}</Text>
        <AddButton item={item}/>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.itemPic}>{item.pic2_3}</Text>
        <Text style={styles.itemText}>{item.text2_3}</Text>
        <AddButton item={item}/>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.itemPic}>{item.pic2_4}</Text>
        <Text style={styles.itemText}>{item.text2_4}</Text>
        <AddButton item={item}/>
      </View>
      <View style={{paddingVertical: 15,}}>
        <Text style={styles.itemTitle}>{item.title3_1}</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.itemPic}>{item.pic3_1}</Text>
        <Text style={styles.itemText}>{item.text3_1}</Text>
        <AddButton item={item}/>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.itemPic}>{item.pic3_2}</Text>
        <Text style={styles.itemText}>{item.text3_2}</Text>
        <AddButton item={item}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingLeft: 8,
    paddingRight: 8,
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
  itemText: {
    flex: 1,
    flexWrap: 'wrap',
    paddingLeft: 8,
    fontFamily: 'Raleway-Regular',
    fontSize: 16,
    color: '#ddd',
  },
  itemPic: {
    paddingLeft: 5,
  }
})