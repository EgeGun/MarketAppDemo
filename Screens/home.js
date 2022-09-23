import React, { useState } from 'react'
import { StyleSheet, View, FlatList, Image } from 'react-native';
import ListItem from '../Components/listItem';

const HomeScreen = ({ navigation }) => {
    const [items, setItems] = useState([
        {
          title1_1: "Pınar",

          text1_1: "Pınar Klasik Dana Sucuk (225g)", 
          pic1_1: <Image 
          style={styles.image1}
          source={require("../Images/klasik_dana_sucuk_paket.png")}/>,

          text1_2: "Pınar Uzun Sosis (225g)",
          pic1_2: <Image 
          style={styles.image1}
          source={require("../Images/pinar_uzun_sosis.png")}/>,

          text1_3: "Pınar Aç Bitir Hindi Salam (75g)",
          pic1_3: <Image 
          style={styles.image1}
          source={require("../Images/acbitir_hindi_salam.png")}/>,

          text1_4: "Pınar Süt (1L)",
          pic1_4: <Image 
          style={styles.image1}
          source={require("../Images/pinar_sut.png")}/>,
          

          title2_1: "Şen Piliç",
  
          text2_1: "Şen Piliç Şinitzel (200g)",
          pic2_1: <Image 
          style={styles.image1}
          source={require("../Images/senpilic_sinitzel_300g.png")}/>,
  
          text2_2: "Şen Piliç Şinitzel (1000g)",
          pic2_2: <Image 
          style={styles.image1}
          source={require("../Images/senpilic_sinitzel_1000g.png")}/>,

          text2_3: "Şen Piliç Nugget (300g)",
          pic2_3: <Image 
          style={styles.image1}
          source={require("../Images/senpilic_nugget_300g.png")}/>,
  
          text2_4: "Şen Piliç Nugget (1000g)",
          pic2_4: <Image 
          style={styles.image1}
          source={require("../Images/senpilic_nugget_1000g.png")}/>,  
  
          
          title3_1: "Maestro Massimo",
  
          text3_1: "Maestro Massimo Wafer Chocolate Cream (45g)",
          pic3_1: <Image 
          style={styles.image1}
          source={require("../Images/maestro_massimo_wafer_chocolatecream45g.png")}/>,
  
          text3_2: "Maestro Massimo Tortine Classic (20g)",
          pic3_2: <Image 
          style={styles.image1}
          source={require("../Images/maestro_massimo_tortina_classic20g.png")}/>        
        },

        
    ])
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} navigation={navigation}/>
        )}
      />
    </View>
  )
};

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 5,
        paddingBottom: 30,
      },
      image1: {
        height: 60,
        width: 50,
      }
})