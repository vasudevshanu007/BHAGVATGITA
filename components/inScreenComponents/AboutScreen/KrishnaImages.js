import React from 'react'

import{images} from '../../../resources/imageLinks'
import {
    Image,
    Text,
    View,
  } from 'react-native';
const KrishnaImages = () => {
  return (
   <View>
    <View className=" mx-5 flex justify-center items-center m-5" >
  <Text className="text-2xl font-bold text-black" >Shree Krishna Images⬇️</Text>
</View>
<View className="items-center" >
    {images.map((image)=>(
      <Image source={image.image} className="w-80 h-80 mx-5 mt-5 mb-3 rounded-3xl " key={image.id} />
    ))}
</View>
   </View>
  )
}

export default KrishnaImages
