import { StyleSheet, Text, View, SafeAreaView, Image, StatusBar } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { UserIcon, ChevronDownIcon, SearchIcon, AdjustmentsIcon } from "react-native-heroicons/outline";

const HomeScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    },[])

  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      


      <Text className="text-red-900"> 

      {/* header*/}

      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image source={{uri:"https://links.papareact.com/wru",}} className="h-7 w-7 bg-gray-300 p-4 rounded-full"/>

        <View>
           <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
           <Text className="font-bold text-xl"> Current Location <ChevronDownIcon size={20} color="#00ccbb" />  </Text>
        </View>
      </View>

       </Text>
    </SafeAreaView>
  )
}

export default HomeScreen

// const styles = StyleSheet.create({})