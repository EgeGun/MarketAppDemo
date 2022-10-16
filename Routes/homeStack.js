import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons'; 
import HeaderTitle from '../Components/headerTitle';
import HomeScreen from '../Screens/home';
import ChartScreen from '../Screens/chart';
import CartContext from '../CartContext';

const Stack = createNativeStackNavigator();

function GoToButton({ screenName, onLayoutRootView }) {
  const { store } = useContext(CartContext);
  const navigation = useNavigation();

  let chartCount = 0;
  for(let i =0 ; i < store.length; i++) {
    chartCount += parseInt(store[i].itemCount)
  }

  return (
      <TouchableOpacity style={styles.cartContainer} onLayout={onLayoutRootView}
        onPress={() => navigation.navigate(screenName)}>
        <AntDesign style={styles.cart} name="shoppingcart" size={24} color="#0b5f7d"/>
        <Text style={styles.itemCount}>{chartCount}</Text>
      </TouchableOpacity>
  );
};

export default function HomeStack({ onLayoutRootView}) {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}
            options={{
                headerTitle: () => <HeaderTitle/>, 
                headerTitleAlign: 'flex-start',
                headerStyle: {
                 backgroundColor:'#ffff'
                },
                headerRight: () => (
                  <GoToButton screenName="Sepet" onLayoutRootView={onLayoutRootView}/>
                )}}/>
        <Stack.Screen name='Sepet'component={ChartScreen}
            options={{
              title: 'Sepet',
              headerTintColor: '#0b5f7d',
              headerStyle:
              {backgroundColor:'#ffff'}}}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
};

const styles = StyleSheet.create({
  cartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 36,
    width: 72,
    borderWidth: 1,
    borderColor: '#0b5f7d',
    borderRadius: 6,
  },
  cart: {
    marginRight: 6,
  },
  itemCount: {
    paddingBottom: 4,
    fontFamily: 'Raleway-SemiBold',
    fontSize: 16,
    color: '#0b5f7d',
  },
});