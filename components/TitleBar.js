import React from 'react'
import { View, Text } from 'react-native'
const TitleBar = () => {
  return (
    <View className="flex justify-center items-center mt-5 p-2 " >
        <Text className="text-3xl font-bold text-black  " >
           Shreemad Bhagavad Gita
        </Text>
        <Text className="text-xs text-black " >The Divine Song of God</Text>
    </View>
  )
}

export default TitleBar
