import React, { useContext } from 'react'
import { GitaContext } from '../../../../utils/context/context';
import { Text, View } from 'react-native';
import { IconButton } from 'react-native-paper'


const NextBackButtons = () => {
    const {currentShlok,setCurrentShlok,setChangeShlok} = useContext(GitaContext);
    
  return (
    <View className=" m-10 items-center" >
    <View className=" flex flex-row   " >
        <View className="bg-fuchsia-50 rounded-full shadow-2xl m-2 " >
    <IconButton
            icon="skip-previous"
            iconColor={500}
            size={40}
            onPress={() => {setCurrentShlok(null);setChangeShlok(-1);}}
           /></View>
      <View className="bg-fuchsia-50 rounded-full shadow-2xl m-2 " >
    <IconButton
            icon="skip-next"
            iconColor={500}
            size={40}
            onPress={() => {setCurrentShlok(null);setChangeShlok(1);}}
           /></View>
      </View></View>
  )
}

export default NextBackButtons;
