import React from 'react'
import {homeImage} from '../../../resources/imageLinks'
import {
    Image,
    Text,
    View,
  } from 'react-native';
const AboutSection = () => {
  return (
    <View className=" mx-5 border-2 mt-5 rounded-3xl bg-white  " >
<View className=" p-5 flex justify-center items-center" >
    <Image className=" w-full h-80  rounded-2xl"  source={homeImage} />
    <Text className='mt-3 font-bold text-2xl text-black'  >About</Text>
    <Text className='mt-3 text-black' >The Bhagavad Gita, often referred to as the Gita, is a 700-verse Hindu scripture, which is part of the epic Mahabharata. It forms the chapters 23–40 of book 6 of the Mahabharata called the Bhishma Parva. The work is dated to the second half of the first millennium BCE.</Text>
    <Text className='mt-3 text-black' >The Bhagavad Gita is set in a narrative framework of dialogue between the Pandava prince Arjuna and his charioteer guide Krishna, an avatar of Vishnu. </Text>
    <Text className='mt-3 text-black' >At the start of the Kurukshetra War between the Pandavas and the Kauravas, Arjuna despairs thinking about the violence and death the war will cause in the battle against his kin and becomes emotionally preoccupied with a dilemma. </Text>
    <Text className='mt-3 text-black' >Wondering if he should renounce the war, Arjuna seeks the counsel of Krishna, whose answers and discourse constitute the Bhagavad Gita. Krishna counsels Arjuna to "fulfil his Kshatriya (warrior) duty" for the upholding of dharma.</Text>
    <Text className='mt-3 text-black' >The Krishna–Arjuna dialogue covers a broad range of spiritual topics, touching upon moral and ethical dilemmas, and philosophical issues that go far beyond the war that Arjuna faces.The setting of the text in a battlefield has been interpreted as an allegory for the struggles of human life.</Text>

</View>
</View>
  )
}

export default AboutSection
