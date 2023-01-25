import { StyleSheet, Text, View, SafeAreaView, Image, StatusBar } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { UserIcon, ChevronDownIcon, SearchIcon, AdjustmentsIcon } from "react-native-heroicons/outline";
import HeroImage from '../assets/index'

const HomeScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    },[])

  return (
      // <View style={styles.container}>

    <SafeAreaView className="bg-white flex-1 relative">

    {/* first section */}
   <View className="flex-row mt-10 px-6 items-center space-x-2">
    <View className="w-16 h-16 bg-black rounded-full justify-center items-center"><Text className="text-[#00bcc9] text-3xl font-semibold">GO</Text></View>
    <Text className="text-[#2a2b4b] text-3xl font-semibold">Travel</Text>
   </View>
   

    {/* second section */}
    <View className="px-6 mt-1 ">
      <Text className="text-[#3c6072] text-[42px]">Enjoy the trip with</Text>
      <Text className="text-[#00BCC9] text-[38px] font-bold">Good Moments</Text>
      <Text className="text-[#3c6072] text-base">At <Text>Go <Text>Travel</Text></Text> we offer the best travelling options, Hotels, Attractions, Resturantans,</Text>
    </View>


    {/* Third section */}
     <View className="w-[260px]  h-[260px] bg-[#00bcc9] rounded-full absolute bottom-36 -right-36"></View>
     <View className="w-[300px]  h-[300px] bg-[#e99265] rounded-full absolute bottom-1 -left-36"></View>


    {/* image container section */}
    <View className="flex-1 items-center justify-center">
      <Image source={require('../assets/hero.png')} className="w-full h-full object-cover mt-8 "/>
    </View>

    

    {/* image container section */}


   </SafeAreaView>

      // </View>
  )
}

export default HomeScreen

// const styles = StyleSheet.create({
//   container: {
//    paddingTop: 20
// }
// })