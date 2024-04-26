import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { IconButton } from 'react-native-paper'
import TitleBar from '../../TitleBar'



const InternetConnection = ({setOnline}) => {
  return (
    <SafeAreaView>
        <TitleBar/>
        <View className="items-center mt-20" >
        <View>
          <Text className="text-black" >
            No internet connection
          </Text>
          <View className="items-center p-5 " >
          <IconButton
            className=" bg-fuchsia-50 shadow-xl"
            icon="refresh"
            iconColor={500}
            size={30}
            onPress={() => {setOnline(false);}}
           />
        </View></View>
        </View>
      </SafeAreaView>
  )
}

export default InternetConnection;
