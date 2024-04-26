import React from 'react'

import {dev} from '../../../resources/imageLinks';
import { IconButton } from 'react-native-paper';
import browserLinking from '../../../utils/browserLinking';
import { devGithub,devInstagram,devLinkedin } from '../../../resources/devUris';
import {
    Image,
    Text,
    View,
  } from 'react-native';
const Developer = () => {
  return (
    <View className="mt-2 mb-20" >
        <View className=" flex justify-center items-center mb-2 " >
  <Text className="text-2xl font-bold text-black" >Developer</Text>
</View>
<View className=" items-center mt-4 mx-5 mb-10 rounded-2xl bg-white p-5 shadow-lg " >
  <Image source={dev} className="w-20  h-20 m-2 rounded-full" />
  <Text className="text-xl text-black font-bold " > Harsh Kumar</Text>
  <View className="flex flex-row" >
  <IconButton
    icon="linkedin"
    iconColor={500}
    size={30}
    onPress={() => browserLinking(devLinkedin)}
  />
  <IconButton
    icon="github"
    iconColor={500}
    size={30}
    onPress={() => browserLinking(devGithub)}
  />
  <IconButton
    icon="instagram"
    iconColor={500}
    size={30}
    onPress={() => browserLinking(devInstagram)}
  />
  </View>
</View>
    </View>
  )
}

export default Developer
