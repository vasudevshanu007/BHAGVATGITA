
import React, { useContext } from 'react'

import {
    SafeAreaView,
  } from 'react-native';
import TitleBar from './TitleBar'
import ChaptersScroll from './inScreenComponents/ChapterScreen/ChaptersScroll';
import { GitaContext } from '../utils/context/context';





const ChapterScreen = () => {
    const {currentShlok,setCurrentShlok,setChangeShlok,allChapters} = useContext(GitaContext);
  return (
    <SafeAreaView className="bg-slate-200" >
    <TitleBar />
    { (allChapters.length!==0) && <ChaptersScroll/>}
</SafeAreaView>
    
  )
}

export default ChapterScreen
