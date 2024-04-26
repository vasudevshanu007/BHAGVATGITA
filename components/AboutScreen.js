
import React from 'react'
import {
    Image,
    Linking,
    SafeAreaView,
    ScrollView,
    Text,
    View,
  } from 'react-native';
import AboutSection from './inScreenComponents/AboutScreen/AboutSection';
import KrishnaImages from './inScreenComponents/AboutScreen/KrishnaImages';
import Developer from './inScreenComponents/AboutScreen/Developer';
import TitleBar from './TitleBar'





const AboutScreen = () => {
  return (
    <SafeAreaView className="bg-slate-200" >
    <TitleBar />
    <ScrollView>
    <AboutSection/>
    <KrishnaImages/>
    <Developer/>

</ScrollView>
</SafeAreaView>
    
  )
}

export default AboutScreen
