import React, { useContext, useState } from 'react'
import {
    Image,
    Linking,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
import { GitaContext } from '../../../utils/context/context';
const ChaptersScroll = () => {
    const [chap,setChap] = useState(0);
    const {setCurrentShlok,setChangeShlok,allChapters,currentChapNum,setCurrentChapNum, setCurrentShlokNum} = useContext(GitaContext);
  return (
    <View className="mb-64" >
        <View className="items-center mt-1 mb-2 " ><View  className="bg-fuchsia-50 p-2 rounded-lg " ><Text className="text-lg font-bold text-black " >वर्तमान अध्याय : {currentChapNum}</Text></View></View>
   <ScrollView className="bg-slate-200 " >
    {allChapters.map((item)=>(
        <TouchableOpacity onPress={()=>{
            if(chap===item.chapter_number){
                setChap(0);
            }else{
                setChap(item.chapter_number);
            }

        }} 
        key={item.chapter_number} className="m-5 shadow-lg " >
            <View className=" bg-white rounded-xl p-5" >
                <View className="flex justify-around flex-row " >
                    <View className=" flex justify-center mx-3 " >

                    <Text className="text-black" >अध्याय</Text>
                    <View  className="items-center">
                    <Text className="text-black" >{item.chapter_number}</Text></View>
                    </View>
                
                <View className="items-center mx-12 " >
                <Text className="text-xl font-bold underline mb-2 text-black" >नाम</Text>
                <Text className="text-black " >{item.name}</Text>
                <Text className="text-black my-2 " >{(item.meaning).hi}</Text>
                <Text className="text-black text-center  " >{(item.meaning).en}</Text>
                </View>
                <View className="flex justify-center mx-3" >
                <Text className=" text-black" >कुल श्लोक</Text>
                <View  className="items-center">
                <Text className="text-black" >{item.verses_count}</Text></View>
                
                </View>
            
            </View>
            {(chap===item.chapter_number) && 
            <View>
            <View className="my-5  border-2 border-fuchsia-200 rounded-3xl " >
                <View className=" items-center " >
                    <Text className="text-lg mb-2 text-black font-bold underline" >सारांश</Text>
                    <Text className=" p-3 text-black " >{((item.summary).hi)}</Text>

                </View>
                </View>
                <TouchableOpacity onPress={()=>{setCurrentShlok(null);setChangeShlok(1);setCurrentChapNum(item.chapter_number);setCurrentShlokNum(0);}} > 
                    <View  className="items-center ">
                        <View  className="bg-fuchsia-50 p-3 rounded-lg shadow-sm">
                            <Text className="text-lg text-black" >Select Chapter</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                </View>}
            </View>
        </TouchableOpacity>
    ))}
    <View className="mb-32" ></View>
   </ScrollView></View>
  )
}

export default ChaptersScroll
