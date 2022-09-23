import { Image} from 'react-native'
import React from 'react'

const HeaderTitle = () => {
   return (
    <Image 
    style={{resizeMode: 'contain'}}
    source={require("../Images/ardenLogo.png")}/>
   )
  }

export default HeaderTitle