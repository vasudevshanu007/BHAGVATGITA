import React, { useContext } from 'react'
import { GitaContext } from '../../../../utils/context/context';
import { ScrollView, Text, TouchableOpacity, View} from 'react-native'

const ScrollShlok = () => {
    const {allChapters,currentChapNum,setCurrentShlok,setChangeShlok, setCurrentShlokNum} = useContext(GitaContext);
    const obj = allChapters.find((element)=>(element.chapter_number)===parseInt(currentChapNum));
    const verseCount = obj.verses_count;
    const x = [];
    var i = 1;
    while(i<=verseCount){
        x.push(i);
        i++;
    }

  return (
    <View className="m-5 mb-32  " >
        <View className="items-center mb-1" >
        <Text className="text-black text-lg "  >Select Shlok</Text></View>
    <ScrollView horizontal={true}  >
        {x.map((item)=>(

            <View key={item} >
                <TouchableOpacity onPress={() => {setCurrentShlok(null);setChangeShlok(item);setCurrentShlokNum(0);}} >
                    <View className=" p-3 m-3 rounded-lg shadow-sm bg-fuchsia-50" >
                    <Text className="text-black text-lg">{item}</Text></View>
                </TouchableOpacity>
            </View>
        )
            
        )}
    </ScrollView>
    </View>
  )
}

export default ScrollShlok
