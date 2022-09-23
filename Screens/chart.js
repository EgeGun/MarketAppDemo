import React from 'react'
import { View, Text } from 'react-native'

export default function ChartScreen({ navigation, route }) {
  const item1 = route.params[0].item["text1_1"];
  const item = route.params[0].item["pic1_1"];
  console.log(item)

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1,}}>
      <Text>{item}{item1}</Text>
    </View>
  )
}