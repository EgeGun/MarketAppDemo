import React from 'react';
import { View, Image } from 'react-native';
import {useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/home';
import ChartScreen from '../Screens/chart';
import HeaderTitle from '../Components/headerTitle';
import { AntDesign } from '@expo/vector-icons'; 

const Stack = createNativeStackNavigator();

function GoToButton({ screenName }) {
    const navigation = useNavigation();
  
    return (
        <AntDesign style={{ paddingRight: 10 }} name="shoppingcart" size={24} color="black" 
        onPress={() => navigation.navigate(screenName)}
      />
    );
  }

export default function HomeStack() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' children={() => <HomeScreen navigation={useNavigation}/>}
            options={{
                headerTitle: () => <HeaderTitle/>, 
                headerTitleAlign: 'center',
                headerStyle: {
                 backgroundColor:'#0b5f7d'
                },
                headerRight: () => (
                    <View>
                        <GoToButton screenName="Sepet"/>
                    </View>
                )}}/>
        <Stack.Screen name='Sepet' component={ChartScreen} options={{
            headerStyle:
             {backgroundColor:'#0b5f7d'}}}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}