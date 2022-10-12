import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import {useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/home';
import ChartScreen from '../Screens/chart';
import HeaderTitle from '../Components/headerTitle';
import { AntDesign } from '@expo/vector-icons'; 
import CartContext from '../CartContext';

const Stack = createNativeStackNavigator();

function GoToButton({ screenName }) {
  const { store } = useContext(CartContext);
  const navigation = useNavigation();

  let chartCount = 0;
  for(let i =0 ; i < store.length; i++) {
    chartCount += parseInt(store[i].itemCount)
  }

  return (
      <View style={{flexDirection: 'row'}}>
        <AntDesign style={{ paddingRight: 10 }} name="shoppingcart" size={24} color="black" 
           onPress={() => navigation.navigate(screenName)}/>
        <Text style={{fontSize: 18,}}>{chartCount}</Text>
      </View>
  );
};

export default function HomeStack() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}
            options={{
                headerTitle: () => <HeaderTitle/>, 
                headerTitleAlign: 'center',
                headerStyle: {
                 backgroundColor:'#0b5f7d'
                },
                headerRight: () => (
                  <GoToButton screenName="Sepet"/>
                )}}/>
        <Stack.Screen name='Sepet'component={ChartScreen}
            options={{
              headerStyle:
              {backgroundColor:'#0b5f7d'}}}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}