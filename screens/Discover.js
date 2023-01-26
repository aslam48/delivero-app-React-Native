import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, ActivityIndicator} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import {Avatar, Hotels, Attractions, Restaurants, NotFound} from '../assets'
import { FontAwesome } from '@expo/vector-icons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MenuContainer from '../components/MenuContainer'
import { useState } from 'react'
import ItemCardContainer from '../components/ItemCardContainer'





const Discover = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [type, setType] = useState("restaurants")
    const [mainData, setMainData] =useState([])

    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    },[])

  return (
   <SafeAreaView className="flex-1 bg-white relative mt-8">
    <View className="flex-row items-center justify-between px-8">
        <View>
            <Text className="text-[40px] text-[#0b646b] font-bold">Discover</Text>
            <Text className="text-[#527283] text-[36px]">the beauty today</Text>
        </View>

        <View className=" w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
           <Image source={Avatar} className="w-full h-full rounded-md object-cover"/>
        </View>
    </View>


    {/* search area */}

    <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4">
    <GooglePlacesAutocomplete
      GooglePlacesDetailsQuery={{fields:"geometry"}}
      placeholder='Search'
      fetchDetails={true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(details ?.geometry?.viewport);
      }}
      query={{
        key: 'YOUR API KEY',
        language: 'en',
      }}
    />
    </View>


    {/* menue option */}

{isLoading ? (  <View className="flex-1 items-center justify-center">
    <ActivityIndicator size="large" color="#0b646b" />
</View> ) : ( 
    <ScrollView>
        <View className="flex-row items-center justify-between px-8 mt-8">

  <MenuContainer 
   key={"hotel"}
    title="Hotels"
    imageSrc={Hotels}
    type={type}
    setType={setType}
    />

<MenuContainer 
   key={"rttractions"}
    title="Attractions"
    imageSrc={Attractions}
    type={type}
    setType={setType}
    />

<MenuContainer 
   key={"restaurants"}
    title="Restaurants"
    imageSrc={Restaurants}
    type={type}
    setType={setType}
    />
     </View>

    <View>
        <View className="flex-row items-center justify-between px-8 mt-6">
            <Text className="text-[#2c7379] text-[23px] font-bold">Top Tips</Text>
            <TouchableOpacity className="flex-row items-center justify-center space-x-1">
                <Text className="text-[#a0c4c7] text-[15px] font-bold">Explore</Text>
                <FontAwesome name="long-arrow-right" size={24} color="#a0c4c7" />
            </TouchableOpacity>
        </View>
    </View>


   <View className="px-4 flex-row items-center justify-evenly flex-wrap  mt-5">
    {mainData?.length > 0 ? ( <>  
        <ItemCardContainer key={"102"} imageSrc={"https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"} title="" location=""/>
    <ItemCardContainer key={"101"} imageSrc={"https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"} title="" location=""/>
    </> ) 
    : (<>
    <View className="w-full h-[290px] items-center space-y-8 justify-center">
        <Image source={NotFound} className="w-32 h-32 object-cover"/>
        <Text className="text-2xl text-[#428288] font-semibold">Opps.. No Data Found</Text>
    </View>
    </>)}
   </View>

    </ScrollView>
)}
   </SafeAreaView>
  )
}

export default Discover