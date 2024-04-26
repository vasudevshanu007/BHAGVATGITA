import React, { useContext } from 'react'
import { GitaContext } from '../../../../utils/context/context';
import { Text, View } from 'react-native';

const ShlokCard = () => {
    const {currentShlok} = useContext(GitaContext);
  return (
    <View className="mt-5" >
    <View className="flex items-center" >
    <View className="bg-white rounded-2xl " >
    <View className="p-5 items-center w-11/12" >
    <Text className="text-lg pb-3 font-bold underline text-black " >श्लोक</Text>
    <Text className="text-xl text-center leading-10 text-black " >{currentShlok.slok}</Text>
    </View>
    </View>
    </View>
   </View>
  )
}

export default ShlokCard;
