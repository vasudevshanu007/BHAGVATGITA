import React, { useContext } from 'react'
import { GitaContext } from '../../../utils/context/context'
import { SafeAreaView, Text, View, Button, ScrollView } from 'react-native'
import TitleBar from '../../TitleBar'
import ChapBar from './mainScreenComps/chapBar'
import ShlokCard from './mainScreenComps/ShlokCard'
import HindiTranslation from './mainScreenComps/HindiTranslation'
import HindiMeaning from './mainScreenComps/HindiMeaning'
import NextBackButtons from './mainScreenComps/buttons'
import ScrollShlok from './mainScreenComps/ScrollShlok'
import Loading from './mainScreenComps/Loading'



const MainScreen = () => {
    // const {
    //     currentChapNum,
    //     setCurrentChapNum,
    //     currentShlokNum,
    //     setCurrentShlokNum,
    //     changeChapter,
    //     setChangeChapter,
    //     changeShlok,
    //     setChangeShlok,
    //     currentShlok,
    //     setCurrentShlok,
    //     allChapters,
    //     setAllChapters
        
    //   } = useContext(GitaContext);
    const {currentShlok,setCurrentShlok,setChangeShlok,allChapters} = useContext(GitaContext);
  return (
    <SafeAreaView className="bg-slate-200" >
    <TitleBar/>
    <ScrollView>
    <View className=" mt-5 " >
    <ChapBar/>
    { currentShlok===null && <Loading/>}
    { currentShlok && <ShlokCard/>}
    { currentShlok && <HindiTranslation/>}
    { currentShlok && <HindiMeaning/>}
    </View>
    { currentShlok &&<NextBackButtons/>}
    {currentShlok &&(allChapters.length!==0) && <ScrollShlok/>}
    </ScrollView>
    </SafeAreaView>
  )
}

export default MainScreen
