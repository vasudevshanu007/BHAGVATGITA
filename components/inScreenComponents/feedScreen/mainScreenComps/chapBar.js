import React, { useContext } from 'react'
import { GitaContext } from '../../../../utils/context/context';
import { Text, View} from 'react-native'
const ChapBar = () => {
    const {currentChapNum,currentShlokNum} = useContext(GitaContext);
  return (
    <View className=" flex items-center" >
    <View className="flex flex-row bg-fuchsia-50 p-2 rounded-lg shadow-xl " >
    <Text className="text-lg font-bold px-1 text-black" >अध्याय: {currentChapNum}</Text>
    <Text className="text-lg font-bold px-1 text-black" >श्लोक: {currentShlokNum}</Text>
    </View>
    </View>
  )
}

export default ChapBar;
